export default function Hero() {
  return (
    <div className="relative bg-white min-h-0 md:min-h-[80vh] flex items-start justify-center overflow-hidden">
      {/* 📱 Push down on mobile */}
      <div className="relative px-2 sm:px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight mx-auto">
          {/* Mobile (exactly 4 lines, no "..." ) */}
          <span className="block sm:hidden text-black">
            India’s Leading <span className="text-orange-400">Fat Loss</span> Coach
            <br />
            Reveals the Science-Backed System
            <br />
            That Helped <span className="text-orange-400">7000+ People</span> Lose
            <br />
            <span className="text-orange-400">12–15+ Kgs</span> — Permanently.
          </span>

          {/* Desktop (unchanged) */}
          <span className="hidden sm:block">
            <span className="block text-black">
              India’s Leading <span className="text-orange-400">Fat Loss</span> Coach Reveals the
            </span>
            <span className="block text-black">
              Science-Backed System That Helped{" "}
              <span className="text-orange-400">7000+ People</span> Lose{" "}
              <span className="text-orange-400">12–15+ Kgs</span> — Permanently.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="my-4 text-[15px] sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 leading-snug mx-auto px-2 sm:px-6">
          Transform your body and lifestyle without extreme diets, long workouts, or
          sacrificing your routine — even after 30.
        </h2>
      </div>
    </div>
  );
}
