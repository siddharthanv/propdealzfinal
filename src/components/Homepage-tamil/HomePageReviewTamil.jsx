import React from "react";
import Avatar from "@material-ui/core/Avatar";
import { Container, Box, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

function Review(props) {
  return (
    <div className="center colorWhite HomePageReviewStyle">
      <Box
        display="flex"
        alignItems="center"
        style={{ height: "100%", width: "60%" }}
      >
        <Container>
          <Typography variant="p"> லோரெம் இப்சம்</Typography>
          <Typography
            variant="h4"
            className="mBottom20"
            style={{ marginTop: "5px" }}
          >
            லோரெம் இப்சம்
          </Typography>
          <Avatar
            alt="Travis Howard"
            src=""
            className="mBottom20"
            style={{ marginBottom: "10px" }}
          >
            {props.Initial}
          </Avatar>
          <Typography variant="p">
            லோரெம் இப்சம் என்பது அச்சிடுதல் மற்றும் தட்டச்சு அமைப்பின் போலி உரை
            தொழில். லோரெம் இப்சம் தொழில்துறையின் நிலையான போலி உரையாக இருந்து
            வருகிறது 1500 களில் இருந்து, அறியப்படாத அச்சுப்பொறி ஒரு வகையை
            எடுத்தபோது மற்றும் ஒரு வகை மாதிரி புத்தகத்தை உருவாக்க அதை துருவல்.
          </Typography>
          <Typography variant="h5" className="m20">
            {props.UserName}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}

function HomePageReview() {
  return (
    <Carousel
      animation="slide"
      interval="7000"
      navButtonsAlwaysVisible="true"
      indicators="false"
    >
      <Review Initial="S" UserName="சித்தார்தன் வி " />
      <Review Initial="V" UserName="வைத்திய சம்பந்தம்" />
      <Review Initial="B" UserName="பி ஷியாம் சுந்தர்" />
    </Carousel>
  );
}

export default HomePageReview;
