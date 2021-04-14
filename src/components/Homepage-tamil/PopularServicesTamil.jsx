import React from "react";
import { Container, Typography } from "@material-ui/core";
import PopularServicesCard from "./PopularServicesCardTamil";

function PopularServices() {
  return (
    <Container>
      <div className="popularServicesHeading">
        <Typography variant="body2" style={{ color: "#259AC4" }}>
          சேவைகள
        </Typography>
        <Typography variant="h5">பிரபலமான சேவைகள</Typography>
      </div>
      <PopularServicesCard />
    </Container>
  );
}

export default PopularServices;
