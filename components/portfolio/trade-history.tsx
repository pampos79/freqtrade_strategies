"use client";

import { ArrowUpRight, ArrowDownRight, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Trade {
  id: string;
  pair: string;
  type: "buy" | "sell";
  amount: number;
  price: number;
  total: number;
  fee: number;
  profit?: number;
  profitPercent?: number;
  date: string;
  strategy: string;
}

interface TradeHistoryProps {
  trades: Trade[];
}

export function TradeHistory({ trades }: TradeHistoryProps) {
  return (
    <Card className="bg-card">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-semibold text-foreground">
            Trade History
          </CardTitle>
          <Button variant="outline" size="sm">
            Export
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Date</TableHead>
              <TableHead className="text-muted-foreground">Pair</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-right text-muted-foreground">
                Amount
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Price
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Total
              </TableHead>
              <TableHead className="text-right text-muted-foreground">
                Profit
              </TableHead>
              <TableHead className="text-muted-foreground">Strategy</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade) => (
              <TableRow key={trade.id} className="border-border">
                <TableCell className="text-muted-foreground">
                  {trade.date}
                </TableCell>
                <TableCell className="font-medium text-foreground">
                  {trade.pair}
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    {trade.type === "buy" ? (
                      <ArrowUpRight className="h-4 w-4 text-chart-1" />
                    ) : (
                      <ArrowDownRight className="h-4 w-4 text-chart-5" />
                    )}
                    <span
                      className={cn(
                        "text-sm font-medium capitalize",
                        trade.type === "buy" ? "text-chart-1" : "text-chart-5"
                      )}
                    >
                      {trade.type}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-right font-mono text-foreground">
                  {trade.amount}
                </TableCell>
                <TableCell className="text-right text-foreground">
                  ${trade.price.toLocaleString()}
                </TableCell>
                <TableCell className="text-right font-medium text-foreground">
                  ${trade.total.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  {trade.profit !== undefined ? (
                    <span
                      className={cn(
                        "font-medium",
                        trade.profit >= 0 ? "text-chart-1" : "text-chart-5"
                      )}
                    >
                      {trade.profit >= 0 ? "+" : ""}$
                      {trade.profit.toLocaleString()}
                    </span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-xs">
                    {trade.strategy}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
