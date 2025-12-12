import { FaCheck } from "react-icons/fa6";

export default function OfferSection() {
  const items = [
    "Personalized fat-loss system",
    "20-min home workouts",
    "Weekly 1-on-1 coaching",
    "Daily accountability",
    "Personalized Indian Diet Strategy",
    "Sleep & habit optimization",
    "Long-term health roadmap",
    "Outside Eating Playbook (India Edition)",
    "Special Guidance for BP and Diabetes",
  ];

  return (
    <section className="bg-white pt-6 pb-3 sm:pt-16 sm:pb-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-gray-100 bg-linear-to-b from-orange-50 to-white p-6 sm:p-10 shadow-sm">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Why <span className="text-orange-500">HealthyNation</span> Works{" "}
              <span className="text-gray-600 font-bold">(And What You Get)</span>
            </h2>

            <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
              HealthyNation isn’t a template plan — it’s a{" "}
              <span className="font-semibold text-gray-900">
                personalized, lifestyle-based system
              </span>{" "}
              for busy adults who want real, lasting results.
            </p>
          </div>

          {/* Content */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* Left: Title + note */}
            <div className="rounded-2xl bg-white/70 border border-gray-100 p-6 sm:p-8">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-snug">
                Inside the{" "}
                <span className="text-orange-500">Fat-to-Fit 12-Week</span>{" "}
                Blueprint you get:
              </h3>

              <div className="mt-6 rounded-2xl bg-orange-50 border border-orange-100 p-5">
                <p className="text-gray-800 font-semibold">
                  Built using principles followed by top celebrities.
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  (Adapted for real Indian routines, food, and schedules.)
                </p>
              </div>
            </div>

            {/* Right: Checklist */}
            <div className="rounded-2xl bg-white border border-gray-100 p-6 sm:p-8">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {items.map((text) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm transition"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white">
                      <FaCheck className="text-[12px]" />
                    </span>

                    <span className="text-gray-800 font-medium leading-snug">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
