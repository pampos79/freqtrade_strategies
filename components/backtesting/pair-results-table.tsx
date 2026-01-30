"use client";

import { ArrowUpDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PairResult {
  pair: string;
  buys: number;
  avgProfit: number;
  cumProfit: number;
  totProfit: number;
  avgDuration: string;
  wins: number;
  draws: number;
  losses: number;
}

interface PairResultsTableProps {
  data: PairResult[];
}

export function PairResultsTable({ data }: PairResultsTableProps) {
  if (data.length === 0) {
    return null;
  }

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">
          Results by Pair
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <div className="max-h-[400px] overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-card">
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="text-muted-foreground">
                  <Button variant="ghost" size="sm" className="h-8 px-2">
                    Pair
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                  </Button>
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Trades
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Avg Profit %
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Cum Profit %
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Total Profit
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  Avg Duration
                </TableHead>
                <TableHead className="text-right text-muted-foreground">
                  W/D/L
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((pair) => (
                <TableRow key={pair.pair} className="border-border">
                  <TableCell className="font-medium text-foreground">
                    {pair.pair}
                  </TableCell>
                  <TableCell className="text-right text-foreground">
                    {pair.buys.toLocaleString()}
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-right font-medium",
                      pair.avgProfit >= 0 ? "text-chart-1" : "text-chart-5"
                    )}
                  >
                    {pair.avgProfit >= 0 ? "+" : ""}
                    {pair.avgProfit.toFixed(2)}%
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-right font-medium",
                      pair.cumProfit >= 0 ? "text-chart-1" : "text-chart-5"
                    )}
                  >
                    {pair.cumProfit >= 0 ? "+" : ""}
                    {pair.cumProfit.toFixed(2)}%
                  </TableCell>
                  <TableCell
                    className={cn(
                      "text-right font-medium",
                      pair.totProfit >= 0 ? "text-chart-1" : "text-chart-5"
                    )}
                  >
                    ${pair.totProfit.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">
                    {pair.avgDuration}
                  </TableCell>
                  <TableCell className="text-right">
                    <span className="text-chart-1">{pair.wins}</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-muted-foreground">{pair.draws}</span>
                    <span className="text-muted-foreground">/</span>
                    <span className="text-chart-5">{pair.losses}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
