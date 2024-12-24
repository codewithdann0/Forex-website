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
  title: "Forex Learning Platform",
  description: "A website to learn Forex trading with clear definitions and examples.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          {/* Left Sidebar Navigation */}
          <nav className="w-64 bg-gradient-to-b from-blue-800 to-black text-white overflow-y-auto">
            <h2 className="text-xl font-bold p-4 border-b border-blue-700">
              Forex Navigation
            </h2>
            <ul className="p-4 space-y-4">
              {/* Basics */}
              <li className="text-blue-400 font-semibold">Basics</li>
              <li>
                <a href="#introduction" className="hover:text-blue-300 cursor-pointer">
                  Introduction to Forex
                </a>
              </li>
              <li>
                <a href="#terminology" className="hover:text-blue-300 cursor-pointer">
                  Forex Terminology
                </a>
              </li>
              <li>
                <a href="#currency-pairs" className="hover:text-blue-300 cursor-pointer">
                  Currency Pairs
                </a>
              </li>
              <li>
                <a href="#trading-platforms" className="hover:text-blue-300 cursor-pointer">
                  Trading Platforms
                </a>
              </li>
              
              {/* Trading Psychology */}
              <li className="text-blue-400 font-semibold mt-6">Trading Psychology</li>
              <li>
                <a href="#emotions" className="hover:text-blue-300 cursor-pointer">
                  Managing Emotions
                </a>
              </li>
              <li>
                <a href="#discipline" className="hover:text-blue-300 cursor-pointer">
                  Discipline in Trading
                </a>
              </li>
              <li>
                <a href="#mindset" className="hover:text-blue-300 cursor-pointer">
                  Building a Winning Mindset
                </a>
              </li>

              {/* Risk Management */}
              <li className="text-blue-400 font-semibold mt-6">Risk Management</li>
              <li>
                <a href="#money-management" className="hover:text-blue-300 cursor-pointer">
                  Money Management
                </a>
              </li>
              <li>
                <a href="#position-sizing" className="hover:text-blue-300 cursor-pointer">
                  Position Sizing
                </a>
              </li>
              <li>
                <a href="#risk-reward" className="hover:text-blue-300 cursor-pointer">
                  Risk/Reward Ratios
                </a>
              </li>

              {/* Strategies */}
              <li className="text-blue-400 font-semibold mt-6">Strategies</li>
              <li>
                <a href="#day-trading" className="hover:text-blue-300 cursor-pointer">
                  Day Trading
                </a>
              </li>
              <li>
                <a href="#swing-trading" className="hover:text-blue-300 cursor-pointer">
                  Swing Trading
                </a>
              </li>
              <li>
                <a href="#scalping" className="hover:text-blue-300 cursor-pointer">
                  Scalping
                </a>
              </li>
              <li>
                <a href="#trend-following" className="hover:text-blue-300 cursor-pointer">
                  Trend Following
                </a>
              </li>

              {/* Tools */}
              <li className="text-blue-400 font-semibold mt-6">Tools</li>
              <li>
                <a href="#economic-calendar" className="hover:text-blue-300 cursor-pointer">
                  Economic Calendar
                </a>
              </li>
              <li>
                <a href="#indicators" className="hover:text-blue-300 cursor-pointer">
                  Trading Indicators
                </a>
              </li>
              <li>
                <a href="#charting-software" className="hover:text-blue-300 cursor-pointer">
                  Charting Software
                </a>
              </li>
              <li>
                <a href="#news-sources" className="hover:text-blue-300 cursor-pointer">
                  News Sources
                </a>
              </li>

              {/* Resources */}
              <li className="text-blue-400 font-semibold mt-6">Resources</li>
              <li>
                <a href="#glossary" className="hover:text-blue-300 cursor-pointer">
                  Forex Glossary
                </a>
              </li>
              <li>
                <a href="#books" className="hover:text-blue-300 cursor-pointer">
                  Recommended Books
                </a>
              </li>
              <li>
                <a href="#courses" className="hover:text-blue-300 cursor-pointer">
                  Free Courses
                </a>
              </li>
            </ul>
          </nav>

          {/* Main Content Area */}
          <main className="flex-1 bg-gradient-to-b from-gray-900 to-black text-white p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
