import React from "react";
import banner from "../../images/HomePageBanner.png";

function HomePageBanner() {
    return (
        <div
          className="ServicePageBannerStyle"
          style={{ backgroundImage:`url(${banner})` }}
        ></div>
    )
}

export default HomePageBanner;
