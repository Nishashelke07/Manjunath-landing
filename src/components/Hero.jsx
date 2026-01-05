export default function Hero() {
  return (
    <div className="relative bg-white min-h-[25vh] flex items-center justify-center">
      {/* 📱 Push down on mobile */}
      <div className="relative px-2 sm:px-4 text-center max-w-5xl mt-1 md:mt-0">
        {/* Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug tracking-tight mx-auto">

          {/* Mobile (exactly 4 lines, no "..." ) */}
          <span className="block sm:hidden text-black">
            India’s Leading Coach for{" "}
            <span className="text-orange-600">100kg+</span> Men Reveals
            <br />
            The System That Helps
            <br />
            Men Over{" "}
            <span className="text-orange-600">30 Lose 12–25+ Kgs </span> Safely
            <br />
          </span>

          {/* Desktop (unchanged) */}
          <span className="hidden sm:block">
            <span className="block text-black">
              India’s Leading Coach for
              <span className="text-orange-600"> 100kg+ </span> Men Reveals
            </span>
            <span className="block text-black">
              The System That Helps Men Over{" "}
              <span className="text-orange-600"> 30 Lose 12–25+ Kgs</span> Safely
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <h2 className="text-m sm:text-base md:text-lg   text-grey-600">
          Designed specifically for heavy bodies. No joint damage. No extreme
          diets. No gym dependency.
        </h2>
      </div>
    </div>
  );
}
