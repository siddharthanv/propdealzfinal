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
        <h1 className="heading">Simple Mortage</h1>
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
            <h3 className="heading">What is Simple Mortage?</h3>
            <p className="content">
              According to Section 58 of this Act, Mortgage is defined as the
              transfer of an interest in a specific immovable property intended
              to secure the payment of money advanced or to be advanced in the
              form of a loan, a current or future debt, or the performance of an
              engagement giving rise to a pecuniary liability. In simpler terms,
              mortgage can be defined as the transfer of an immovable property
              by its owner to another person/entity for the purpose of securing
              a loan. The property acts as a security for repayment of the loan.
              This term is commonly associated with banks as they commonly keep
              immovable property as mortgage while extending a loan.
            </p>
            <h3 className="heading">Types of Mortgage</h3>
            <p className="content">
              The person who transfers his interest in immovable property is
              called the ‘mortgagor’ while the transferee is called the
              ‘mortgagee.’ The instrument through which a mortgage is effected
              is called a ‘mortgage-deed.’ There are six different types of
              Mortgage-deeds:
            </p>
            <h3 className="heading">Simple Mortgage:</h3>
            <p className="content">
              In this type of mortgage, the mortgagor personally commits to pay
              the mortgage money, with an explicit or implied agreement to
              forfeit the property he has mortgaged to the mortgagee in the
              event of his being unable to pay the loan amount as per the
              contract.
            </p>
            <h3 className="heading">Mortgage by Conditional Sale:</h3>
            <p className="content">
              In this type of mortgage, the mortgagor conditionally sells the
              mortgaged property based on the condition that if he defaults in
              payment of the mortgage money by a particular date, the sale
              becomes absolute. The alternate conditions on which the mortgage
              is made are with regards to the sale becoming void if the payment
              is made, or the transfer of the property to the seller on the
              payment being made.
            </p>
            <h3 className="heading">Usufructuary Mortgage:</h3>
            <p className="content">
              In such a mortgage, the mortgagor explicitly or implicitly
              delivers possession of the mortgaged property to the mortgagee. He
              also authorises the mortgagee to retain possession of the property
              until the mortgaged money is paid back as well as receive rents or
              profits that accrue from the property in lieu of interests towards
              the loan extended.
            </p>
            <h3 className="heading">English Mortgage:</h3>
            <p className="content">
              In this type of mortgage, the mortgagor while binding to pay the
              mortgage amount to the mortgagee by a certain date, facilitates
              the absolute transfer of the property to the mortgagee. However,
              this agreement is subject to the clause that the mortgagee will
              re-transfer the property back to the mortgagor on payment of the
              mortgage money.
            </p>
            <h3 className="heading"> Mortgage by deposit of Title deeds:</h3>
            <p className="content">
              This type of mortgage is specific to mortgagors in specific cities
              like Kolkata, Chennai and Mumbai, besides any other town that the
              State government has specified. In this type of mortgage, the
              mortgagor hands over the documents of title to the immovable
              property as security to the mortgagee, in which case the execution
              of the mortgage-deed is not mandatory. This type of mortgage is
              also known as equitable mortgage as per English law, and is
              commonly used by banks extending loans against mortgage of
              property.
            </p>
            <h3 className="heading">Anomalous Mortgage:</h3>
            <p className="content">
              This type of mortgage is an irregular mortgage that is not covered
              under any of the above categories. It includes a simple mortgage
              usufructuary as well as a mortgage usufructuary by conditional
              sale. In this type of mortgage, possession of property by the
              mortgagee may or may not be delivered.
            </p>
            <h3 className="heading">Registration of Mortgage:</h3>
            <p className="content">
              It is not mandatory that all types of mortgages should be
              registered. However, with regards to equitable mortgages which are
              created through deposit of title deeds, registration becomes
              mandatory. For all mortgages besides equitable mortgages,
              registration is necessary if the value of the loan secured is more
              than Rs 100.
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
