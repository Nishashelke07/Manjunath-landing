import { FaCheck } from "react-icons/fa6";

export default function OfferSection() {
  const groups = [
    {
      title: "The System",
      subtitle: "Personalized + goal-driven",
      items: ["Personalized fat-loss system", "Long-term health roadmap"],
    },
    {
      title: "Training",
      subtitle: "Short. Effective. Repeatable.",
      items: ["20-min home workouts"],
    },
    {
      title: "Coaching",
      subtitle: "You’re not doing this alone",
      items: ["Weekly 1-on-1 coaching", "Daily accountability"],
    },
    {
      title: "Nutrition",
      subtitle: "Made for Indian food & routines",
      items: [
        "Personalized Indian Diet Strategy",
        "Outside Eating Playbook (India Edition)",
      ],
    },
    {
      title: "Lifestyle",
      subtitle: "Recovery that speeds results",
      items: ["Sleep & habit optimization"],
    },
    {
      title: "Health Support",
      subtitle: "Safe guidance when needed",
      items: ["Special Guidance for BP and Diabetes"],
    },
  ];

  const phases = [
    { t: "Weeks 1–2", d: "Setup & habit foundation" },
    { t: "Weeks 3–5", d: "Fat-loss momentum" },
    { t: "Weeks 6–9", d: "Consistency + strength" },
    { t: "Weeks 10–12", d: "Sustain & lock results" },
  ];

  return (
    <section className="relative bg-white py-10 sm:py-16">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-orange-300/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Frame */}
        <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-linear-to-b from-orange-50 via-white to-white shadow-sm">
          {/* subtle pattern */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-radial-gradient(#111827_1px,transparent_1px) bg-size:18px_18px" />

          <div className="relative p-6 sm:p-10">
            {/* Header */}
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-orange-200 bg-white/70 px-3 sm:px-4 py-2 text-[10px] sm:text-xs font-semibold tracking-[0.18em] sm:tracking-[0.22em] text-orange-700 shadow-sm">
                <span className="shrink-0">WHAT YOU GET</span>
                <span className="shrink-0 h-1 w-1 rounded-full bg-orange-500" />
                <span className="shrink-0">12-WEEK PLAN</span>
              </div>


              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                Why{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 text-orange-600">
                    HealthyNation
                  </span>
                  <span className="absolute -bottom-1 left-0 right-0 h-1 rounded-full bg-orange-200/60" />
                </span>{" "}
                Works
              </h2>

              <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
                Not a simple “list plan”. This is a{" "}
                <span className="font-semibold text-gray-900">
                  structured 12-week system
                </span>{" "}
                with coaching, food strategy, and habits designed for real Indian
                routines.
              </p>
            </div>

            {/* Bento layout */}
            <div className="mt-10 grid grid-cols-12 gap-4 sm:gap-5">
              {/* Big roadmap card */}
              <div className="col-span-12 lg:col-span-5">
                <div className="relative h-full rounded-3xl border border-gray-100 bg-white/80 p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6">
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] text-gray-500">
                        THE ROADMAP
                      </p>

                      <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-snug">
                        <span className="whitespace-nowrap sm:whitespace-normal">
                          Your 12-Week <span className="text-orange-600">Fat-to-Fit</span>
                        </span>
                        <span className="block sm:inline"> Journey</span>
                      </h3>
                    </div>

                    <div className="shrink-0 self-start rounded-2xl border border-orange-200 bg-orange-50 px-3 py-2">
                      <p className="text-xs font-semibold text-orange-700 whitespace-nowrap">
                        Weekly structure
                      </p>
                    </div>
                  </div>



                  <div className="mt-6 space-y-3">
                    {phases.map((p) => (
                      <div
                        key={p.t}
                        className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-white p-4"
                      >
                        <div className="mt-0.5 h-9 w-9 rounded-xl bg-orange-600/10 border border-orange-200 flex items-center justify-center">
                          <span className="h-2.5 w-2.5 rounded-full bg-orange-600" />
                        </div>

                        <div>
                          <p className="font-semibold text-gray-900">{p.t}</p>
                          <p className="text-sm text-gray-600">{p.d}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 rounded-2xl border border-orange-100 bg-linear-to-r from-orange-50 to-white p-5">
                    <p className="text-gray-900 font-semibold">
                      Built using proven principles.
                    </p>
                    <p className="mt-1 text-sm text-gray-600">
                      Adapted for Indian food, travel, and busy work schedules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature bento cards */}
              <div className="col-span-12 lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {groups.map((g, idx) => (
                    <div
                      key={g.title}
                      className="group relative rounded-3xl border border-gray-100 bg-white p-6 sm:p-7 transition hover:-translate-y-0.5 hover:shadow-sm"
                    >
                      {/* hover wash */}
                      <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition group-hover:opacity-100 bg-linear-to-br from-orange-50 to-transparent" />

                      <div className="relative flex items-start justify-between gap-3">
                        <div>
                          <p className="text-xs font-semibold tracking-[0.18em] text-gray-500">
                            MODULE {String(idx + 1).padStart(2, "0")}
                          </p>
                          <h4 className="mt-2 text-lg sm:text-xl font-extrabold text-gray-900">
                            {g.title}
                          </h4>
                          <p className="mt-1 text-sm text-gray-600">
                            {g.subtitle}
                          </p>
                        </div>

                        <div className="shrink-0 h-11 w-11 rounded-2xl border border-orange-200 bg-orange-50 flex items-center justify-center">
                          <span className="text-orange-600 font-extrabold">
                            ✓
                          </span>
                        </div>
                      </div>

                      <div className="relative mt-5 flex flex-wrap gap-2">
                        {g.items.map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-3 py-2 text-sm font-semibold text-gray-800"
                          >
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-600 text-white">
                              <FaCheck className="text-[11px]" />
                            </span>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom strip */}
                <div className="mt-5 rounded-3xl border border-gray-100 bg-white p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-gray-500">
                        WHY THIS FEELS DIFFERENT
                      </p>
                      <p className="mt-2 text-base sm:text-lg font-extrabold text-gray-900">
                        It’s designed like a “system”, not a “PDF plan”.
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        Clear weekly structure + coaching + accountability so
                        you’re consistent even on tough days.
                      </p>
                    </div>

                    <div className="flex gap-3">
                      <div className="rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3">
                        <p className="text-xs text-gray-500 font-semibold">
                          TIME
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">
                          20-min workouts
                        </p>
                      </div>
                      <div className="rounded-2xl border border-orange-200 bg-orange-50 px-4 py-3">
                        <p className="text-xs text-orange-700 font-semibold">
                          SUPPORT
                        </p>
                        <p className="text-sm font-extrabold text-gray-900">
                          1-on-1 weekly
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Bottom strip */}
              </div>
            </div>
            {/* /Bento layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
