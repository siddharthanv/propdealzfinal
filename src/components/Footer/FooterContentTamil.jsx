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
            <h2> லோரெம் இப்சம்</h2>
            <p>
              லோரெம் இப்சம் என்பது அச்சிடுதல் மற்றும் தட்டச்சு அமைப்பின் போலி
              உரை தொழில். லோரெம் இப்சம் தொழில்துறையின் நிலையான போலி உரையாக
              இருந்து வருகிறது 1500 களில் இருந்து, அறியப்படாத அச்சுப்பொறி ஒரு
              வகையை எடுத்தபோது அதை துருவல் ஒரு வகை மாதிரி புத்தகத்தை
              உருவாக்குகிறது. அது பிழைக்கவில்லை ஐந்து நூற்றாண்டுகள் மட்டுமே,
              ஆனால் மின்னணு தட்டச்சு அமைப்பிற்கான பாய்ச்சல், அடிப்படையில்
              மாறாமல் உள்ளது.
            </p>
          </Grid>
          <Grid item md={4} sm={12} style={{ width: "100%" }}>
            <h2> லோரெம் இப்சம்</h2>
            <ul
              style={{ listStyleType: "none", margin: "0px", padding: "0px" }}
            >
              <li>லோரெம்</li>
              <li>இப்சம்</li>
              <li>லோரெம்</li>
              <li>லோரெம்</li>
            </ul>
          </Grid>
          <Grid item md={4} sm={12}>
            <h2>லோரெம் இப்சம் </h2>
            <p>
              <LocationOnIcon /> வில்லா எண்: 4, ஸ்ரீ ஹர்ஷா, எண் 30 சர்ச் மெயின்
              ரோடு, காந்தன்சாவடி, பெருங்குடி, சென்னை - 96
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
