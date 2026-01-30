"use client";

import { Calendar, Play } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BacktestConfigProps {
  onRunBacktest: () => void;
  isRunning: boolean;
}

export function BacktestConfig({ onRunBacktest, isRunning }: BacktestConfigProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">
          Backtest Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="strategy" className="text-sm text-muted-foreground">
            Strategy
          </Label>
          <Select defaultValue="bbrsi">
            <SelectTrigger id="strategy" className="bg-muted/50">
              <SelectValue placeholder="Select strategy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bbrsi">BB RSI Strategy</SelectItem>
              <SelectItem value="macd">MACD Recovery</SelectItem>
              <SelectItem value="bandtastic">Bandtastic</SelectItem>
              <SelectItem value="trend">Trend Strength Directional</SelectItem>
              <SelectItem value="adx">ADX Strategy</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="start" className="text-sm text-muted-foreground">
              Start Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="start"
                type="date"
                defaultValue="2024-01-01"
                className="bg-muted/50 pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="end" className="text-sm text-muted-foreground">
              End Date
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="end"
                type="date"
                defaultValue="2024-12-31"
                className="bg-muted/50 pl-10"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pairs" className="text-sm text-muted-foreground">
            Trading Pairs
          </Label>
          <Select defaultValue="all">
            <SelectTrigger id="pairs" className="bg-muted/50">
              <SelectValue placeholder="Select pairs" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Pairs (72)</SelectItem>
              <SelectItem value="btc">BTC/USDT only</SelectItem>
              <SelectItem value="eth">ETH/USDT only</SelectItem>
              <SelectItem value="top10">Top 10 by volume</SelectItem>
              <SelectItem value="custom">Custom selection</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="stake" className="text-sm text-muted-foreground">
              Stake Amount (USDT)
            </Label>
            <Input
              id="stake"
              type="number"
              defaultValue="1000"
              className="bg-muted/50"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="timeframe" className="text-sm text-muted-foreground">
              Timeframe
            </Label>
            <Select defaultValue="15m">
              <SelectTrigger id="timeframe" className="bg-muted/50">
                <SelectValue placeholder="Select timeframe" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1m">1 minute</SelectItem>
                <SelectItem value="5m">5 minutes</SelectItem>
                <SelectItem value="15m">15 minutes</SelectItem>
                <SelectItem value="30m">30 minutes</SelectItem>
                <SelectItem value="1h">1 hour</SelectItem>
                <SelectItem value="4h">4 hours</SelectItem>
                <SelectItem value="1d">1 day</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Button
          onClick={onRunBacktest}
          disabled={isRunning}
          className="w-full"
        >
          <Play className="mr-2 h-4 w-4" />
          {isRunning ? "Running Backtest..." : "Run Backtest"}
        </Button>
      </CardContent>
    </Card>
  );
}
