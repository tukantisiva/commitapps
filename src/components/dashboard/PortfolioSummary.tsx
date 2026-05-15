import { PortfolioSummary as PSummary } from "@/lib/zerodha";
import { TrendingUp, Wallet, TrendingDown, IndianRupee } from "lucide-react";

export default function PortfolioSummary({ data }: { data: PSummary }) {
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><Wallet className="w-16 h-16" /></div>
        <span className="text-zinc-400 text-sm font-medium mb-1">Total Investment</span>
        <span className="text-3xl font-semibold text-zinc-100">{formatCurrency(data.totalInvestment)}</span>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10"><IndianRupee className="w-16 h-16" /></div>
        <span className="text-zinc-400 text-sm font-medium mb-1">Current Value</span>
        <span className="text-3xl font-semibold text-zinc-100">{formatCurrency(data.currentValue)}</span>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <span className="text-zinc-400 text-sm font-medium">Day's P&L</span>
          {data.dayPnl >= 0 ? <TrendingUp className="w-5 h-5 text-emerald-500" /> : <TrendingDown className="w-5 h-5 text-red-500" />}
        </div>
        <span className={`text-3xl font-semibold ${data.dayPnl >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
          {data.dayPnl > 0 ? '+' : ''}{formatCurrency(data.dayPnl)}
        </span>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex flex-col">
        <div className="flex justify-between items-start mb-1">
          <span className="text-zinc-400 text-sm font-medium">Total P&L</span>
          <div className={`px-2 py-0.5 rounded text-xs font-semibold ${data.totalPnl >= 0 ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
            {data.pnlPercentage > 0 ? '+' : ''}{data.pnlPercentage}%
          </div>
        </div>
        <span className={`text-3xl font-semibold ${data.totalPnl >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
           {data.totalPnl > 0 ? '+' : ''}{formatCurrency(data.totalPnl)}
        </span>
      </div>
    </div>
  );
}
