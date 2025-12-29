import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HealthyNationStickyStack() {
  return (
    <section className="bg-white py-16 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">

        {/* SECTION 1 — PROBLEM */}
        <motion.div
  className="max-w-3xl mx-auto"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-orange-500">
            The real problem
          </p>

          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Why Diets & Workouts Stop Working After{" "}
            <span className="text-orange-400">100kg</span>
          </h2>

          <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-700">
            <p>
              When you’re over{" "}
              <span className="font-semibold text-gray-900">100kg</span>:
            </p>

            <motion.ul
              className="space-y-2 pl-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Metabolism is slower",
                "Joints are under constant stress",
                "Recovery is poor",
                "Fat sticks easily",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  transition={{ duration: 0.4 }}
                >
                  • {item}
                </motion.li>
              ))}
            </motion.ul>

            <p className="font-semibold text-gray-900">
              Same diet. Same workout. Same rules.
            </p>

            <p className="text-xl font-extrabold text-gray-900">
              Results don’t last.
            </p>

            <p>
              It’s not a discipline failure.
              <br />
              <span className="font-bold text-orange-400">
                It’s a system problem.
              </span>
            </p>
          </div>
        </motion.div>

        {/* SECTION 2 — SOLUTION */}
        <motion.div
          className="rounded-[36px] border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-orange-50 p-8 sm:p-12 shadow-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-orange-600">
            The solution
          </p>

          <h3 className="mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Built Specifically for{" "}
            <span className="text-orange-400">100kg+</span> Bodies
          </h3>

          <motion.div
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "Personalized metabolic fat-loss plan",
              "Joint-safe 20-minute workouts",
              "Indian food-based nutrition",
              "1-on-1 coaching",
              "Daily accountability",
              "Sleep & stress correction",
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm"
              >
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-orange-400 shrink-0" />
                <p className="font-semibold text-gray-900">{item}</p>
              </motion.div>
            ))}
          </motion.div>

          <p className="mt-6 font-bold text-gray-900">
            No gym dependency. No starvation.
          </p>
        </motion.div>

        {/* SECTION 3 — PROMISE */}
        <motion.div
  className="max-w-4xl mx-auto rounded-3xl border border-gray-200 bg-white p-8 sm:p-10 shadow-sm"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>

          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-orange-500">
            The promise
          </p>

          <p className="mt-4 text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
            Coaching continues until you hit your goal.
          </p>

          <p className="mt-2 text-lg font-semibold text-gray-700">
            No time limit. No extra charge.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
