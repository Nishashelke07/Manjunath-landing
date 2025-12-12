import { motion } from "framer-motion";

export default function CallToActionButton() {
  const handleClick = (e) => {
    e.preventDefault();

    if (window.pagesense) {
      window.pagesense.push(["trackEvent", "cta_button_click"]);
    } else {
      console.error("Zoho PageSense not loaded. Unable to track custom event.");
    }

    window.location.href = "/";
  };

  return (
    <motion.div
      className="py-4 px-4 sm:px-0 flex justify-center"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.a
        onClick={handleClick}
        className="
          relative inline-flex w-full sm:max-w-md
          items-center justify-center text-center
          rounded-full bg-orange-600 text-white font-semibold
          shadow-md hover:shadow-lg
          px-6 sm:px-12 py-4 sm:py-5
          text-sm sm:text-base md:text-lg
          whitespace-nowrap
          transition duration-300 ease-out
          max-[380px]:text-[13px] max-[380px]:px-5
        "
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
      >
        Book Your 1:1 Fitness Transformation Call
        <span className="animate-cross-line"></span>
      </motion.a>
    </motion.div>
  );
}
