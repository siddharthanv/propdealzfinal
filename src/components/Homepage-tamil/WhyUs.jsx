import React from "react";
import { Typography, Container, Box } from "@material-ui/core";
import WhyUsCard from "./WhyUsCard";

function WhyUs() {
  return (
    <div>
      <Container>
        <Box className="WhyUsHeadingStyle center colorBlue">
          <Typography variant="body2">
            {" "}
            இக்கட்டுரை தமிழ் மொழி பற்றியது
          </Typography>
          <Typography variant="h5">பக்தி இலக்கிய ?</Typography>
        </Box>
        <WhyUsCard />
      </Container>
    </div>
  );
}

export default WhyUs;
