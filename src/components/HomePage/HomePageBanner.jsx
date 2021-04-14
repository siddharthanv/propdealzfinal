import { Button, Card } from "@material-ui/core";
import React from "react";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import banner from "../../images/HomePageBanner.png";
import banner1 from "../../images/1.png";
import banner2 from "../../images/2.png";

function HomePageBanner() {
  return (
    <Carousel animation="slide" interval="4000">
      {/* <div
         
        ></div> */}

      <Card
        className="HomepageBannerStyle"
        style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}
      />
      <Card
        className="HomepageBannerStyle"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <Grid
          display="flex"
          justifyContents="flex-end"
          container
          className="buttonfix"
          style={{ position: "relative", top: "3rem", left: "77rem" }}
        >
          {" "}
          <Grid item className="phone cta">
            Call us
          </Grid>
          <Grid item className="phone number">
            +91 6381293871{" "}
          </Grid>
        </Grid>
      </Card>
      <Card
        className="HomepageBannerStyle"
        style={{ backgroundImage: `url(${banner2})` }}
      />
    </Carousel>
  );
}

export default HomePageBanner;
