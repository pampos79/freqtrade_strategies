"use client";

import {
  TrendingUp,
  TrendingDown,
  Target,
  Clock,
  BarChart3,
  DollarSign,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface BacktestResultsProps {
  results: {
    totalProfit: number;
    totalProfitPercent: number;
    totalTrades: number;
    wins: number;
    draws: number;
    losses: number;
    avgDuration: string;
    maxDrawdown: number;
    sharpeRatio: number;
    sortinoRatio: number;
    profitFactor: number;
  } | null;
}

export function BacktestResults({ results }: BacktestResultsProps) {
  if (!results) {
    return (
      <Card className="bg-card">
        <CardContent className="flex min-h-[400px] items-center justify-center">
          <div className="text-center">
            <BarChart3 className="mx-auto h-12 w-12 text-muted-foreground/50" />
            <p className="mt-4 text-muted-foreground">
              Configure and run a backtest to see results
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const winRate = (results.wins / results.totalTrades) * 100;

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">
          Backtest Results
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <DollarSign className="h-4 w-4" />
              Total Profit
            </div>
            <p
              className={cn(
                "mt-1 text-2xl font-bold",
                results.totalProfit >= 0 ? "text-chart-1" : "text-chart-5"
              )}
            >
              ${results.totalProfit.toLocaleString()}
            </p>
            <p
              className={cn(
                "text-sm",
                results.totalProfitPercent >= 0 ? "text-chart-1" : "text-chart-5"
              )}
            >
              {results.totalProfitPercent >= 0 ? "+" : ""}
              {results.totalProfitPercent.toFixed(2)}%
            </p>
          </div>

          <div className="rounded-lg bg-muted/50 p-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Target className="h-4 w-4" />
              Win Rate
            </div>
            <p className="mt-1 text-2xl font-bold text-foreground">
              {winRate.toFixed(1)}%
            </p>
            <Progress value={winRate} className="mt-2 h-2" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-chart-1">{results.wins.toLocaleString()}</p>
            <p className="text-sm text-muted-foreground">Wins</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-muted-foreground">
              {results.draws.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Draws</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-chart-5">
              {results.losses.toLocaleString()}
            </p>
            <p className="text-sm text-muted-foreground">Losses</p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Total Trades</span>
            <span className="font-medium text-foreground">
              {results.totalTrades.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              Avg Duration
            </span>
            <span className="font-medium text-foreground">
              {results.avgDuration}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingDown className="h-4 w-4" />
              Max Drawdown
            </span>
            <span className="font-medium text-chart-5">
              -{results.maxDrawdown}%
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Sharpe Ratio</span>
            <span className="font-medium text-foreground">
              {results.sharpeRatio.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Sortino Ratio</span>
            <span className="font-medium text-foreground">
              {results.sortinoRatio.toFixed(2)}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Profit Factor</span>
            <span
              className={cn(
                "font-medium",
                results.profitFactor >= 1 ? "text-chart-1" : "text-chart-5"
              )}
            >
              {results.profitFactor.toFixed(2)}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
