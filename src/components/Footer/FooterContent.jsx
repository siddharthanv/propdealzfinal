import React from "react";
import { Container, Grid } from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

function FooterContent() {
  return (
    <div className="footerContentStyle">
      <Container>
        <Grid container spacing={10}>
          <Grid item md={4} sm={12}>
            <h2>About Us</h2>
            <p>
              Propdealz is a reliable portal for all your Real Estate needs and
              deals.Our team of experienced realtors can help out smooth
              transaction of any value or any complications. your Real estate
              needs and deals
            </p>
          </Grid>
          <Grid item md={4} sm={12} style={{ width: "100%" }}>
            <h2>Useful Links</h2>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              <li>About</li>
              <li>Blog</li>
              <li>Agencies</li>
              <li>Contact</li>
            </ul>
          </Grid>
          <Grid item md={4} sm={12}>
            <h2>Get in Touch</h2>
            <p>
              <LocationOnIcon /> Villa No: 4, Sri Harsha, No 30 Church Main
              Road, Kandhanchavadi, Perungudi, Chennai - 96
            </p>
            <p>
              <PhoneAndroidIcon /> 8072447576, 8838142624
            </p>
            <p>
              <EmailIcon /> hibroonline@gmail.com
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterContent;
