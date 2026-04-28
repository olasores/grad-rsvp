"use client";

import TVLoadingScreen from "@/components/TVLoadingScreen";
import HeroSection from "@/components/HeroSection";
import DetailsSection from "@/components/DetailsSection";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import FloatingDecorations from "@/components/FloatingDecorations";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [pageVisible, setPageVisible] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setPageVisible(true), 50);
    }, 6200);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <>
      {loading && <TVLoadingScreen />}

      <div className={`main-page ${pageVisible ? "visible" : "hidden"}`}>
        <FloatingDecorations />
        <HeroSection />
        <DetailsSection />
        <RSVPSection />
        <Footer />
      </div>
    </>
  );
}
