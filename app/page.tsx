import {
  TrendingUp,
  TrendingDown,
  Activity,
  DollarSign,
  BarChart3,
  Repeat,
} from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { StatCard } from "@/components/dashboard/stat-card";
import { PerformanceChart } from "@/components/dashboard/performance-chart";
import { RecentTrades } from "@/components/dashboard/recent-trades";
import { ActiveStrategies } from "@/components/dashboard/active-strategies";

// Dashboard Page
export default function DashboardPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader
          title="Dashboard"
          subtitle="Welcome back! Here's your trading overview."
        />
        <main className="flex-1 space-y-6 p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              title="Total Balance"
              value="$174,400"
              change="+74.4% from start"
              changeType="positive"
              icon={DollarSign}
            />
            <StatCard
              title="Today's Profit"
              value="$2,340"
              change="+5.2% today"
              changeType="positive"
              icon={TrendingUp}
            />
            <StatCard
              title="Active Trades"
              value="12"
              change="3 strategies running"
              changeType="neutral"
              icon={Activity}
            />
            <StatCard
              title="Win Rate"
              value="67.8%"
              change="+2.3% this week"
              changeType="positive"
              icon={BarChart3}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <PerformanceChart />
            </div>
            <div>
              <ActiveStrategies />
            </div>
          </div>

          <RecentTrades />
        </main>
      </div>
    </div>
  );
}
