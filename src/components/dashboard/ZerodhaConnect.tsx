import { Link } from "lucide-react";

export default function ZerodhaConnect({ onConnect }: { onConnect: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="w-20 h-20 bg-orange-500/10 rounded-full flex items-center justify-center mb-6">
        <Link className="w-10 h-10 text-orange-500" />
      </div>
      <h2 className="text-3xl font-bold tracking-tight mb-4 text-zinc-100">Connect your Zerodha Account</h2>
      <p className="text-zinc-400 max-w-md mb-8 text-lg">
        Link your Kite by Zerodha profile to instantly view your portfolio analysis, asset allocation, and receive daily AI-driven investment suggestions.
      </p>
      <button 
        onClick={onConnect}
        className="px-8 py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-orange-500/20 flex items-center gap-2 cursor-pointer"
      >
        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"><path d="M11.96 0L24 6.94v10.12L11.96 24 0 17.06V6.94L11.96 0ZM11.96 2.31L1.99 8.09v7.83l9.97 5.76 9.97-5.76V8.09l-9.97-5.78Z" fill="currentColor"/><path d="M12.01 4.75l7.98 4.62v9.23l-7.98 4.62-7.98-4.62V9.37l7.98-4.62ZM12.01 6.84L5.86 10.4v7.12l6.15 3.56 6.15-3.56V10.4l-6.15-3.56Z" fill="currentColor"/><path d="M12.01 9.47l4.16 2.4v4.8l-4.16 2.4-4.16-2.4v-4.8l4.16-2.4ZM12.01 11.23l-2.31 1.34v2.68l2.31 1.34 2.31-1.34v-2.68l-2.31-1.34Z" fill="currentColor"/></svg>
        Login with Kite
      </button>
      <p className="text-xs text-zinc-500 mt-6">
        We use read-only access to analyze your holdings. Your data is never sold.
      </p>
    </div>
  );
}
