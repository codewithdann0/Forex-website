"use client";

export default function IntroductionToForex() {
  return (
    <div className="flex flex-col p-6 bg-gradient-to-b from-blue-900 via-black to-black text-white">
      <h1 className="text-4xl font-bold text-center mb-6 glow-text" id="introduction">
        Introduction to Forex
      </h1>
      <p className="mb-4 text-lg">
        Forex, short for <strong>foreign exchange</strong>, refers to the global
        marketplace for trading national currencies against one another. It is
        the largest and most liquid market in the world, with trillions of
        dollars traded daily.
      </p>

      <h2 className="text-2xl font-semibold mb-3">What is Forex Trading?</h2>
      <p className="mb-4">
        Forex trading involves the exchange of one currency for another, aiming
        to profit from fluctuations in currency values. Traders speculate on
        currency pairs, such as <strong>EUR/USD</strong> (Euro/US Dollar), to
        make profits.
      </p>
      <p className="mb-4">
        <strong>Example:</strong> If you believe the Euro will strengthen
        against the US Dollar, you would buy EUR/USD. If the Euro appreciates,
        you can sell it for a profit.
      </p>

      <h2 className="text-2xl font-semibold mb-3">Key Features of Forex Trading</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>24/5 Market:</strong> Open 24 hours a day, 5 days a week,
          across major financial hubs like London, New York, Tokyo, and Sydney.
        </li>
        <li>
          <strong>High Liquidity:</strong> The market's size ensures that trades
          can be executed quickly and with minimal price changes.
        </li>
        <li>
          <strong>Leverage:</strong> Forex brokers often provide leverage,
          allowing traders to control larger positions with a smaller capital.
        </li>
        <li>
          <strong>Currency Pairs:</strong> Forex is traded in pairs:
          <ul className="ml-6 list-disc">
            <li>
              <strong>Major Pairs:</strong> USD/EUR, USD/JPY, etc.
            </li>
            <li>
              <strong>Minor Pairs:</strong> EUR/GBP, EUR/AUD, etc.
            </li>
            <li>
              <strong>Exotic Pairs:</strong> USD/SEK, EUR/TRY, etc.
            </li>
          </ul>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Basic Forex Terms</h2>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>
          <strong>Pip:</strong> The smallest price movement in a currency pair.
        </li>
        <li>
          <strong>Spread:</strong> The difference between the bid (buy) and ask
          (sell) prices.
        </li>
        <li>
          <strong>Leverage:</strong> Borrowing capital to increase the potential
          return on investment.
        </li>
        <li>
          <strong>Lot Size:</strong> Standard, Mini, and Micro lots for trading.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Why Trade Forex?</h2>
      <p className="mb-4">
        Forex offers accessibility, low initial investment, and constant
        opportunities due to market volatility. It plays a critical role in
        global trade and investment.
      </p>

      <div className="mt-6 flex justify-center">
        <img
          src="/images/forex-trading-graph.png"
          alt="Forex Trading Graph"
          className="w-3/4 h-auto rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}
