"use client";

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const performanceData = [
  { date: "Jan", profit: 2400, balance: 100000 },
  { date: "Feb", profit: 4200, balance: 104200 },
  { date: "Mar", profit: 3800, balance: 108000 },
  { date: "Apr", profit: 6100, balance: 114100 },
  { date: "May", profit: 4800, balance: 118900 },
  { date: "Jun", profit: 7200, balance: 126100 },
  { date: "Jul", profit: 5600, balance: 131700 },
  { date: "Aug", profit: 8400, balance: 140100 },
  { date: "Sep", profit: 6200, balance: 146300 },
  { date: "Oct", profit: 9100, balance: 155400 },
  { date: "Nov", profit: 7800, balance: 163200 },
  { date: "Dec", profit: 11200, balance: 174400 },
];

export function PerformanceChart() {
  return (
    <Card className="bg-card">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-semibold text-foreground">
          Portfolio Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={performanceData}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#27272a"
                vertical={false}
              />
              <XAxis
                dataKey="date"
                stroke="#a1a1aa"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#a1a1aa"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111113",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  color: "#f5f5f5",
                }}
                labelStyle={{ color: "#a1a1aa" }}
                formatter={(value: number) => [`$${value.toLocaleString()}`, "Balance"]}
              />
              <Area
                type="monotone"
                dataKey="balance"
                stroke="#22c55e"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorProfit)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
