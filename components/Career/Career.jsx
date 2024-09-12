import React from "react";
import VideoSection from "@/components/Career/VideoSection";
import CareerSection from "@/components/Career/CareerSection";
import DynamicCard from "@/components/Career/DynamicCard";

const Career = () => {
  return (
    <div className="container mx-auto">
      <CareerSection />

      <VideoSection />
      <DynamicCard />
    </div>
  );
};

export default Career;
