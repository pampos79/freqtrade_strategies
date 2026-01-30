"use client";

import {
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface EquityChartProps {
  data: { date: string; equity: number; drawdown: number }[];
}

export function EquityChart({ data }: EquityChartProps) {
  if (data.length === 0) {
    return null;
  }

  const startingEquity = data[0]?.equity || 100000;

  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle className="text-base font-semibold text-foreground">
          Equity Curve
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorEquity" x1="0" y1="0" x2="0" y2="1">
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
                domain={["auto", "auto"]}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111113",
                  border: "1px solid #27272a",
                  borderRadius: "8px",
                  color: "#f5f5f5",
                }}
                labelStyle={{ color: "#a1a1aa" }}
                formatter={(value: number) => [
                  `$${value.toLocaleString()}`,
                  "Equity",
                ]}
              />
              <ReferenceLine
                y={startingEquity}
                stroke="#a1a1aa"
                strokeDasharray="3 3"
              />
              <Area
                type="monotone"
                dataKey="equity"
                stroke="#22c55e"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorEquity)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
