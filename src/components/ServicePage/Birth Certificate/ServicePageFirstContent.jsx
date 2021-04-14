import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
} from "@material-ui/core";
import img from "../../../images1/sample.png";
import ContactUS from "../../ContactUs";
import Links from "../../Links";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
});

function ServicePageFirstContent() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1 className="heading">Birth Certificate</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">Birth Certificate ?</h3>
            <p className="content">
              A birth certificate is an important government document used to
              verify an individual’s birth date, place of birth and parents.
              Birth registration is a mandatory process in India. The births can
              be registered free of cost within 22 days from the date of birth.
              A fine has to be paid if the birth has to be registered after 22
              days. Since, a birth certificate is a must for obtaining PAN,
              driving license and school admission, its best to get the birth
              certificate as soon as possible. In this article, we look at the
              procedure for obtaining a birth certificate in Tamilnadu.
            </p>
            <h3 className="heading">Applying for Birth Certificate</h3>
            <p className="content">
              The below steps are necessary to apply for a Birth Certificate in
              Tamilnadu. The parent’s of the child or by the nearest family
              member can apply for the birth certificates.<br></br>
              <b>Step 1: Visit the Town Panchayat or Apply online</b>
              <br></br>
              <p>
                The first step in registering a birth is by visiting the Town
                Panchayat or by visiting a Common Service Centre (CSC) of TN
                Government. In case of an application for a birth certificate in
                Chennai, visit the respective Zonal Assistant Health Officer or
                Birth and Death Registrar.
              </p>
              <b>Step 2: Applying for the certificate</b>
              <br></br>
              <p>
                The person who is applying for the certificate has to carry the
                required documents at the time of applying the certificate.
                Normally it requires the identity and address proof of parents.
              </p>
              <b>Step 3: Enter the details</b>
              <br></br>
              <p>
                After receiving the application form, the following details have
                to be entered.
                <ul>
                  <li>Name of the child.</li>
                  <li>Parents Name.</li>
                  <li>Gender of the child.</li>
                  <li>Date of Birth.</li>
                  <li>Place of Birth.</li>
                </ul>
              </p>
              <b>Step 4: Submission of the form</b>
              <br></br>
              <p>
                After the completion of the form, the applicant has to submit
                the form to the town panchayat or the concerned office. The
                applicant has to furnish additional documents if required.
              </p>
            </p>
          </Grid>
          <Grid item xs={5}>
            <Grid item>
              <ContactUS />
            </Grid>
            <Grid>
              <Links />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ServicePageFirstContent;
