"use client";

import {
  Play,
  Pause,
  Settings,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  Clock,
  BarChart2,
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export interface Strategy {
  id: number;
  name: string;
  description: string;
  status: "running" | "paused" | "stopped";
  profit: number;
  trades: number;
  winRate: number;
  avgDuration: string;
  pairs: string[];
  timeframe: string;
  indicators: string[];
}

interface StrategyCardProps {
  strategy: Strategy;
}

export function StrategyCard({ strategy }: StrategyCardProps) {
  return (
    <Card className="bg-card transition-colors hover:bg-card/80">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-foreground">{strategy.name}</h3>
              <Badge
                variant="outline"
                className={cn(
                  "text-xs",
                  strategy.status === "running" &&
                    "border-chart-1 bg-chart-1/10 text-chart-1",
                  strategy.status === "paused" &&
                    "border-primary bg-primary/10 text-primary",
                  strategy.status === "stopped" &&
                    "border-muted-foreground bg-muted text-muted-foreground"
                )}
              >
                {strategy.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{strategy.description}</p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreVertical className="h-4 w-4 text-muted-foreground" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                Configure
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BarChart2 className="mr-2 h-4 w-4" />
                Backtest
              </DropdownMenuItem>
              <DropdownMenuItem className="text-chart-5">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-1.5">
          {strategy.pairs.map((pair) => (
            <span
              key={pair}
              className="rounded bg-muted px-2 py-1 text-xs font-medium text-foreground"
            >
              {pair}
            </span>
          ))}
          <span className="rounded bg-primary/20 px-2 py-1 text-xs font-medium text-primary">
            {strategy.timeframe}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              {strategy.profit >= 0 ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              Profit
            </div>
            <p
              className={cn(
                "text-lg font-semibold",
                strategy.profit >= 0 ? "text-chart-1" : "text-chart-5"
              )}
            >
              {strategy.profit >= 0 ? "+" : ""}
              {strategy.profit}%
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Trades</p>
            <p className="text-lg font-semibold text-foreground">
              {strategy.trades.toLocaleString()}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">Win Rate</p>
            <p className="text-lg font-semibold text-foreground">
              {strategy.winRate}%
            </p>
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              Avg Duration
            </div>
            <p className="text-lg font-semibold text-foreground">
              {strategy.avgDuration}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {strategy.indicators.map((indicator) => (
            <span
              key={indicator}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground"
            >
              {indicator}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <Button
            variant={strategy.status === "running" ? "outline" : "default"}
            size="sm"
            className="flex-1"
          >
            {strategy.status === "running" ? (
              <>
                <Pause className="mr-2 h-4 w-4" />
                Pause
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Start
              </>
            )}
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <Settings className="mr-2 h-4 w-4" />
            Configure
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
