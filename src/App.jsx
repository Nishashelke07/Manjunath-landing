import { useState } from "react";
import "./App.css";

import Review from "./components/Review";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import CallToActionButton from "./components/CallToActionButton";
import MeetYourMentor from "./components/MeetYourMentor";
import OfferSection from "./components/OfferSection";
import PromiseSection from "./components/PromiseSection";
import StickyBar from "./components/StickyBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Add bottom padding so content isn't covered by sticky bar */}
      <div className="pb-24 sm:pb-28">
        <Review />
        <Hero />
        <VideoSection />
        <CallToActionButton />
        <MeetYourMentor />
        <OfferSection />
        <PromiseSection />
      </div>

      {/* Sticky bar shows from the start */}
      <StickyBar />
    </>
  );
}

export default App;
