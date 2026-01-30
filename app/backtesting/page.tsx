"use client";

import { useState } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { BacktestConfig } from "@/components/backtesting/backtest-config";
import { BacktestResults } from "@/components/backtesting/backtest-results";
import { EquityChart } from "@/components/backtesting/equity-chart";
import { PairResultsTable } from "@/components/backtesting/pair-results-table";

const mockEquityData = [
  { date: "Jan", equity: 100000, drawdown: 0 },
  { date: "Feb", equity: 112000, drawdown: -2.1 },
  { date: "Mar", equity: 108000, drawdown: -5.4 },
  { date: "Apr", equity: 125000, drawdown: -1.2 },
  { date: "May", equity: 142000, drawdown: -3.8 },
  { date: "Jun", equity: 138000, drawdown: -6.2 },
  { date: "Jul", equity: 165000, drawdown: -2.5 },
  { date: "Aug", equity: 178000, drawdown: -4.1 },
  { date: "Sep", equity: 192000, drawdown: -1.8 },
  { date: "Oct", equity: 215000, drawdown: -3.2 },
  { date: "Nov", equity: 238000, drawdown: -2.9 },
  { date: "Dec", equity: 321947, drawdown: -1.5 },
];

const mockPairResults = [
  { pair: "DENT/USDT", buys: 914, avgProfit: 0.78, cumProfit: 713.67, totProfit: 7143, avgDuration: "11:11", wins: 529, draws: 227, losses: 158 },
  { pair: "TFUEL/USDT", buys: 1065, avgProfit: 0.65, cumProfit: 688.12, totProfit: 6888, avgDuration: "10:58", wins: 622, draws: 244, losses: 199 },
  { pair: "NKN/USDT", buys: 859, avgProfit: 0.77, cumProfit: 657.44, totProfit: 6581, avgDuration: "10:33", wins: 505, draws: 205, losses: 149 },
  { pair: "DREP/USDT", buys: 739, avgProfit: 0.88, cumProfit: 648.08, totProfit: 6487, avgDuration: "9:57", wins: 451, draws: 151, losses: 137 },
  { pair: "COTI/USDT", buys: 726, avgProfit: 0.87, cumProfit: 630.86, totProfit: 6315, avgDuration: "8:55", wins: 434, draws: 160, losses: 132 },
  { pair: "OGN/USDT", buys: 803, avgProfit: 0.78, cumProfit: 629.94, totProfit: 6306, avgDuration: "9:12", wins: 471, draws: 173, losses: 159 },
  { pair: "TROY/USDT", buys: 801, avgProfit: 0.76, cumProfit: 612.16, totProfit: 6128, avgDuration: "10:19", wins: 475, draws: 168, losses: 158 },
  { pair: "HBAR/USDT", buys: 867, avgProfit: 0.64, cumProfit: 555.71, totProfit: 5563, avgDuration: "11:04", wins: 500, draws: 214, losses: 153 },
  { pair: "PERL/USDT", buys: 955, avgProfit: 0.56, cumProfit: 533.53, totProfit: 5341, avgDuration: "10:24", wins: 563, draws: 194, losses: 198 },
  { pair: "ENJ/USDT", buys: 1042, avgProfit: 0.51, cumProfit: 531.41, totProfit: 5319, avgDuration: "11:59", wins: 581, draws: 256, losses: 205 },
  { pair: "DASH/USDT", buys: 934, avgProfit: -0.04, cumProfit: -41.42, totProfit: -415, avgDuration: "13:52", wins: 500, draws: 235, losses: 199 },
];

const mockResults = {
  totalProfit: 221947,
  totalProfitPercent: 221.95,
  totalTrades: 59751,
  wins: 33597,
  draws: 14035,
  losses: 12119,
  avgDuration: "11:39",
  maxDrawdown: 13.16,
  sharpeRatio: 2.34,
  sortinoRatio: 3.12,
  profitFactor: 1.87,
};

export default function BacktestingPage() {
  const [results, setResults] = useState<typeof mockResults | null>(null);
  const [equityData, setEquityData] = useState<typeof mockEquityData>([]);
  const [pairResults, setPairResults] = useState<typeof mockPairResults>([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleRunBacktest = () => {
    setIsRunning(true);
    setResults(null);
    setEquityData([]);
    setPairResults([]);

    // Simulate backtest running
    setTimeout(() => {
      setResults(mockResults);
      setEquityData(mockEquityData);
      setPairResults(mockPairResults);
      setIsRunning(false);
    }, 2000);
  };

  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader
          title="Backtesting"
          subtitle="Test your strategies against historical data"
        />
        <main className="flex-1 space-y-6 p-6">
          <div className="grid gap-6 lg:grid-cols-3">
            <div>
              <BacktestConfig
                onRunBacktest={handleRunBacktest}
                isRunning={isRunning}
              />
            </div>
            <div className="lg:col-span-2">
              <BacktestResults results={results} />
            </div>
          </div>

          {equityData.length > 0 && (
            <>
              <EquityChart data={equityData} />
              <PairResultsTable data={pairResults} />
            </>
          )}
        </main>
      </div>
    </div>
  );
}
