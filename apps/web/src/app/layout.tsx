import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoSyndicate™ | AI-Powered Loan Syndication Platform",
  description: "Transform institutional loan markets with intelligent capital allocation, automated document processing, and real-time covenant monitoring.",
  keywords: ["loan syndication", "AI", "institutional loans", "capital allocation", "ESG", "secondary trading"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        <div className="cyber-grid-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
