"use client";

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface Holding {
  symbol: string;
  name: string;
  amount: number;
  avgPrice: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPercent: number;
  allocation: number;
}

interface HoldingsTableProps {
  holdings: Holding[];
}

export function HoldingsTable({ holdings }: HoldingsTableProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">
          Holdings
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Asset</TableHead>
              <TableHead className="text-right text-muted-foreground">
                Amount
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Avg Price
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Current Price
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Value
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                PnL
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Allocation
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {holdings.map((holding) => (
              <TableRow key={holding.symbol} className="border-border">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground">
                      {holding.symbol.substring(0, 2)}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {holding.symbol}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {holding.name}
                      </p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono text-foreground">
                  {holding.amount.toLocaleString(undefined, {
                    maximumFractionDigits: 6,
                  })}
                </TableCell>
                <TableCell className="text-right text-foreground">
                  ${holding.avgPrice.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-foreground">
                  ${holding.currentPrice.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  ${holding.value.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    {holding.pnl >= 0 ? (
                      <TrendingUp className="h-4 w-4 text-chart-1" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-chart-5" />
                    )}
                    <span
                      className={cn(
                        "font-medium",
                        holding.pnl >= 0 ? "text-chart-1" : "text-chart-5"
                      )}
                    >
                      {holding.pnl >= 0 ? "+" : ""}
                      {holding.pnlPercent.toFixed(2)}%
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Progress
                      value={holding.allocation}
                      className="h-1.5 w-16"
                    />
                    <span className="w-10 text-sm text-muted-foreground">
                      {holding.allocation.toFixed(1)}%
                    </span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
