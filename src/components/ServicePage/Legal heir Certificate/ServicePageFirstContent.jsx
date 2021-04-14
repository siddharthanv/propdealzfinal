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
import Links from "../../Links";

import ContactUS from "../../ContactUs";

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
        <h1 className="heading">Partition Deed</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is Legal Heir Certificate?</h3>
            <p className="content">
              In case if the chief person or the head of the family member
              suddenly demise, any of the family members next to that person
              should get a legal heir certificate to transfer the assets of the
              deceased person to his/her official heirs. This has to be done
              soon after getting the death certificate from the municipality
              corporation. To get the legal heir certificate, the concerned
              person needs to apply in the appropriate government office.
              Getting this certificate is very important as this is the main
              document required to claim the right over the deceased person’s
              dues and assets. This Law has created rights to claim the
              securities or assets or property of the person dying intestate.
              <br></br>
              <b>
                The following people are considered to be eligible to obtain the
                legal heir certificate,
              </b>
              <ul>
                <li>Spouse of the deceased person.</li>
                <li>Son/Daughter or Children of the deceased person</li>
                <li>Parents of the deceased person (mother/father)</li>
                <li>Sibling of the deceased person</li>
              </ul>
              <br></br>
              <b>
                Legal heir certificate is required to perform the following
                purpose
              </b>
              <ul>
                <li>
                  To transfer the properties, dues and assets of the demised
                  person to his heirs.
                </li>
                <li>To claim the insurance of the deceased person.</li>
                <li>
                  To sanction and process the family pension of the deceased
                  person or deceased employee.
                </li>
                <li>
                  To receive dues of the deceased person such as gratuity,
                  provident fund etc from the concerned office or from the
                  Government.
                </li>
                <li>
                  To receive salary arrears of the deceased person, if the
                  deceased person has worked as state or central Government
                  employee.
                </li>
                <li>
                  To obtain employment of the deceased person based on
                  compassionate appointments.
                </li>
              </ul>
              <b>
                Following are the step wise procedure to apply Legal Heir
                Certificate in Tamilnadu, India
              </b>
              <ul>
                <li>
                  To obtain a Legal Heir certificate, visit the Taluk /
                  Thasildhar office in your location.
                </li>
                <li>
                  Get the application form and fill it with all required details
                  in the application form and you have to attach all the
                  mandatory needed documents with the application form and
                  submit it to the Taluk office, Which comes under your state
                  government
                </li>
                <li>
                  The applicant has to affix a stamp of Rs. 2 in the application
                  form before submitting it.
                </li>
                <li>
                  After submitting the application form, you will receive a
                  token and they will inform you to meet VAO/RI after a time
                  period such as after 2 or 3 days.
                </li>
                <li>
                  Visit the VAO office after 2 or 3 days, there you have to fill
                  in some details and they will provide give 2 sets of form in
                  which you need to get 10 (i.e. 10 persons have to write their
                  name, address & sign for reference) in the back of the form
                  and in the next form you have to write the name of different
                  10 people in your locality for reference, the list can be
                  verified later for correctness. In case, if you live in a
                  metropolitan city, then you need to visit RI.
                </li>
                <li>
                  Once completing the above application form, you need to go to
                  the VAO or Village Administrators Office in person and all the
                  Legal heirs have to sign the Application form in presence of
                  Village Administrators Officer. VAO will verify the
                  correctness of the Legal Heirs and after the satisfaction of
                  all documents; the VAO will affix his office Seal and
                  signature.
                </li>
                <li>
                  Then you have to submit the VAO signed Application form to the
                  Revenue Inspector. After receiving the application form, the
                  Revenue Inspector will visit your house to examine and to
                  verify your address and the Legal heirs.
                </li>
                <li>
                  Then submit the signed in RI & VAO form to the Tahsildar
                  office in your location and get a token number, after which
                  the legal heir certificate will be issued officially.
                </li>
              </ul>
              <b>
                Stepwise procedure to apply Legal Heir certificate online –
                e-Sevai Services for Citizen:
              </b>
              <ul>
                <li>
                  Use the following link https://www.tnesevai.tn.gov.in/Citizen/
                  to e-sevai portal where you can apply for legal heir
                  certificate online.
                </li>
                <li>
                  Login into the website using the credentials and page prompts,
                  then hit “login”. In case, if you are new user, then you can
                  select “Signup here” under login to register in that site and
                  then apply.
                </li>
                <li>
                  Please follow the instructions and fill in the details in the
                  online application form.
                </li>
                <li>
                  Your application will be processed by the concerned department
                  as per the procedure and how it will be processed in person to
                  provide the certificate. Generally, the process of obtaining a
                  legal heir certificate takes around 30 days from government
                  department. And if you face any unnecessary delay in obtaining
                  this certificate or if the concerned officials fail to
                  respond, then you can approach the Revenue Division Officer
                  (RDO)/sub-collector for further proceedings.
                </li>
              </ul>
              <b>Issuance of Certificates:</b>
              <p>
                Formal Legal Heir certificates are issued by the Tahsildar of
                the concerned district to accredit the actual deceased person
                living heirs and the succession certificates or duplicate
                certificates or certified copies of certificates to the deceased
                person legal heirs are issued by the court.
              </p>
              <b>
                Following are the documents required to get legal heir
                certificate:
              </b>
              <ul>
                <li>Application form of legal heir.</li>
                <li>Death certificate of the deceased person.</li>
                <li>Identity Card of the applicant.</li>
                <li>Ration card of the applicant</li>
                <li>
                  Proof of residence of the deceased person. It can be any one
                  of the following Voter ID, DL, and Bank Pass Book etc.
                </li>
              </ul>
            </p>
            <b>If Spouse applies for legal heir certificate:</b>
            <ul>
              <li>
                Aadhaar card, Marriage Registration Certificate or Passport or
                Voter ID need be submitted.
              </li>
              <li>Birth certificate or Transfer Certificate of their kids.</li>
              <li>
                Self-declaration of the spouse indicating all other legal heirs
                which include Mother-in-law, if wife of the deceased person is
                the applicant
              </li>
            </ul>
            <b>If Child applies for legal heir certificate:</b>
            <ul>
              <li>Death Certificate of his/her parents.</li>
              <li>
                Birth certificate / Passport / Aadhaar / T.C of the applicant
                and aadhaar card of all other legal heirs.
              </li>
            </ul>
            <b>If the minor Child applies if parents are deceased:</b>
            <ul>
              <li>Death Certificate of his/her parents.</li>
              <li>
                Birth certificate /Passport / Aadhaar / T.C of the applicant and
                Aadhaar card of all other legal heirs.
              </li>
              <li>
                Guardianship order obtained from the Hon’ble civil court as a
                proof for the relationship to the heirs.
              </li>
            </ul>
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
