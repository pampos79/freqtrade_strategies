"use client";

import { TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface PortfolioBalanceProps {
  totalBalance: number;
  availableBalance: number;
  inTrades: number;
  todayChange: number;
  todayChangePercent: number;
}

export function PortfolioBalance({
  totalBalance,
  availableBalance,
  inTrades,
  todayChange,
  todayChangePercent,
}: PortfolioBalanceProps) {
  const isPositive = todayChange >= 0;

  return (
    <Card className="bg-card">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm font-medium text-muted-foreground">
              Total Balance
            </p>
            <p className="text-3xl font-bold text-foreground">
              ${totalBalance.toLocaleString()}
            </p>
            <div className="flex items-center gap-2">
              {isPositive ? (
                <TrendingUp className="h-4 w-4 text-chart-1" />
              ) : (
                <TrendingDown className="h-4 w-4 text-chart-5" />
              )}
              <span
                className={cn(
                  "text-sm font-medium",
                  isPositive ? "text-chart-1" : "text-chart-5"
                )}
              >
                {isPositive ? "+" : ""}${todayChange.toLocaleString()} (
                {isPositive ? "+" : ""}
                {todayChangePercent.toFixed(2)}%) today
              </span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20">
            <Wallet className="h-6 w-6 text-primary" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-4">
          <div>
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-lg font-semibold text-foreground">
              ${availableBalance.toLocaleString()}
            </p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">In Trades</p>
            <p className="text-lg font-semibold text-foreground">
              ${inTrades.toLocaleString()}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
