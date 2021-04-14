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
import $ from "jquery";
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

function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/10806/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}
function ServicePageFirstContent() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1 className="heading">Lease Deed</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button> */}
              </CardActions>
            </Card>
            <h3 className="heading">What is Lease Deed in India?</h3>
            <p className="content">
              A lease deed is a document or a written contract between the
              property owner or a landlord also known as lessor and the tenant
              or lessee, which contains all the terms and conditions, including
              the rent to be paid, security deposit to be made, etc. A lease
              deed is usually required, when the property is rented out for a
              long period of time. A deed has to be registered, if the lease
              period is for more than 11 months.
            </p>
            <h3 className="heading">
              What are the contents of the lease deed?
            </h3>
            <p className="content">
              <ol>
                <li>
                  Here are some of the important provisions and details that
                  should be listed in a lease deed:
                </li>
                <li>
                  Property details, including area, location, address,
                  structure, furniture and furnishings, if provided.
                </li>
                <li>
                  Lease duration, its validity and provision for its renewal,
                  along with the terms and conditions for its renewal.
                </li>
                <li>
                  Rent, maintenance, security deposit to be paid by the tenant
                  and the due date. Other important provisions, such as interest
                  and penalty on payment delay, should also be mentioned. It
                  should also mention the details of payment to be made by the
                  tenant on a monthly basis, such as electricity charges, water
                  bills or any other utility costs.
                </li>
                <li>
                  Clauses for lease termination should be mentioned in the lease
                  deed, along with other reasons for which the agreement can be
                  cancelled, such as breach of deed, use of property for illegal
                  activities, or failure to pay rent.
                </li>
              </ol>
            </p>
            <h3 className="heading">Why lease deeds are for 99 years?</h3>
            <p className="content">
              When the development authority allots development rights of the
              land to the builder, it is usually for a lease of 99 years. This
              implies that anyone who gets a leasehold land, will own it for 99
              years, after which the ownership is given back to the landowner.
              The long-term leases control the transfer of land and its uses.
              This time span is seen as a safe interval choice, given that it
              will cover the lifespan of the lessee and will safeguard the
              ownership of the lessor.
            </p>
            <h3 className="heading">Is lease deed registration mandatory?</h3>
            <p className="content">
              According to the Registration Act, 1908, any property being leased
              for residential, commercial, cultivation, hereditary allowances,
              or fisheries purpose, should be registered, if they are being
              leased out for more than 11 months. The law is applicable to all
              states, (except Jammu and Kashmir). A lease dead that lasts only
              for 11 months does not require registration..
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
