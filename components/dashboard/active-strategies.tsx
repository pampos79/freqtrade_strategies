"use client";

import { Play, Pause, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const strategies = [
  {
    id: 1,
    name: "BB RSI Strategy",
    status: "running",
    profit: 12.4,
    trades: 156,
    winRate: 68,
    pairs: ["BTC/USDT", "ETH/USDT"],
  },
  {
    id: 2,
    name: "MACD Recovery",
    status: "running",
    profit: 8.2,
    trades: 89,
    winRate: 62,
    pairs: ["SOL/USDT", "BNB/USDT"],
  },
  {
    id: 3,
    name: "Bandtastic",
    status: "paused",
    profit: -2.1,
    trades: 34,
    winRate: 45,
    pairs: ["MATIC/USDT"],
  },
  {
    id: 4,
    name: "Trend Strength",
    status: "running",
    profit: 15.7,
    trades: 203,
    winRate: 71,
    pairs: ["ADA/USDT", "DOT/USDT"],
  },
];

export function ActiveStrategies() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-foreground">
            Active Strategies
          </CardTitle>
          <Button variant="outline" size="sm" className="text-sm">
            View All
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {strategies.map((strategy) => (
          <div
            key={strategy.id}
            className="rounded-lg border border-border bg-muted/30 p-4"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-foreground">{strategy.name}</h4>
                  <span
                    className={cn(
                      "flex h-2 w-2 rounded-full",
                      strategy.status === "running"
                        ? "animate-pulse bg-chart-1"
                        : "bg-muted-foreground"
                    )}
                  />
                </div>
                <div className="flex flex-wrap gap-1">
                  {strategy.pairs.map((pair) => (
                    <span
                      key={pair}
                      className="rounded bg-muted px-1.5 py-0.5 text-xs text-muted-foreground"
                    >
                      {pair}
                    </span>
                  ))}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                {strategy.status === "running" ? (
                  <Pause className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Play className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-muted-foreground">Profit</p>
                <p
                  className={cn(
                    "text-sm font-semibold",
                    strategy.profit >= 0 ? "text-chart-1" : "text-chart-5"
                  )}
                >
                  {strategy.profit >= 0 ? "+" : ""}
                  {strategy.profit}%
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Trades</p>
                <p className="text-sm font-semibold text-foreground">
                  {strategy.trades}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Win Rate</p>
                <div className="flex items-center gap-2">
                  <Progress value={strategy.winRate} className="h-1.5 flex-1" />
                  <span className="text-sm font-semibold text-foreground">
                    {strategy.winRate}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
