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
        <h1 className="heading">Name Transfer</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">
              Guide for Tamil Nadu Patta name change process online
            </h3>
            <p className="content">
              Patta is also recognized as an Ownership Deed land document. It is
              usually considered to be evidence of your property/land. The Tamil
              Nadu Government has been handling the operations of the Online
              Patta Service for the general public. The Tamil Nadu State Revenue
              Department looks after every aspect of the related lands and
              property. Below is the Guide for Tamilnadu Patta Name Change
              Process Online.
            </p>
            <h3 className="heading">
              Documents to carry for patta name change
            </h3>
            <p className="content">
              If you want to change the Patta title for the newly acquired plot
              with the survey number of the subdivision for single or combined
              Patta, here is the process. Once the application is completed,
              you’ll find that you have a number of signatures, undertakings,
              and declarations following your personal information to complete
              to finalize the process.<br></br>
              For the purposes of your Patta transfer process, the details
              should be as follows:
              <ul>
                <li>Previous Owner Name.</li>
                <li>Current Owner Name.</li>
                <li>Both the parties signed in the documents.</li>
                <li>
                  Stamp paper in compliance with government standards etc.
                </li>
              </ul>
              Ensure to fill all mandatory sections of the document successfully
              without having been overwritten or corrected. Enter details that
              do match with your Aadhaar card. All public organizations are now
              using it to enforce a basic authentication method. Complete the
              application by providing the form along with all the required
              proof documents, such as:
              <ul>
                <li> Patta Transfer Form.</li>
                <li>Land Register/Transaction Papers.</li>
                <li>Identity Proof.</li>
                <li>Address Proof.</li>
                <li>Birth Certificate.</li>
                <li>Encumbrance Certificate (EC).</li>
                <li>Aadhar Card Copy.</li>
                <li>Chalan</li>
              </ul>
              Submit the whole documents to the department concerned and have
              acknowledgment copy. This receipt is very useful for future
              reference where you can verify your application status. The fee
              would be only from Rs. 80 – Rs. 240 based on your clause.
            </p>
            <h3 className="heading">Online Patta transfer procedure </h3>
            <p className="content">
              As mentioned in the subheading itself, we’ll learn how to change
              your Patta name. When the plot or property is sold to another
              individual, possession has to be changed. Currently, the online
              feature is not available. Let’s do possible with the offline
              process by following simple steps stated below:
              <ol>
                <li>
                  {" "}
                  Step #1: Walk into the Tehsildar or Village Administration
                  Officers (VAO) Office near your region.
                </li>
                <li>
                  {" "}
                  Step #2: If you face trouble in finding the nearest office,
                  ask locals or visit District Headquarters.
                </li>
                <li>
                  {" "}
                  Step #3: Approach the inquiry desk and ask for the Patta
                  Transfer form.
                </li>
                <li>
                  Step #4: Once you get the form, you can view just a glimpse of
                  simple specifications to make applicants easier to understand
                  on what details to fill and provide in the form.{" "}
                </li>
                <li>
                  Step #5: Enter all the mandatory fields in the form carefully
                  without any mistakes.
                </li>
                <li>
                  Step #6: Need to enter specific details of currently owned
                  land particulars.
                </li>
                <li>
                  {" "}
                  Step #8: Enclose documents that support the Patta Transfer
                  form.{" "}
                </li>
                <li>
                  Step #9: Submit the form along with supporting documents.{" "}
                </li>
                <li>
                  Step #10: Take the acknowledgment receipt and wait until the
                  process is completed.
                </li>
              </ol>
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
