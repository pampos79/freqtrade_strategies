import { Plus, Filter } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { Button } from "@/components/ui/button";
import { StrategyCard, Strategy } from "@/components/strategies/strategy-card";

const strategies: Strategy[] = [
  {
    id: 1,
    name: "BB RSI Strategy",
    description:
      "Combines Bollinger Bands with RSI for mean-reversion trades. Buys when price drops below lower band with oversold RSI.",
    status: "running",
    profit: 221.95,
    trades: 59751,
    winRate: 56.2,
    avgDuration: "11:39",
    pairs: ["BTC/USDT", "ETH/USDT", "BNB/USDT"],
    timeframe: "15m",
    indicators: ["Bollinger Bands", "RSI", "MFI"],
  },
  {
    id: 2,
    name: "MACD Recovery",
    description:
      "Identifies recovery patterns using MACD crossovers and trend confirmation. Ideal for trending markets.",
    status: "running",
    profit: 87.3,
    trades: 12450,
    winRate: 62.8,
    avgDuration: "8:45",
    pairs: ["SOL/USDT", "AVAX/USDT"],
    timeframe: "1h",
    indicators: ["MACD", "EMA", "Volume"],
  },
  {
    id: 3,
    name: "Bandtastic",
    description:
      "Multi-timeframe Bollinger Band strategy with volatility filters for reduced drawdowns.",
    status: "paused",
    profit: 45.2,
    trades: 8920,
    winRate: 58.1,
    avgDuration: "14:22",
    pairs: ["MATIC/USDT", "DOT/USDT", "ATOM/USDT"],
    timeframe: "4h",
    indicators: ["Bollinger Bands", "ATR", "ADX"],
  },
  {
    id: 4,
    name: "Trend Strength Directional",
    description:
      "Uses ADX and DI indicators to identify strong trending conditions and ride momentum.",
    status: "running",
    profit: 156.7,
    trades: 23890,
    winRate: 64.5,
    avgDuration: "6:30",
    pairs: ["ADA/USDT", "LINK/USDT"],
    timeframe: "30m",
    indicators: ["ADX", "+DI", "-DI", "RSI"],
  },
  {
    id: 5,
    name: "ADX Strategy",
    description:
      "Simple ADX-based trend following strategy with dynamic stop-loss management.",
    status: "stopped",
    profit: -12.4,
    trades: 3450,
    winRate: 42.3,
    avgDuration: "18:15",
    pairs: ["XRP/USDT"],
    timeframe: "1h",
    indicators: ["ADX", "SMA"],
  },
];

export default function StrategiesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader
          title="Strategies"
          subtitle="Manage and monitor your trading strategies"
        />
        <main className="flex-1 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <span className="text-sm text-muted-foreground">
                {strategies.length} strategies
              </span>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Strategy
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {strategies.map((strategy) => (
              <StrategyCard key={strategy.id} strategy={strategy} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
