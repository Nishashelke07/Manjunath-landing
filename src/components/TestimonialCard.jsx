export default function TestimonialCard({ t }) {
  return (
    <div className="rounded-3xl overflow-hidden bg-white border border-gray-100 shadow-sm">
      <div className="relative">
        <img
          src={t.img}
          alt={`${t.name} transformation`}
          className="h-64 sm:h-72 md:h-80 w-full object-cover"
          loading="lazy"
        />

        {t.watermark && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/90 font-extrabold tracking-[0.25em] text-xs drop-shadow">
            {t.watermark}
          </div>
        )}
      </div>

      <div className="relative bg-white">
        <div className="px-5 sm:px-6 pt-6 pb-6">
          <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 text-center">
            {t.name}
          </h3>

          {t.subtitle && (
            <p className="mt-2 text-gray-700 text-sm sm:text-[15px] leading-relaxed text-center">
              {t.subtitle}
            </p>
          )}

          <div className="mt-5 rounded-2xl bg-gray-50 border border-gray-100 p-4">
            {t.result && (
              <div className="text-center">
                <span className="inline-flex items-center justify-center rounded-full bg-orange-50 border border-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
                  {t.result}
                </span>
              </div>
            )}

            {(t.startWeight || t.currentWeight) && (
              <div className="mt-4">
                {t.startWeight && (
                  <div className="flex items-center justify-between text-sm sm:text-[15px]">
                    <span className="text-gray-600">Starting Weight</span>
                    <span className="font-semibold text-gray-900">{t.startWeight}</span>
                  </div>
                )}
                {t.currentWeight && (
                  <div className="mt-2 flex items-center justify-between text-sm sm:text-[15px]">
                    <span className="text-gray-600">Current Weight</span>
                    <span className="font-semibold text-gray-900">{t.currentWeight}</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
