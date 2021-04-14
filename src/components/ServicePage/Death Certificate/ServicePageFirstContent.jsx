import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  TextField,
  Box,
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
        <h1 className="heading">Death Certificate</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">Death Certificate</h3>
            <p className="content">
              Death Certificate is a valuable document which is issued by the
              Government to confirm a person’s death, fact and cause of death.
              Registration of death is to prove the person’s time and date of
              death, to relieve the individual from social, legal and official
              commitments, to settle property inheritance and enabling the
              family to collect insurance and other benefits. All deaths should
              be reported within 21 days at the place of occurrence. In this
              article, we look at the procedure for obtaining a TN death
              certificate.
            </p>
            <h3 className="heading">
              {" "}
              TN Death Certificate Application Procedure
            </h3>
            <p className="content">
              The following are the steps to apply for a Death Certificate.
              <br></br>
              <b>Step 1: Registering with Town Panchayat.</b>
              Registration of death to the Town Panchayat officers is necessary
              after the occurrence of a death.
              <br></br>
              <b>Step 2: Filling the form</b>
              The applicant should fill in details of the deceased person in a
              form given by the Registrar. The applicant should include the
              following details are:
              <ul>
                <li>Name of the deceased person.</li>
                <li>Age and gender of the person.</li>
                <li>Father’s name or husband’s name of the deceased</li>.
                <li>Details of the place of death.</li>
                <li>Date of death.</li>
                <li>The purpose of the requirement of the certificate.</li>
                <li>Relationship of the applicant with the deceased.</li>
              </ul>
              <br></br>
              <b>Step 3: Entering the information</b>
              After the oral reporting of the death to the Registrar, the
              information will be entered in the appropriate reporting form.
              These details must be inclusive of a signature or a thumb
              impression.<br></br>
              <b>Step 4: Furnishing crematorium or burial ground receipt</b>
              The applicant has to provide the receipt of the crematorium or the
              burial ground.<br></br>
              <b>Step 5: Issue of Certificate</b>
              The Registrar then verifies the death of the person, confirming
              all the details given are genuine. Then the applicant will receive
              the certificate.<br></br>
              <b>Registrars</b>
              <ul>
                <li>
                  If a death occurs in Municipalities, Corporations and Special
                  Village Panchayats (Town Panchayats), the concerned local
                  bodies undertake the registration of deaths.
                </li>
                <li>
                  If a death occurs in Village Panchayats, the responsibility
                  for the registration of deaths lies with the Revenue
                  Department and the Village Administrative Officers.
                </li>
                <li>
                  An occurrence of death in a medical institution indicate for
                  registration by the institution directly with the registering
                  authority.
                </li>
                <li>
                  If a death has occurred in a house, the head of the family or
                  the nearest relative of the family will have to register the
                  incident in a specific format along with a medical
                  certificate.
                </li>
              </ul>
            </p>
            <h3 className="heading">Death Certificate Application</h3>
            <p className="content">
              A free copy of the death certificate will be provided after
              verification if the death has been reported within 21 days from
              the date of occurrence. In case of obtaining a certificate at a
              later date from the date of occurrence, the applicant has to apply
              it in a different format with the name of the person, age, date of
              death, place of death and residential address at the time of
              death. After submission of this form, an acknowledgement should be
              acquired. In rural areas, Death Certificate has to be applied in
              the Taluk Office, within two years of death and subsequently, it
              has to be applied in the Sub-Registrars office. In Town/ Municipal
              areas, it has to be applied in the respective Town/ Municipal
              Office.
            </p>
            <h3 className="heading">Documents Required for Application</h3>
            <p className="content">
              To apply for a death certificate requires the following documents:
              <ul>
                <li>Birth certificate of the deceased.</li>
                <li>An affidavit stating the date and time of death.</li>
                <li>A copy of the ration card.</li>
              </ul>
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
