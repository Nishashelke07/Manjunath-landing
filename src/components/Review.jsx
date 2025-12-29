import { Star } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const AnimatedNumber = ({ value, duration = 2 }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });

    return controls.stop; // cleanup
  }, [value, duration, count]);

  return <span>{display.toLocaleString()}+</span>;
};

const Review = () => {
  return (
    <div className="w-full flex justify-center bg-white py-5">
      <div className="flex items-center gap-2 px-3 py-2 rounded-full shadow-md">
        
        <div className="flex items-center gap-1 text-sm text-black">
          <Star
            className="text-yellow-400 fill-yellow-400"
            size={16}
            strokeWidth={2.2}
          />

          {/* Animated 10 */}
          <span className="font-medium">
            <AnimatedNumber value={10} /> + Years Experience
          </span>

          <span className="mx-1">•</span>

          {/* Animated 7000 */}
          <span>
            <AnimatedNumber value={2000} /> Transformations
          </span>
          <span>
            <span className="mx-1">•</span>100kg+ Fat-Loss Specialist
          </span>
        </div>
      </div>
    </div>
  );
};


export default Review;