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
        <h1 className="heading">Release Deed</h1>
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
            <h3 className="heading">What is Release Deed in India?</h3>
            <p className="content">
              A deed of release refers to a legal document that eliminates a
              claim previously made on an asset. It helps with the documentation
              of release from a mandatory agreement. The deed may be included
              when a homeowner receives the title of a property from the lender
              upon satisfactory completion of mortgage payments. The goal of a
              deed of release is to release the parties from past obligations.
            </p>
            <h3 className="heading">How a Release Deed Works</h3>
            <p className="content">
              The majority of individuals buy their homes with the help of
              mortgages provided by a financial institution – such as central
              banks, internet banks, commercial banks. When a financial
              institution lends money to the borrower, it takes a legal claim
              against the house as collateral until the loan is completely paid
              off. Once the loan is paid off and all the terms of the mortgage
              are satisfied, a mortgage deed of release is created. Until then,
              the lender holds the title of the property and after the final
              payment is made, the title of the property is transferred to the
              borrower of the mortgage. The title is secured collateral for the
              life of the loan, reducing the default risk of the lender. The
              financial institution’s legal department creates the deed of
              release after the loan obligations have been satisfied. The deed
              of release reports that the loan has been paid in full under the
              contractual terms. It also declares that there has been a transfer
              of title for the property from the lender to the homeowner. After
              the creation of a deed of release and the transfer of the title,
              the homeowner is under no obligation to the lender. The borrower
              of a loan needs to prepare a deed of release with the same agency
              that recorded the mortgage to be sure that all mortgage
              obligations are removed.
            </p>

            <h3 className="heading">The Use of a Deed of Release</h3>
            <p className="content">
              A deed of release is used to end an agreement or dispute and to
              make sure that no party can continue with the dispute or
              agreement. For example, when a commercial dispute is resolved with
              another party, both parties will need to formulate a deed of
              release. Once a settlement is reached, it is important to draft a
              deed of release to ensure that the other party cannot issue legal
              proceedings against the other parties. Therefore, a deed of
              release provides conclusive evidence following the end of a
              dispute or agreement. However, a release deed can limit legal
              actions. Therefore, it is important to understand the rights given
              up by a party before signing a deed of release.
            </p>
            <h3 className="heading">Types of deeds of release:</h3>
            <p className="content">
              <b>The following are different types of deeds of release:</b>
              <ul>
                <li>
                  Ending a personal guarantee is a deed of release that allows
                  an individual to end personal guarantee and personal
                  liability. .
                </li>
                <li>
                  An employee deed of release is part of the employment
                  contract. It relates to the termination agreement, redundancy
                  agreement, or is part of a settlement between an employee and
                  employer. .
                </li>
                <li>
                  Termination of a credit agreement or loan involves ending a
                  mortgage or loan agreement. .
                </li>
                <li>
                  {" "}
                  Resolving a commercial dispute is often in relation with a
                  deed of settlement
                </li>
              </ul>
            </p>
            <h3 className="heading">Features of a Deed of Release</h3>
            <p className="content">
              A common feature of a deed of release is a mutual release, which
              involves both parties agreeing to release each other from the
              following obligation:
              <ul>
                <li>Demands.</li>
                <li>Debts.</li>
                <li>Future claims.</li>
                <li>
                  Other relevant actions On the other hand, a release deed may
                  allow one party to be free from certain obligations or
                  liabilities – such as a clause preventing that party’s future
                  services or employment.
                </li>
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
