"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Message = {
  type: string;
  message: string;
  timestamp: string;
};

type WebSocketContextType = {
  isConnected: boolean;
  lastMessage: Message | null;
  notifications: string[];
  clearNotifications: () => void;
};

const WebSocketContext = createContext<WebSocketContextType>({
  isConnected: false,
  lastMessage: null,
  notifications: [],
  clearNotifications: () => {},
});

export const useWebSocket = () => useContext(WebSocketContext);

interface WebSocketProviderProps {
  children: ReactNode;
}

export const WebSocketProvider: React.FC<WebSocketProviderProps> = ({
  children,
}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<Message | null>(null);
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const wsUrl =
      process.env.NEXT_PUBLIC_WS_URL || "ws://localhost:8000/ws/web-client";

    const ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      console.log("Connected to WebSocket");
      setIsConnected(true);
    };

    ws.onclose = () => {
      console.log("Disconnected from WebSocket");
      setIsConnected(false);
    };

    ws.onmessage = (event) => {
      try {
        const data: Message = JSON.parse(event.data);
        if (data.type === "NOTIFICATION") {
          setNotifications((prev) => [data.message, ...prev]);
        }
        setLastMessage(data);
      } catch (error) {
        console.error("Failed to parse WS message", event.data, error);
      }
    };

    return () => {
      ws.close();
    };
  }, []);

  const clearNotifications = () => setNotifications([]);

  return (
    <WebSocketContext.Provider
      value={{ isConnected, lastMessage, notifications, clearNotifications }}
    >
      {children}
    </WebSocketContext.Provider>
  );
};
