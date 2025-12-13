export default function PromiseSection() {
  return (
    <section className="relative bg-white py-10 sm:py-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-24 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-linear-to-b from-orange-50 via-white to-white shadow-sm">
          {/* subtle pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(#111827_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative p-6 sm:p-10">
            {/* Top row */}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              {/* Left: label + headline */}
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-orange-700 shadow-sm">
                  OUR PROMISE
                  <span className="h-1 w-1 rounded-full bg-orange-500" />
                  GOAL-BASED COACHING
                </div>

                <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                  We coach you until you hit your goal —{" "}
                  <span className="text-orange-600">no extra charge</span>.
                  <br className="hidden sm:block" />
                  <span className="text-gray-700">No time limit.</span>
                </h2>

                <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                  You don’t “expire” after 12 weeks. If you follow the system,
                  we stay with you until you reach the outcome you came for.
                </p>
              </div>

              {/* Right: mini “guarantee card” */}
              <div className="w-full lg:w-[360px]">
                <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                  <p className="text-xs font-semibold tracking-[0.18em] text-gray-500">
                    INCLUDED
                  </p>

                  <div className="mt-3 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                    <p className="text-sm font-semibold text-gray-900">
                      Unlimited coaching support*
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      We continue until your goal is achieved.
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {["No extra fees", "No deadline", "Goal-first"].map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-[12px] text-gray-500 leading-relaxed">
                    *As long as you stay consistent with check-ins and follow
                    the plan.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="mt-8 rounded-3xl border border-gray-100 bg-white/80 p-5 sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-600/10 border border-orange-200">
                    <span className="h-2.5 w-2.5 rounded-full bg-orange-600" />
                  </span>

                  <div>
                    <p className="text-sm font-extrabold text-gray-900">
                      100% goal-focused coaching
                    </p>
                    <p className="text-sm text-gray-600">
                      Progress is measured weekly — not guessed.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Weekly 1-on-1 check-in",
                    "Adjustments as needed",
                    "Accountability built-in",
                  ].map((pill) => (
                    <span
                      key={pill}
                      className="rounded-full border border-gray-100 bg-gray-50 px-3 py-2 text-xs sm:text-sm font-semibold text-gray-700"
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {/* /Bottom strip */}
          </div>
        </div>
      </div>
    </section>
  );
}
