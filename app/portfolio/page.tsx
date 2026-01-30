import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { PortfolioBalance } from "@/components/portfolio/portfolio-balance";
import { HoldingsTable } from "@/components/portfolio/holdings-table";
import { AllocationChart } from "@/components/portfolio/allocation-chart";
import { TradeHistory } from "@/components/portfolio/trade-history";

const holdings = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    amount: 1.245,
    avgPrice: 38500,
    currentPrice: 43250,
    value: 53846,
    pnl: 5914,
    pnlPercent: 12.34,
    allocation: 30.9,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    amount: 15.82,
    avgPrice: 2150,
    currentPrice: 2340,
    value: 37019,
    pnl: 3006,
    pnlPercent: 8.84,
    allocation: 21.2,
  },
  {
    symbol: "SOL",
    name: "Solana",
    amount: 245.5,
    avgPrice: 85,
    currentPrice: 98,
    value: 24059,
    pnl: 3192,
    pnlPercent: 15.29,
    allocation: 13.8,
  },
  {
    symbol: "BNB",
    name: "BNB",
    amount: 52.3,
    avgPrice: 295,
    currentPrice: 315,
    value: 16475,
    pnl: 1046,
    pnlPercent: 6.78,
    allocation: 9.4,
  },
  {
    symbol: "USDT",
    name: "Tether",
    amount: 42847,
    avgPrice: 1,
    currentPrice: 1,
    value: 42847,
    pnl: 0,
    pnlPercent: 0,
    allocation: 24.6,
  },
];

const allocationData = [
  { name: "Bitcoin", value: 53846, color: "#f59e0b" },
  { name: "Ethereum", value: 37019, color: "#3b82f6" },
  { name: "Solana", value: 24059, color: "#8b5cf6" },
  { name: "BNB", value: 16475, color: "#fbbf24" },
  { name: "USDT", value: 42847, color: "#22c55e" },
];

const tradeHistory = [
  {
    id: "1",
    pair: "BTC/USDT",
    type: "sell" as const,
    amount: 0.05,
    price: 43250,
    total: 2162.5,
    fee: 2.16,
    profit: 187.5,
    profitPercent: 9.5,
    date: "Jan 29, 14:32",
    strategy: "BB RSI",
  },
  {
    id: "2",
    pair: "ETH/USDT",
    type: "buy" as const,
    amount: 2.5,
    price: 2340,
    total: 5850,
    fee: 5.85,
    date: "Jan 29, 12:15",
    strategy: "MACD Recovery",
  },
  {
    id: "3",
    pair: "SOL/USDT",
    type: "sell" as const,
    amount: 25,
    price: 98,
    total: 2450,
    fee: 2.45,
    profit: 325,
    profitPercent: 15.3,
    date: "Jan 29, 10:48",
    strategy: "Trend Strength",
  },
  {
    id: "4",
    pair: "BNB/USDT",
    type: "sell" as const,
    amount: 10,
    price: 315,
    total: 3150,
    fee: 3.15,
    profit: -45,
    profitPercent: -1.4,
    date: "Jan 28, 22:30",
    strategy: "BB RSI",
  },
  {
    id: "5",
    pair: "MATIC/USDT",
    type: "buy" as const,
    amount: 1500,
    price: 0.92,
    total: 1380,
    fee: 1.38,
    date: "Jan 28, 18:22",
    strategy: "Bandtastic",
  },
];

export default function PortfolioPage() {
  const totalBalance = holdings.reduce((sum, h) => sum + h.value, 0);
  const usdtBalance = holdings.find((h) => h.symbol === "USDT")?.value || 0;
  const inTrades = totalBalance - usdtBalance;

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader
          title="Portfolio"
          subtitle="Track your holdings and trading performance"
        />
        <main className="flex-1 space-y-6 p-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <PortfolioBalance
              totalBalance={totalBalance}
              availableBalance={usdtBalance}
              inTrades={inTrades}
              todayChange={2340}
              todayChangePercent={1.36}
            />
            <AllocationChart data={allocationData} />
          </div>

          <HoldingsTable holdings={holdings} />

          <TradeHistory trades={tradeHistory} />
        </main>
      </div>
    </div>
  );
}
