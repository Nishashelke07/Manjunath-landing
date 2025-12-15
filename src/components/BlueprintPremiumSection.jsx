import React, { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const DATA = {
  headingTop: "Why HealthyNation Works",
  sub: "Not a simple “list plan”. This is a structured 12-week system with coaching, food strategy, and habits designed for real Indian routines.",
  headingInside: "Inside the Fat-to-Fit 12-Week Blueprint",
  items: [
    {
      no: "01",
      title: "Personalized Fat Loss System",
      body:
        "Your calories, food choices, workouts, and habits — designed specifically for your body, lifestyle, and health markers.",
    },
    {
      no: "02",
      title: "20-Minute Home Workouts",
      body:
        "No gym dependency.\nNo long sessions.\nShort, effective workouts you can actually stay consistent with.",
    },
    {
      no: "03",
      title: "Weekly 1:1 Coaching",
      body:
        "Every week, you work directly with me.\nWe:\nTrack progress\n\nFix plateaus\n\nAdjust plans for stress, travel, and real life",
    },
    {
      no: "04",
      title: "Daily Accountability & Support",
      body:
        "No guessing.\nNo confusion.\nNo quitting silently.\nYou’re supported every single day.",
    },
    {
      no: "05",
      title: "Personalized Indian Diet Strategy",
      body:
        "Dal, roti, rice, veg, non-veg — all included.\nNo extreme restrictions.\nNo boring repetition.\nJust smart eating that works long-term.",
    },
    {
      no: "06",
      title: "Sleep, Stress & Habit Optimization",
      body:
        "Because fat loss doesn’t happen only in the gym.\nYour routine is fixed — not just your diet.",
    },
    {
      no: "07",
      title: "Outside Eating Playbook (India Edition)",
      body:
        "Restaurants, weddings, office lunches, travel — handled without guilt or fat gain.",
    },
    {
      no: "08",
      title: "Special Guidance for BP & Diabetes",
      body: "Safe, sustainable fat loss with health as the priority.",
    },
    {
      no: "09",
      title: "Long-Term Health Roadmap",
      body: "So you don’t regain everything once the program ends.",
    },
  ],
};

function Lines({ text }) {
  const parts = (text || "").split("\n");
  return (
    <div className="space-y-1.5">
      {parts.map((line, i) =>
        line.trim().length === 0 ? (
          <div key={i} className="h-2" />
        ) : (
          <p key={i} className="text-sm leading-relaxed text-gray-700 sm:text-base">
            {line}
          </p>
        )
      )}
    </div>
  );
}

export default function HealthyNationStoryBlueprint() {
  const reduceMotion = useReducedMotion();
  const items = useMemo(() => DATA.items, []);
  const [idx, setIdx] = useState(0);

  // ✅ Autoplay is ON as a setting…
  const [autoplay, setAutoplay] = useState(true);

  // ✅ …but will only RUN when section is in view
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  const timerRef = useRef(null);
  const [dir, setDir] = useState(1);

  const go = (d) => {
    setDir(d);
    setIdx((v) => {
      const n = items.length;
      return (v + d + n) % n;
    });
  };

  // ✅ Detect when user is on this section
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.35 } // start when ~35% visible
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // ✅ Autoplay only runs when autoplay ON + section in view
  useEffect(() => {
    // always clear any existing timer
    if (timerRef.current) clearInterval(timerRef.current);

    if (!autoplay || !isInView) return;

    timerRef.current = setInterval(() => go(1), 3400);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, isInView]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const current = items[idx];

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes floaty { 0%{transform:translateY(0)} 50%{transform:translateY(14px)} 100%{transform:translateY(0)} }
        .hn-floaty{ animation: floaty 7s ease-in-out infinite; }
      `}</style>

      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 left-1/2 h-155 w-155 -translate-x-1/2 rounded-full bg-orange-200/55 blur-3xl hn-floaty" />
        <div className="absolute -bottom-44 right-40 h-140 w-140 rounded-full bg-amber-100/90 blur-3xl hn-floaty" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.08)_1px,transparent_1px)] bg-size-18px_18px opacity-20" />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        {/* header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-600" />
            {DATA.headingTop}
          </div>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
            {DATA.headingTop.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="bg-linear-to-r from-orange-600 via-orange-500 to-amber-500 bg-clip-text text-transparent">
              {DATA.headingTop.split(" ").slice(1).join(" ")}
            </span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
            {DATA.sub}
          </p>
        </div>

        {/* story frame */}
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-[34px] border border-gray-200 bg-white/85 p-4 shadow-[0_30px_100px_-70px_rgba(0,0,0,0.55)] backdrop-blur sm:p-5">
            {/* top row */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-xs font-semibold tracking-[0.22em] text-gray-500 uppercase">
                {DATA.headingInside}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setAutoplay((v) => !v)}
                  className={[
                    "rounded-full px-3 py-1.5 text-xs font-semibold ring-1 transition",
                    autoplay
                      ? "bg-gray-900 text-white ring-gray-900"
                      : "bg-white text-gray-700 ring-gray-200 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {autoplay ? "Autoplay: ON" : "Autoplay: OFF"}
                </button>

                <span className="text-xs font-semibold text-gray-600">
                  {idx + 1}/{items.length}
                </span>
              </div>
            </div>

            {/* progress segments */}
            <div className="mt-3 flex gap-1.5">
              {items.map((_, i) => {
                const activeSeg = i === idx;
                const done = i < idx;
                return (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={[
                      "h-2 flex-1 rounded-full transition",
                      activeSeg
                        ? "bg-orange-600"
                        : done
                        ? "bg-orange-300"
                        : "bg-gray-200 hover:bg-gray-300",
                    ].join(" ")}
                    aria-label={`Go to module ${i + 1}`}
                  />
                );
              })}
            </div>

            {/* main layout */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
              {/* left */}
              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(249,115,22,0.28),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.22),transparent_55%)]" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(17,24,39,0.16)_1px,transparent_1px)] bg-size-16px_16px" />

                <div className="relative p-5 sm:p-7">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-gray-800 ring-1 ring-gray-200 backdrop-blur">
                    Tap left/right to switch
                  </div>

                  <div className="mt-6">
                    <div className="text-[10px] font-semibold tracking-[0.26em] text-gray-500 uppercase">
                      Module
                    </div>
                    <div className="mt-2 flex items-end gap-3">
                      <div className="text-5xl font-extrabold tracking-tight text-gray-900">
                        {current.no}
                      </div>
                      <div className="pb-2 text-sm font-semibold text-orange-700">
                        {current.title}
                      </div>
                    </div>

                    <div className="mt-4 rounded-3xl bg-white/75 p-4 ring-1 ring-gray-200 backdrop-blur">
                      <Lines text={current.body} />
                    </div>
                  </div>
                </div>

                <button onClick={() => go(-1)} className="absolute inset-y-0 left-0 w-1/3" aria-label="Previous" />
                <button onClick={() => go(1)} className="absolute inset-y-0 right-0 w-1/3" aria-label="Next" />
              </div>

              {/* right */}
              <div className="relative overflow-hidden rounded-[28px] border border-gray-200 bg-white p-5 sm:p-7">
                <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-orange-200/60 blur-3xl" />

                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700 ring-1 ring-orange-200">
                    {current.no} — {current.title}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => go(-1)}
                      className="rounded-2xl bg-gray-50 px-3 py-2 text-xs font-semibold text-gray-700 ring-1 ring-gray-200 hover:bg-gray-100"
                    >
                      ←
                    </button>
                    <button
                      onClick={() => go(1)}
                      className="rounded-2xl bg-gray-900 px-3 py-2 text-xs font-semibold text-white hover:bg-gray-800"
                    >
                      →
                    </button>
                  </div>
                </div>

                <AnimatePresence mode="wait" custom={dir}>
                  <motion.div
                    key={current.no}
                    custom={dir}
                    variants={{
                      enter: (d) => (reduceMotion ? { opacity: 0 } : { opacity: 0, x: d > 0 ? 14 : -14 }),
                      center: { opacity: 1, x: 0 },
                      exit: (d) => (reduceMotion ? { opacity: 0 } : { opacity: 0, x: d > 0 ? -14 : 14 }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    className="mt-5"
                  >
                    <Lines text={current.body} />
                  </motion.div>
                </AnimatePresence>

              </div>
            </div>

            {/* chips */}
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((m, i) => (
                <button
                  key={m.no}
                  onClick={() => setIdx(i)}
                  className={[
                    "rounded-full border px-3 py-1.5 text-xs font-semibold transition",
                    i === idx
                      ? "border-orange-300 bg-orange-50 text-orange-700"
                      : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
                  ].join(" ")}
                >
                  {m.no}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
