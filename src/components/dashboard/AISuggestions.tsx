import { AISuggestion } from "@/lib/zerodha";
import { Sparkles, ArrowRight, TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function AISuggestions({ suggestions }: { suggestions: AISuggestion[] }) {
  
  const getActionColor = (action: string) => {
    switch(action) {
      case 'BUY': return 'text-emerald-500 bg-emerald-500/10 border-emerald-500/20';
      case 'SELL': return 'text-red-500 bg-red-500/10 border-red-500/20';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/20';
    }
  };

  const getActionIcon = (action: string) => {
    switch(action) {
      case 'BUY': return <TrendingUp className="w-4 h-4 mr-1" />;
      case 'SELL': return <TrendingDown className="w-4 h-4 mr-1" />;
      default: return <Minus className="w-4 h-4 mr-1" />;
    }
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-zinc-100">AI Daily Insights</h3>
      </div>

      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} className="p-4 rounded-xl border border-zinc-800/50 bg-zinc-950/50 hover:border-zinc-700 transition-colors">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <span className="text-xl font-bold text-zinc-100">{suggestion.ticker}</span>
                <span className={`px-2.5 py-1 text-xs font-bold rounded-full border flex items-center ${getActionColor(suggestion.action)}`}>
                  {getActionIcon(suggestion.action)}
                  {suggestion.action}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-zinc-400">Current: ₹{suggestion.currentPrice}</div>
                {suggestion.targetPrice && (
                  <div className="text-sm font-medium text-zinc-300">Target: ₹{suggestion.targetPrice}</div>
                )}
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-3">
              {suggestion.rationale}
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Confidence:</span>
              <div className="flex gap-1">
                {[1, 2, 3].map((level) => (
                  <div 
                    key={level} 
                    className={`h-1.5 w-6 rounded-full ${
                      (suggestion.confidence === 'High') || 
                      (suggestion.confidence === 'Medium' && level <= 2) || 
                      (suggestion.confidence === 'Low' && level === 1) 
                        ? 'bg-blue-500' 
                        : 'bg-zinc-800'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="cursor-pointer w-full mt-6 py-3 rounded-xl border border-zinc-800 text-sm font-medium text-zinc-300 hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
        View Full Analysis
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
