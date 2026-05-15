"use client";

import { useState } from "react";
import ZerodhaConnect from "@/components/dashboard/ZerodhaConnect";
import PortfolioSummary from "@/components/dashboard/PortfolioSummary";
import AllocationChart from "@/components/dashboard/AllocationChart";
import AISuggestions from "@/components/dashboard/AISuggestions";
import { 
  getPortfolioSummary, 
  getAllocationData, 
  getAISuggestions,
  PortfolioSummary as PSummary,
  AssetAllocation,
  AISuggestion
} from "@/lib/zerodha";
import { Loader2 } from "lucide-react";

export default function DashboardPage() {
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [summaryData, setSummaryData] = useState<PSummary | null>(null);
  const [allocationData, setAllocationData] = useState<AssetAllocation[]>([]);
  const [suggestions, setSuggestions] = useState<AISuggestion[]>([]);

  const handleConnect = async () => {
    setIsLoading(true);
    // Simulate OAuth / API connection delay
    setTimeout(() => {
      setIsConnected(true);
      fetchData();
    }, 1500);
  };

  const fetchData = async () => {
    try {
      const [summary, allocation, aiSuggests] = await Promise.all([
        getPortfolioSummary(),
        getAllocationData(),
        getAISuggestions()
      ]);
      
      setSummaryData(summary);
      setAllocationData(allocation);
      setSuggestions(aiSuggests);
    } catch (error) {
      console.error("Failed to fetch dashboard data", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isConnected && !isLoading) {
    return <ZerodhaConnect onConnect={handleConnect} />;
  }

  if (isLoading || !summaryData) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="w-12 h-12 animate-spin text-orange-500 mb-4" />
        <p className="text-zinc-400">Syncing portfolio data with Kite...</p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <PortfolioSummary data={summaryData} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AllocationChart data={allocationData} />
        </div>
        <div className="lg:col-span-2">
          <AISuggestions suggestions={suggestions} />
        </div>
      </div>
    </div>
  );
}
