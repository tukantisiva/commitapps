import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Dashboard | Commitapps",
  description: "Analyze your stock portfolio with daily AI suggestions.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        <header className="mb-8 border-b border-zinc-800 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">Portfolio Intelligence</h1>
          <p className="text-zinc-400 text-lg">AI-powered analytics and investment suggestions based on your holdings.</p>
        </header>
        <main>
          {children}
        </main>
      </div>
    </div>
  );
}
