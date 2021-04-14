import React from "react";
import Header from "../../Header/Header";
import ServicePageBanner from "../ServicePageBanner";
import ServicePageFirstContent from "./ServicePageFirstContent";
//import ServicePageAccordian from "./ServicePageAccordian";
import ServicePageSecondContent from "./ServicePageSecondContent";
import Footer from "../../Footer/Footer";

function ServicePage() {
  return (
    <div>
      <Header />
      <ServicePageBanner />
      <ServicePageFirstContent />

      <ServicePageSecondContent />
      <Footer />
    </div>
  );
}

export default ServicePage;
