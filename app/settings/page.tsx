"use client";

import { Save, Key, Bell, Shield, Globe, Zap } from "lucide-react";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col pl-64">
        <AppHeader title="Settings" subtitle="Configure your bot and exchange connections" />
        <main className="flex-1 p-6">
          <Tabs defaultValue="exchange" className="space-y-6">
            <TabsList className="bg-muted">
              <TabsTrigger value="exchange">Exchange</TabsTrigger>
              <TabsTrigger value="bot">Bot Settings</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
            </TabsList>

            <TabsContent value="exchange" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Key className="h-5 w-5 text-primary" />
                    Exchange API Configuration
                  </CardTitle>
                  <CardDescription>
                    Connect your exchange account to enable live trading
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="exchange" className="text-muted-foreground">
                      Exchange
                    </Label>
                    <Select defaultValue="binance">
                      <SelectTrigger id="exchange" className="bg-muted/50">
                        <SelectValue placeholder="Select exchange" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="binance">Binance</SelectItem>
                        <SelectItem value="kraken">Kraken</SelectItem>
                        <SelectItem value="coinbase">Coinbase Pro</SelectItem>
                        <SelectItem value="ftx">FTX</SelectItem>
                        <SelectItem value="kucoin">KuCoin</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-key" className="text-muted-foreground">
                      API Key
                    </Label>
                    <Input
                      id="api-key"
                      type="password"
                      placeholder="Enter your API key"
                      className="bg-muted/50 font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="api-secret" className="text-muted-foreground">
                      API Secret
                    </Label>
                    <Input
                      id="api-secret"
                      type="password"
                      placeholder="Enter your API secret"
                      className="bg-muted/50 font-mono"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">Dry Run Mode</p>
                      <p className="text-sm text-muted-foreground">
                        Simulate trades without using real funds
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Exchange Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="bot" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Zap className="h-5 w-5 text-primary" />
                    Trading Parameters
                  </CardTitle>
                  <CardDescription>
                    Configure default trading behavior
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="stake" className="text-muted-foreground">
                        Stake Amount (USDT)
                      </Label>
                      <Input
                        id="stake"
                        type="number"
                        defaultValue="1000"
                        className="bg-muted/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-trades" className="text-muted-foreground">
                        Max Open Trades
                      </Label>
                      <Input
                        id="max-trades"
                        type="number"
                        defaultValue="10"
                        className="bg-muted/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="timeframe" className="text-muted-foreground">
                        Default Timeframe
                      </Label>
                      <Select defaultValue="15m">
                        <SelectTrigger id="timeframe" className="bg-muted/50">
                          <SelectValue placeholder="Select timeframe" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1m">1 minute</SelectItem>
                          <SelectItem value="5m">5 minutes</SelectItem>
                          <SelectItem value="15m">15 minutes</SelectItem>
                          <SelectItem value="1h">1 hour</SelectItem>
                          <SelectItem value="4h">4 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency" className="text-muted-foreground">
                        Stake Currency
                      </Label>
                      <Select defaultValue="usdt">
                        <SelectTrigger id="currency" className="bg-muted/50">
                          <SelectValue placeholder="Select currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usdt">USDT</SelectItem>
                          <SelectItem value="usdc">USDC</SelectItem>
                          <SelectItem value="btc">BTC</SelectItem>
                          <SelectItem value="eth">ETH</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">Force Buy Enable</p>
                      <p className="text-sm text-muted-foreground">
                        Allow manual force buy commands
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">Cancel Orders on Exit</p>
                      <p className="text-sm text-muted-foreground">
                        Cancel all open orders when bot stops
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Bot Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Bell className="h-5 w-5 text-primary" />
                    Notification Settings
                  </CardTitle>
                  <CardDescription>
                    Configure how you receive trading alerts
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="telegram-token" className="text-muted-foreground">
                      Telegram Bot Token
                    </Label>
                    <Input
                      id="telegram-token"
                      type="password"
                      placeholder="Enter your Telegram bot token"
                      className="bg-muted/50 font-mono"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="chat-id" className="text-muted-foreground">
                      Telegram Chat ID
                    </Label>
                    <Input
                      id="chat-id"
                      placeholder="Enter your chat ID"
                      className="bg-muted/50 font-mono"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-muted-foreground">Notification Events</Label>
                    {[
                      { label: "Trade Opened", description: "Notify when a new trade is opened" },
                      { label: "Trade Closed", description: "Notify when a trade is closed" },
                      { label: "Stop Loss Hit", description: "Notify when stop loss is triggered" },
                      { label: "Daily Summary", description: "Send daily trading summary" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4"
                      >
                        <div className="space-y-0.5">
                          <p className="text-sm font-medium text-foreground">{item.label}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    ))}
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Notification Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-6">
              <Card className="bg-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Shield className="h-5 w-5 text-primary" />
                    Security Settings
                  </CardTitle>
                  <CardDescription>
                    Manage API server and access control
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">Enable API Server</p>
                      <p className="text-sm text-muted-foreground">
                        Allow external API access to the bot
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="api-host" className="text-muted-foreground">
                        API Host
                      </Label>
                      <Input
                        id="api-host"
                        defaultValue="127.0.0.1"
                        className="bg-muted/50 font-mono"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="api-port" className="text-muted-foreground">
                        API Port
                      </Label>
                      <Input
                        id="api-port"
                        type="number"
                        defaultValue="8080"
                        className="bg-muted/50 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-muted-foreground">
                      API Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="freqtrader"
                      className="bg-muted/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-muted-foreground">
                      API Password
                    </Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter a secure password"
                      className="bg-muted/50"
                    />
                  </div>

                  <div className="flex items-center justify-between rounded-lg border border-border bg-muted/30 p-4">
                    <div className="space-y-0.5">
                      <p className="text-sm font-medium text-foreground">Enable OpenAPI Docs</p>
                      <p className="text-sm text-muted-foreground">
                        Enable Swagger/OpenAPI documentation
                      </p>
                    </div>
                    <Switch />
                  </div>

                  <Button className="w-full">
                    <Save className="mr-2 h-4 w-4" />
                    Save Security Settings
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
