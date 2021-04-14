import React from "react";
import Header from "../Header/HeaderTamil";
import HomePageBanner from "./HomePageBanner";
import PopularServices from "./PopularServicesTamil";
import WhyUs from "./WhyUs";
import HowWeWork from "./HowWeWorkTamil";
import HomePageReview from "./HomePageReviewTamil";
import Footer from "../Footer/FooterTamil";

function HomePage() {
  return (
    <div>
      <Header />
      <HomePageBanner />
      <PopularServices />
      <WhyUs />
      <HowWeWork />
      <HomePageReview />
      <Footer />
    </div>
  );
}

export default HomePage;
