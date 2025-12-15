import React, { useEffect, useMemo, useRef, useState } from "react";

import client1 from "../assets/Video-testimonials/Client 1 Testimonail.mp4";
import client2 from "../assets/Video-testimonials/Client 2 Testimonail.mp4";
import client3 from "../assets/Video-testimonials/Client 3 Testimonail.mp4";
import client4 from "../assets/Video-testimonials/Client 4 Testimonail.mp4";
import client5 from "../assets/Video-testimonials/Client 5 Testimonail.mp4";
import client6 from "../assets/Video-testimonials/Client 6 Testimonail.mp4";
import client7 from "../assets/Video-testimonials/Client 7 Testimonail.mp4";
import client8 from "../assets/Video-testimonials/Client 8 Testimonail.mp4";

export default function VideoTestimonialsCarousel({
  title = "Your Future Transformation Starts With Stories Like These.",
  videos = [client1, client2, client3, client4, client5, client6, client7, client8],
}) {
  const items = useMemo(() => videos.map((src, i) => ({ src, id: `vid-${i}` })), [videos]);

  // DESKTOP carousel state (3 visible)
  const VISIBLE_DESKTOP = 3;
  const [index, setIndex] = useState(0);

  const maxIndex = Math.max(0, items.length - VISIBLE_DESKTOP);
  const normalize = (next) => {
    if (maxIndex === 0) return 0;
    if (next < 0) return maxIndex;
    if (next > maxIndex) return 0;
    return next;
  };

  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const stepPxRef = useRef(0);
  const hasAutoShiftedRef = useRef(false);

  const recalcStep = () => {
    const track = trackRef.current;
    if (!track) return;
    const firstCard = track.querySelector("[data-card='true']");
    if (!firstCard) return;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;
    const w = firstCard.getBoundingClientRect().width || 0;
    stepPxRef.current = w + gap;
  };

  const applyTransform = (idx) => {
    const track = trackRef.current;
    if (!track) return;
    if (!stepPxRef.current) recalcStep();
    track.style.transform = `translate3d(${-idx * stepPxRef.current}px, 0, 0)`;
  };

  // Desktop: init + resize
  useEffect(() => {
    const isDesktop = () =>
      typeof window !== "undefined" && !window.matchMedia("(max-width: 639px)").matches;
    if (!isDesktop()) return;

    recalcStep();
    applyTransform(index);

    const onResize = () => {
      if (!isDesktop()) return;
      recalcStep();
      applyTransform(index);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Desktop: move track on index change
  useEffect(() => {
    const isDesktop =
      typeof window !== "undefined" && !window.matchMedia("(max-width: 639px)").matches;
    if (!isDesktop) return;
    applyTransform(index);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Desktop: auto shift by 3 when visible (ONLY desktop)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.matchMedia("(max-width: 639px)").matches;
    if (isMobile) return;

    const el = viewportRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e?.isIntersecting) return;
        if (hasAutoShiftedRef.current) return;
        hasAutoShiftedRef.current = true;

        setTimeout(() => {
          setIndex((prev) => normalize(prev + 3));
        }, 350);
      },
      { threshold: 0.35 }
    );

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const goPrev = () => setIndex((p) => normalize(p - 1));
  const goNext = () => setIndex((p) => normalize(p + 1));

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-orange-300/35 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          {title}
        </h2>

        <div className="mt-10">
          {/* MOBILE: simple finger drag (native scroll). NO left-shift animation */}
          <div className="sm:hidden">
            <div className="rounded-[26px] border border-gray-200 bg-gradient-to-b from-orange-50/70 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)]">
              <div className="overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 py-7">
                <div className="flex gap-4">
                  {items.map((it) => (
                    <div key={it.id} className="snap-center shrink-0 w-[86%]">
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="relative aspect-[9/16] bg-gray-100">
                          <video
                            src={it.src}
                            className="h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            preload="metadata"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* DESKTOP: 3 cards + arrows + auto shift */}
          <div className="hidden sm:block relative">
            <div className="relative rounded-[26px] border border-gray-200 bg-gradient-to-b from-orange-50/70 via-white to-white shadow-[0_18px_55px_rgba(0,0,0,0.10)] overflow-hidden">
              <div ref={viewportRef} className="relative overflow-hidden px-6 py-8">
                <div
                  ref={trackRef}
                  className="flex gap-5 will-change-transform transition-transform duration-700 ease-[cubic-bezier(.2,.8,.2,1)]"
                  style={{ transform: "translate3d(0,0,0)" }}
                >
                  {items.map((it) => (
                    <div
                      key={it.id}
                      data-card="true"
                      className="shrink-0 basis-[calc((100%-40px)/3)]"
                    >
                      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                        <div className="relative aspect-[9/16] bg-gray-100">
                          <video
                            src={it.src}
                            className="h-full w-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            controls
                            preload="metadata"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition grid place-items-center"
                aria-label="Previous"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-white border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition grid place-items-center"
                aria-label="Next"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
