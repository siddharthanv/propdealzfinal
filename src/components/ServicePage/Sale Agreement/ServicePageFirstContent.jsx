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
import ContactUS from "../../ContactUs";
import Links from "../../Links";

import img from "../../../images1/sample.png";

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
        <h1 className="heading">Sale Agreement</h1>
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
            <h3 className="heading">SALE AGREEMENT</h3>
            <p className="content">
              Whether one is purchasing a plot for construction of a house or an
              apartment from a builder, the sale agreement is an important
              document that he will need during the process of purchasing a
              property, informs Mr Jagannaathen, managing director of Vintage
              Wealth Managers (India) Private Ltd. He shared his valuable
              insights on the same. Here are the excerpts of the discussion. Are
              there different types of agreement for different property type:
              plots, apartments and villa? Yes, each of this Property type has
              different type of agreement, based on the deliverable from the
              Developer. In each of the category, the finer points to be noted
              in the agreement are:<br></br>
              <b>Plot – Agreement of Sale:</b>
              <br></br>
              <ul>
                <li>Total extent of Land that is being developed.</li>{" "}
                <li>
                  Surrender of the Common Areas, like Road, Pavement, Facilities
                  etc., that is part of the overall project.
                </li>{" "}
                <li>
                  Builder is authorised to sell only 55% of the overall land,
                  this is a stipulation by BBMP & BDA.
                </li>{" "}
                <li>
                  Cancellation Claus – should have specific time limit for
                  refund of the payment in event of Cancellation.
                </li>
                <li>
                  Registration is allowed by BBMP only upon release of Khata for
                  the specific plot – this is done by BBMP to ensure all
                  approved works in the Plot is completed by the Developer
                  before registration.
                </li>{" "}
                <li>
                  Hence the BBMP releases Khata periodically, based on
                  completion of the work in the Project.
                </li>
              </ul>
              <b>
                Apartment – Sale & Construction Agreements followed by Sale
                Deed:
              </b>
              <ul>
                <li>Extent of Undivided Share.</li>{" "}
                <li>Likely time for construction.</li>{" "}
                <li>
                  Pricing divided into Sale Value for UDS & Cost for
                  Construction.
                </li>{" "}
                <li>
                  Delayed payment charges & rewards for timely payments
                  (incentivized by some Builders).
                </li>
                <li>
                  Cancellation Clause – should have clear indication of the
                  cancellation charges.
                </li>{" "}
                <li>
                  Villas – apart from all of the above, it should have clear
                  indication of the Land extent & if the same is being sold as
                  UDS or separate Plot plus Construction.
                </li>
              </ul>
            </p>

            <h3 className="heading">
              What are the factors that one should check in the Sale Agreement
              while buying in secondary sale?
            </h3>
            <p className="content">
              Resale of Property can be done in 2 different types:{" "}
              <ol>
                <li> Post registration of Property:</li>
                <li>
                  Before registration of Property – by way of Assignment of
                  rights by the Allotment/Agreement Holder in favor of the New
                  Buyer, with due consent from the Builder, by which the
                  registration happens directly from the Builder to the New
                  Buyer Hence the first the above needs to be established,
                  before proceeding with the transaction. Points to be noted in
                  case of
                </li>
              </ol>
              <b>Registered Resale:</b>
              <ul>
                <li>
                  {" "}
                  Registration done by actual Buyers or thru POA, if thru POA,
                  same needs to be verified.{" "}
                </li>
                <li>
                  If any loan is outstanding against the property – can be
                  confirmed with the EC.{" "}
                </li>
                <li>
                  {" "}
                  At the time of signing the LOI, Originals needs to be
                  verified, if the property does not have loan. May not be done
                  at Agreement stage, in case of Sellers not from Bangalore.{" "}
                </li>
                <li>
                  {" "}
                  If Originals cannot be verified, a Certified copy of the Sale
                  Deed (proof of Ownership) can be obtained from the Registrar
                  Office.
                </li>
                <li>
                  {" "}
                  Physical inspection of the apartment, to ensure all points
                  pertaining to any structural issues can be addressed in the
                  agreement.
                </li>
              </ul>
            </p>
            <b> Documents to be received from Seller (all in Originals):</b>
            <ol>
              <li>
                {" "}
                Sale & Construction Agreement (entered into between the Builder
                & the First Owner of the Property).{" "}
              </li>
              <li>
                {" "}
                Sale Deed (from the first sale from builder till the last sale
                from the present Seller).
              </li>
              <li>
                If ownership in between is changed, property supporting
                documents for the same – e.g. – in case of transfer sale in
                first sale from Builder – can be verified by checking the names
                in the First Sale Deed & the Sale and Construction Agreement.
              </li>
              <li>
                {" "}
                Khata Certificate, Extract, Utrapatrika – wherever applicable .
              </li>
              <li>
                {" "}
                Upto date Tax paid Challans – should include the financial year
                in which the sale is made – but can be borne pro-rata between.
              </li>
            </ol>
            <b>Buyer & Seller:</b>
            <ul>
              <li>POAs where applicable. </li>
              <li>
                {" "}
                Copy of Title Deed for the property as a whole, as provided by
                the Builder to the first Registered Owner of the property, which
                should mandatorily include the Occupancy Certificate.
              </li>
            </ul>
            <b>Unregistered Resale:</b>
            <ul>
              <li>
                {" "}
                Confirmation from Sale & Construction Agreement, as well as
                updated statement of account from Builder to ensure no dues is
                left with Builder.
              </li>
              <li>
                {" "}
                If the transaction is done, where-in dues are payable over a
                period of time post the transfer, as the property is still to be
                constructed, clear confirmation of from when the dues are
                payable by the Buyer is to be established.
              </li>{" "}
              <li>
                {" "}
                For the purpose, the parties Seller & Buyer should enter into an
                MOU, based on which the Builder will prepare Assignment Deed
                (could be tripartite).{" "}
              </li>
              <li>
                {" "}
                Once the assignment is completed, fresh statement of account
                should be sought from the Builder to verify if the new Buyer’s
                name is captured in the Builder’s system – a double
                verification/confirmation of the transfer.
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
