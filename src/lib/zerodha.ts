export interface PortfolioSummary {
  totalInvestment: number;
  currentValue: number;
  dayPnl: number;
  totalPnl: number;
  pnlPercentage: number;
}

export interface AssetAllocation {
  name: string;
  value: number;
  color: string;
}

export interface AISuggestion {
  id: string;
  ticker: string;
  action: "BUY" | "SELL" | "HOLD";
  targetPrice?: number;
  currentPrice: number;
  rationale: string;
  confidence: "High" | "Medium" | "Low";
}

// Mock Data Generators

export async function getPortfolioSummary(): Promise<PortfolioSummary> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800));
  
  return {
    totalInvestment: 1250000, // 12.5L
    currentValue: 1425000, // 14.25L
    dayPnl: 12500,
    totalPnl: 175000,
    pnlPercentage: 14.0,
  };
}

export async function getAllocationData(): Promise<AssetAllocation[]> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  
  return [
    { name: "IT", value: 35, color: "#3b82f6" }, // blue-500
    { name: "Financials", value: 25, color: "#8b5cf6" }, // violet-500
    { name: "Automobile", value: 15, color: "#10b981" }, // emerald-500
    { name: "FMCG", value: 15, color: "#f59e0b" }, // amber-500
    { name: "Others", value: 10, color: "#64748b" }, // slate-500
  ];
}

export async function getAISuggestions(): Promise<AISuggestion[]> {
  await new Promise((resolve) => setTimeout(resolve, 1200));

  return [
    {
      id: "1",
      ticker: "TCS",
      action: "BUY",
      targetPrice: 4200,
      currentPrice: 3850,
      rationale: "Strong Q3 earnings expected, order book remains robust with new European deals.",
      confidence: "High"
    },
    {
      id: "2",
      ticker: "HDFCBANK",
      action: "HOLD",
      currentPrice: 1650,
      rationale: "Merger synergies still playing out. NIM margins are stable but not expanding.",
      confidence: "Medium"
    },
    {
      id: "3",
      ticker: "WIPRO",
      action: "SELL",
      targetPrice: 450,
      currentPrice: 510,
      rationale: "Management transition risks and weaker guidance for the next two quarters.",
      confidence: "Medium"
    },
    {
      id: "4",
      ticker: "RELIANCE",
      action: "BUY",
      targetPrice: 3200,
      currentPrice: 2950,
      rationale: "Jio IPO announcements expected soon; retail margins improving.",
      confidence: "High"
    }
  ];
}
