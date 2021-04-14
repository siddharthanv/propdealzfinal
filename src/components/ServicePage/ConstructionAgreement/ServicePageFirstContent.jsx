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
        <h1 className="heading">Construction Agreement</h1>
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
            <h3 className="heading">
              What is Construction Agreement in India?
            </h3>
            <p className="content">
              Construction Agreement is the most important document covering all
              aspects of the transaction to buy an Apartment. So, it should be
              carefully studied before signing. A correctly worded Construction
              Agreement will give no room for doubts. It will go a long way in a
              peaceful and happy enjoyment of the property in the future. The
              Approved Plan should form part of the Construction Agreement. And
              the Construction Activity should start only after Plan Sanction by
              the Authorities The Construction Agreement should contain the
              following essential details The Carpet area, the Plinth area and
              the Super built up area The Carpet area as the name suggests is
              the area inside the flat. The Plinth area or the built-up area is
              the Area of the walls and balcony added to the Carpet area. Super
              Built-up area is the sum total of Plinth Area plus all common
              areas. And the Common Areas are: the lobby, staircase, lift room,
              swimming pool, etc. The Buyer is going to pay for the Super
              built-up area. Therefore, the Construction Agreement should
              mention the Super Built-up area along with the break-up under each
              head.
            </p>
            <h3 className="heading">UDS</h3>
            <p className="content">
              The area of the land, that is the Undivided Share of Land
              associated with your flat.
            </p>
            <h3 className="heading">Specifications</h3>
            <p className="content">
              The Construction Agreement should specify the quality of
              construction. It also should elaborate on the use of materials in
              Constructing the flat.
            </p>
            <h3 className="heading">Facilities</h3>
            <p className="content">
              The details of the the facilities promised by the Builder should
              contain in the Construction Agreement.
            </p>
            <h3 className="heading">Price and Related Issues</h3>
            <p className="content">
              The total value of the flat, the payment mode and the stages of
              payment should clearly mentioned in the Construction Agreement.
              Also, the final handing over date.
            </p>
            <h3 className="heading">Provision for Compensation</h3>
            <p className="content">
              Also the Construction Agreement should state the Compensation or
              damages the Builder should pay. This is in the event of their
              inability to adhere to the schedule.
            </p>
            <h3 className="heading">Completion Certificate</h3>
            <p className="content">
              The Construction Agreement also should contain the Builders
              Undertaking to give the CMDA’s Completion Certificate.
            </p>
            <h3 className="heading">Original Documents</h3>
            <p className="content">
              An undertaking to hand over all the original documents to the
              society once the Building is complete. This should be to the
              Association of flat owners.
            </p>
            <h3 className="heading">No due Certificate</h3>
            <p className="content">
              The Construction Agreement should contain a clause on the payment
              of all taxes and other dues to the governments. Also, the Builder
              should undertake to maintain the building until it’s handing over
              to the Association.{" "}
            </p>
            <h3 className="heading">Extra Works</h3>
            <p className="content">
              Details of full details of any extra facilities/work. This is
              about billing for the extra works for which he charges.
            </p>
            <h3 className="heading">Car Parking</h3>
            <p className="content">
              Various judgments lay down that the builder cannot sell the Car
              Parking area separately to any apartment. If the builder is
              charging separately for this facility that means they are
              increasing the overall rate.
            </p>
            <h3 className="heading">Escalation Clause</h3>
            <p className="content">
              Builders would try to include this clause in the Construction
              Agreement as the prices of construction materials are fluctuating.
              It is better to resist including this clause. It depends upon your
              bargaining strength.
            </p>
            <h3 className="heading">Taking Over</h3>
            <p className="content">
              Ensure while taking over that the flat, that it is in order in all
              respects as per the agreement. At the initial stage itself,
              rectify violations if any. Also, record all pending disputes.
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
