import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Commitapps | Fractional CTO & Enterprise Architecture Consulting",
  description: "Premium Fractional CTO and Enterprise Architecture consulting. We help startups design highly scalable architectures without the massive full-time executive salary.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-950 text-zinc-50 selection:bg-blue-500/30`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
