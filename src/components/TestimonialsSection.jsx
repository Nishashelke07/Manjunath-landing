import TestimonialCard from "./TestimonialCard";

// import Umesh from "../assets/testimonials/Umesh.jpg";
import Umesh from "../assets/testimonials/trans1.jpg";
import soyel from "../assets/testimonials/Soyel.jpg";
import rahul from "../assets/testimonials/Rahul.jpg";
import sunny from "../assets/testimonials/Sunny.jpg";
// import manoj from "../assets/testimonials/Manoj.jpg";
// import hamid from "../assets/testimonials/Hamid.jpg";
import hamid from "../assets/testimonials/trans6.jpg";

import manoj from "../assets/testimonials/trans5.jpg";


export default function TestimonialsSection() {
    const testimonials = [
        {
            name: "Umesh Mohnani",
            subtitle: "Desk job • Age 30",
            result: "Lost 14 kgs in 3 months",
            img: Umesh,
            watermark: "@HEALTHYNATION",
        },
        {
            name: "Soyel",
            subtitle: "2nd hand bike dealer • Age 25",
            result: "Lost 10 kgs in 3 months",
            img: soyel,
            watermark: "@HEALTHYNATION",
        },
        {
            name: "Rahul Nathani",
            subtitle: "Shop keeper • Age 32",
            result: "Lost 13 kgs in 4 months",
            img: rahul,
            watermark: "@HEALTHYNATION",
        },
        {
            name: "Sunny Verma",
            subtitle: "IT professional • Age 35",
            result: "Lost 10 kgs in 3 months",
            img: sunny,
            watermark: "@HEALTHYNATION",
        },
        {
            name: "Manoj J Kakde",
            subtitle: "9–5 job • Age 44",
            result: "Lost 15 kgs in 4 months",
            img: manoj,
            watermark: "@HEALTHYNATION",
        },
        {
            name: "Hamid Kamal",
            subtitle: "Desk job • Age 35",
            result: "Lost 17 kgs in 4 months",
            img: hamid,
            watermark: "@HEALTHYNATION",
            imgPos: "md:object-right"
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
                        These Men Were Busy.
                        <br />
                        <span className="inline-block mt-2 px-3 py-1 rounded-xl bg-orange-50 border border-orange-100 text-gray-900">
                            Stressed. Out of Shape.
                        </span>
                        <br />
                        <span className="block mt-2 text-orange-500">Just Like You.</span>
                    </h2>


                </div>


                {/* Cards */}
                <div className="mt-8 sm:mt-12">
                    <div className="grid grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-7">
                        {testimonials.map((t) => (
                            <div key={t.name} className="w-full">
                                <TestimonialCard t={t} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
