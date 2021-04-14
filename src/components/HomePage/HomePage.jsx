import React from "react";
import Header from "../Header/Header";
import HomePageBanner from "./HomePageBanner";
import PopularServices from "./PopularServices";
import HowWeWork from "./HowWeWork";
import HomePageReview from "./HomePageReview";
import Footer from "../Footer/Footer";
import WhyUsCard from "./WhyUsCard";
import ServiceIcons from "./ServiceIcons";
import NavBar from "../Navbar/Navbar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Header />
      <HomePageBanner />
      <PopularServices />
      <WhyUsCard />
      <HowWeWork />
      <HomePageReview />
      <ServiceIcons />
      <Footer />
    </div>
  );
}

export default HomePage;
