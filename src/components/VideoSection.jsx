export default function VideoSection() {
  return (
    <section className="bg-white flex flex-col items-center mt-0 md:-mt-48 lg:-mt-64 relative z-10">
      {/* Heading */}
      <div className="w-full max-w-3xl px-2 sm:px-0 text-center mb-4 sm:mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900">
          Watch How Real Transformations{" "}
          <span className="text-orange-500">Happens.</span>
        </h2>
      </div>

      {/* Video */}
      <div className="w-full max-w-3xl aspect-video px-2 sm:px-0">
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&rel=0&showinfo=0"
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </section>
  );
}
