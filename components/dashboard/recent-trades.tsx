"use client";

import { ArrowUpRight, ArrowDownRight } from "lucide-react";
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
import { cn } from "@/lib/utils";

const recentTrades = [
  {
    id: 1,
    pair: "BTC/USDT",
    type: "buy",
    amount: 0.05,
    price: 42350.0,
    profit: null,
    status: "open",
    time: "2 min ago",
  },
  {
    id: 2,
    pair: "ETH/USDT",
    type: "sell",
    amount: 1.2,
    price: 2280.5,
    profit: 3.2,
    status: "closed",
    time: "15 min ago",
  },
  {
    id: 3,
    pair: "BNB/USDT",
    type: "sell",
    amount: 5.0,
    price: 315.8,
    profit: -1.8,
    status: "closed",
    time: "32 min ago",
  },
  {
    id: 4,
    pair: "MATIC/USDT",
    type: "sell",
    amount: 500,
    price: 0.92,
    profit: 4.5,
    status: "closed",
    time: "1 hr ago",
  },
  {
    id: 5,
    pair: "SOL/USDT",
    type: "buy",
    amount: 2.5,
    price: 98.4,
    profit: null,
    status: "open",
    time: "1.5 hr ago",
  },
];

export function RecentTrades() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold text-foreground">
          Recent Trades
        </CardTitle>
      </CardHeader>
      <CardContent className="px-0">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-muted-foreground">Pair</TableHead>
              <TableHead className="text-muted-foreground">Type</TableHead>
              <TableHead className="text-muted-foreground">Amount</TableHead>
              <TableHead className="text-muted-foreground">Price</TableHead>
              <TableHead className="text-muted-foreground">Profit %</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">
                Time
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {recentTrades.map((trade) => (
              <TableRow key={trade.id} className="border-border">
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
                <TableCell className="text-foreground">{trade.amount}</TableCell>
                <TableCell className="text-foreground">
                  ${trade.price.toLocaleString()}
                </TableCell>
                <TableCell>
                  {trade.profit !== null ? (
                    <span
                      className={cn(
                        "font-medium",
                        trade.profit >= 0 ? "text-chart-1" : "text-chart-5"
                      )}
                    >
                      {trade.profit >= 0 ? "+" : ""}
                      {trade.profit}%
                    </span>
                  ) : (
                    <span className="text-muted-foreground">-</span>
                  )}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={trade.status === "open" ? "default" : "secondary"}
                    className={cn(
                      "font-medium",
                      trade.status === "open" &&
                        "bg-primary/20 text-primary hover:bg-primary/20"
                    )}
                  >
                    {trade.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right text-muted-foreground">
                  {trade.time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
