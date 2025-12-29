// VideoSection.jsx
import React from "react";
import vslVideo from "../assets/vsl.mp4";

export default function VideoSection() {
  return (
    <section className="bg-white flex flex-col items-center mt-0 relative z-10">
  <div className="w-full max-w-3xl aspect-video px-2 sm:px-0">
    <video
      className="w-full h-full rounded-lg shadow-lg bg-black"
      src={vslVideo}
      controls
      autoPlay
      muted
      playsInline
      preload="metadata"
    />
  </div>
</section>


  );
}
