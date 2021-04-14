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
          <Typography variant="p">CLIENT SAY</Typography>
          <Typography
            variant="h4"
            className="mBottom20"
            style={{ marginTop: "5px" }}
          >
            TESTIMONIAL
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
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
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
      navButtonsAlwaysVisible="false"
      indicators="false"
    >
      <Review Initial="S" UserName="Siddharthan V" />
      <Review Initial="V" UserName="Vaithya Sambandham" />
      <Review Initial="B" UserName="B Shyam Sundar" />
    </Carousel>
  );
}

export default HomePageReview;
