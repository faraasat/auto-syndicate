"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/card";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { useToast } from "@/lib/toast-context";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";

interface SecondaryListing {
  id: string;
  borrower: string;
  sector: string;
  amount: string;
  askPrice: number; // e.g. 98.5 (cents on the dollar)
  yield: string;
  seller: string;
  rating: string;
  history: { time: string; price: number }[];
}

const mockListings: SecondaryListing[] = [
  {
    id: "S1",
    borrower: "TechCorp Industries",
    sector: "Technology",
    amount: "$5.0M",
    askPrice: 99.2,
    yield: "5.7%",
    seller: "Alpha Bank",
    rating: "BBB+",
    history: [
      { time: "09:00", price: 99.0 },
      { time: "10:30", price: 99.1 },
      { time: "12:00", price: 99.2 },
    ],
  },
  {
    id: "S2",
    borrower: "Green Energy Solutions",
    sector: "Energy",
    amount: "$2.5M",
    askPrice: 97.8,
    yield: "5.1%",
    seller: "Capital Trust",
    rating: "A-",
    history: [
      { time: "09:00", price: 98.2 },
      { time: "11:00", price: 98.0 },
      { time: "14:00", price: 97.8 },
    ],
  },
  {
    id: "S3",
    borrower: "Healthcare Partners",
    sector: "Healthcare",
    amount: "$1.2M",
    askPrice: 100.5,
    yield: "4.9%",
    seller: "EuroLend",
    rating: "BBB",
    history: [
      { time: "08:30", price: 100.2 },
      { time: "11:30", price: 100.4 },
      { time: "15:00", price: 100.5 },
    ],
  },
];

export default function SecondaryMarketPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const { addToast } = useToast();

  const filteredListings = useMemo(() => {
    return mockListings.filter(
      (l) =>
        l.borrower.toLowerCase().includes(searchQuery.toLowerCase()) ||
        l.sector.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handlePlaceBid = (borrower: string) => {
    addToast(
      `Bid submitted for ${borrower}. Waiting for counterparty response.`,
      "success"
    );
  };

  return (
    <div className="min-h-screen">
      <div className="pt-24 pb-20 px-6">
        <div className="container mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div>
              <h1 className="text-5xl font-bold mb-4">
                Secondary <span className="text-gradient">Market</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Institutional trading floor for loan participation and liquidity
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">My Listings</Button>
              <Button variant="default">List Participation</Button>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-6">
            {/* Market Overview Sidebar / Summary */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Market Pulse
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Total Live Volume
                      </div>
                      <div className="text-2xl font-bold text-neon-cyan">
                        $142.5M
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Trades Today
                      </div>
                      <div className="text-2xl font-bold text-neon-purple">
                        28
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Price Index (Avg)
                      </div>
                      <div className="text-2xl font-bold text-neon-green">
                        98.42
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-sm uppercase tracking-wider text-muted-foreground">
                    Price Trends
                  </CardTitle>
                </CardHeader>
                <CardContent className="h-[200px] p-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={mockListings[0].history}>
                      <defs>
                        <linearGradient
                          id="colorPrice"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#00f3ff"
                            stopOpacity={0.1}
                          />
                          <stop
                            offset="95%"
                            stopColor="#00f3ff"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#00f3ff"
                        fill="url(#colorPrice)"
                        strokeWidth={2}
                      />
                      <XAxis dataKey="time" hide />
                      <YAxis domain={["auto", "auto"]} hide />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          fontSize: "10px",
                        }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Trading Floor */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex gap-4 mb-6">
                <Input
                  placeholder="Search market listings..."
                  className="flex-1"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select className="bg-black/40 border border-white/10 rounded-lg px-4 text-sm outline-none focus:ring-1 focus:ring-neon-cyan transition-all">
                  <option>All Sectors</option>
                  <option>Technology</option>
                  <option>Energy</option>
                </select>
              </div>

              {filteredListings.length === 0 ? (
                <div className="py-20 text-center text-muted-foreground">
                  No active listings found for your search.
                </div>
              ) : (
                filteredListings.map((listing) => (
                  <Card
                    key={listing.id}
                    className="group hover:border-neon-cyan/20 transition-all border-white/5 bg-white/[0.02]"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-xl font-bold">
                              {listing.borrower}
                            </h3>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-muted-foreground uppercase font-bold">
                              {listing.sector}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm">
                            <div className="text-muted-foreground">
                              Amount:{" "}
                              <span className="text-white font-semibold">
                                {listing.amount}
                              </span>
                            </div>
                            <div className="text-muted-foreground">
                              Ask Price:{" "}
                              <span className="text-neon-cyan font-bold">
                                {listing.askPrice}%
                              </span>
                            </div>
                            <div className="text-muted-foreground">
                              Yield:{" "}
                              <span className="text-neon-purple font-semibold">
                                {listing.yield}
                              </span>
                            </div>
                            <div className="text-muted-foreground">
                              Rating:{" "}
                              <span className="text-white font-semibold">
                                {listing.rating}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-6">
                          <div className="hidden md:block w-32 h-12">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart data={listing.history}>
                                <Line
                                  type="monotone"
                                  dataKey="price"
                                  stroke="#00f3ff"
                                  strokeWidth={2}
                                  dot={false}
                                />
                                <YAxis domain={["auto", "auto"]} hide />
                                <XAxis dataKey="time" hide />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>

                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                (window.location.href = `/analytics?deal=${listing.id}`)
                              }
                            >
                              Snapshot
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handlePlaceBid(listing.borrower)}
                            >
                              Place Bid
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
