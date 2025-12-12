export default function PromiseSection() {
  return (
    <section className="bg-white pt-3 pb-6 sm:pt-6 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="rounded-3xl border border-gray-100 bg-linear-to-b from-orange-50 to-white p-6 sm:p-10 shadow-sm">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-orange-500 text-center">
            Our Promise
          </p>

          <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 text-center leading-snug">
            We coach you until you hit your goal,
            <br className="hidden sm:block" />
            <span className="text-orange-500">no extra charge, no time limit.</span>
          </h2>

          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white border border-orange-100 px-5 py-2 text-sm sm:text-base text-gray-700 shadow-sm">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-orange-500" />
              100% goal-focused coaching
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
