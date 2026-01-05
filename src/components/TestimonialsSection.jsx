// TestimonialsSection.jsx
import TestimonialCard from "./TestimonialCard";

import Umesh from "../assets/testimonials/trans1.jpg";
import soyel from "../assets/testimonials/Soyel.jpg";
import rahul from "../assets/testimonials/Rahul.jpg";
import sunny from "../assets/testimonials/Sunny.jpg";
import hamid from "../assets/testimonials/trans6.jpg";
import manoj from "../assets/testimonials/trans5.jpg";

import arup from "../assets/testimonials/Arup-jain.jpeg";
import ayush from "../assets/testimonials/Ayush.jpeg";
import noname from "../assets/testimonials/noname.jpeg";
import ragish from "../assets/testimonials/Ragish.jpeg";
import souravsingh from "../assets/testimonials/Sourav Singh.jpeg";
import srivastav from "../assets/testimonials/Srivastav.jpeg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Umesh Mohnani",
      subtitle: "Desk job • Age 30",
      result: "Lost 14 kgs in 3 months",
      img: Umesh,
      watermark: "@Healthynation",
    },
    {
      name: "Sunny Verma",
      subtitle: "IT professional • Age 35",
      result: "Lost 10 kgs in 3 months",
      img: sunny,
      watermark: "@Healthynation",
    },
    {
      name: "Manoj J Kakde",
      subtitle: "9–5 job • Age 44",
      result: "Lost 15 kgs in 4 months",
      img: manoj,
      watermark: "@Healthynation",
    },
    {
      name: "Hamid Kamal",
      subtitle: "Desk job • Age 35",
      result: "Lost 17 kgs in 4 months",
      img: hamid,
      imgPos: "md:object-right",
      watermark: "@Healthynation",
    },
    {
      name: "Soyel",
      subtitle: "2nd hand bike dealer • Age 25",
      result: "Lost 10 kgs in 3 months",
      img: soyel,
      watermark: "@Healthynation",
    },
    {
      name: "Rahul Nathani",
      subtitle: "Shop keeper • Age 32",
      result: "Lost 13 kgs in 4 months",
      img: rahul,
      watermark: "@Healthynation",
    },
    {
      name: "Sourav Singh",
      subtitle: "IT",
      result: "Lost 100 kgs to 80 kg",
      img: souravsingh,
      watermark: "@Healthynation",
    },
    {
      name: "Ayush",
      subtitle: "Businessman",
      result: "Lost 99 kgs to 82 kg",
      img: ayush,
      watermark: "@Healthynation",
    },
    {
      name: "Ragish",
      subtitle: "IT",
      result: "Lost 92 kgs to 82 kg",
      img: ragish,
      watermark: "@Healthynation",
    },
    {
      name: "Srivastav",
      subtitle: "Job",
      result: "Lost 80 kgs to 70 kg",
      img: srivastav,
      watermark: "@Healthynation",
    },
    {
      name: "Arup Jain",
      subtitle: "Business",
      result: "Lost 108 kgs to 70 kg",
      img: arup,
      watermark: "@Healthynation",
    },
    {
      name: "",
      subtitle: "Business",
      result: "Lost 90 kgs to 75 kg",
      img: noname,
      watermark: "@Healthynation",
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg font-semibold tracking-[0.12em] uppercase text-orange-600">
            Watch how real transformations happens.
          </p>

          <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-gray-900">
          These Men Were Over 100kg.
            <br />
            <span className="inline-block mt-2 px-3 py-1 rounded-xl bg-orange-50 border border-orange-100 text-gray-900">
            Stuck. Tired. Losing Control.
            </span>
            <br />
            <span className="block mt-2 text-orange-600">Just Like You.</span>
          </h2>
        </div>

        {/* Cards */}
        {/* <div className="mt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7">
            {testimonials.map((t, idx) => (
              <div key={`${t.name || "anon"}-${idx}`} className="w-full">
                <TestimonialCard t={t} />
              </div>
            ))}
          </div>
        </div> */}

<Swiper
  modules={[Autoplay, Pagination, Navigation]}
  spaceBetween={24}
  slidesPerView={1}
  loop={true}
  grabCursor={true}
  autoplay={{
    delay: 3000,               // time between slides (ms)
    disableOnInteraction: false // keep sliding after swipe
  }}
  pagination={{ clickable: true }}
  navigation
  breakpoints={{
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 }
  }}
>

          {testimonials.map((t, idx) => (
            <SwiperSlide key={`${t.name || "anon"}-${idx}`}>
              <TestimonialCard t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
