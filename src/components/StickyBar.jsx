import React from "react";

const CALENDLY_URL =
  "https://calendly.com/healthynation1008/talk-with-expert";

const StickyBar = () => {
  const handleClick = (e) => {
    e.preventDefault();

    if (window.pagesense) {
      window.pagesense.push(["trackEvent", "cta_button_click"]);
    } else {
      console.error("Zoho PageSense not loaded. Unable to track custom event.");
    }

    // ✅ Open Calendly in new tab
    window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="
        fixed inset-x-0 bottom-0 w-full
        bg-white shadow-lg border-t border-gray-200
        z-[9999]
        [transform:translateZ(0)]
        [backface-visibility:hidden]
        [will-change:transform]
      "
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {/* Top section */}
      <div className="flex items-center justify-between px-4 py-3 lg:px-20">
        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-gray-400 line-through text-base sm:text-lg font-semibold">
            ₹49,999
          </span>
          <span className="text-orange-600 text-2xl sm:text-3xl font-extrabold">
            ₹9,999
          </span>
        </div>

        {/* Button */}
        <button
          onClick={handleClick}
          className="bg-orange-600 text-white font-semibold text-sm sm:text-base md:text-lg rounded-3xl shadow-lg transition px-4 sm:px-6 py-2 sm:py-3 text-center"
        >
          Talk With Expert
        </button>
      </div>

      {/* Thin line divider */}
      <div className="h-px w-full bg-gray-200" />

      {/* Bottom section */}
      <div className="px-4 py-2 lg:px-20">
        <p className="text-center text-xs sm:text-sm font-semibold text-gray-800">
          Limited Slots Only !{" "}
          <span className="text-orange-600">- 80% Exclusive Discount</span>
        </p>
      </div>
    </div>
  );
};

export default StickyBar;