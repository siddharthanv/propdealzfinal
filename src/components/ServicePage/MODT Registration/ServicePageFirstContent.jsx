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
        <h1 className="heading">MODT Registration</h1>
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
            <h3 className="heading">MODT Charges:</h3>
            <p className="content">
              Memorandum for the deposit of title deed or MODT is applicable for
              all home loan borrowers. It is essentially an undertaking given by
              you that you are depositing the title documents of the property
              with the bank at your own free will in return for a loan. For some
              banks, apart from the loan agreement, the undertaking needs to be
              registered and the government levies a stamp duty towards
              registration charges. Stamp duty charges vary from one state to
              the other, but on average, charges of 0.1 percent to 0.2 percent
              of the home loan amount apply. A MODT is a part of the State
              Government requirements and has to be registered in addition to
              the loan agreement and has to be registered at the Sub-Registrar
              Office. It is mandatory in a few states, but not in all states.
              The pledged property is endorsed at the Sub-Registrar office.
            </p>
            <h3 className="heading">
              All You Need to Know About MODT Charges E-Filing
            </h3>
            <p className="content">
              E-filing of notice of intimation in case of mortgage by way of
              deposit of title deed came into effect on April 1, 2013. E-filing
              means the online or electronic filing of notices of intimation of
              mortgage of the property specified in Section 89B of the
              Registration Act, 1908. These amendments have been carried out in
              order to safeguard the interests of banks and society. Earlier,
              the agreement/intimation relating to mortgage by the way of
              deposit of title deed was out of the public domain. Due to this,
              there was scope for fraudulent practices like availing loans from
              multiple banks on the same property or disposing of the property
              which is already mortgaged. Therefore, these amendments have been
              brought with the objective of preventing such frauds.
            </p>
            <h3 className="heading">
              In case of mortgage by way of deposit of title deed done on April
              1, 2013, and after:
            </h3>
            <p className="content">
              <ul>
                <li>
                  If an agreement is executed or signed between the mortgagor
                  and the mortgagee, it has to be compulsorily registered. The
                  usual time limit for registration is four months from the date
                  of execution.
                </li>
                <li>
                  If such an agreement is not executed, then the mortgagor has
                  to file a notice of intimation of such a mortgage. This notice
                  should be filed within 30 days from the date of the mortgage.
                </li>
                <li>
                  When an agreement is executed and registered according to
                  clause (1), then filing of the notice of intimation is not
                  required.
                </li>
                <li>
                  The non-registration of agreement / non-filing of notice of
                  intimation may defeat the legality of the mortgage and cause
                  injury to the interests of parties involved. Any person who
                  fails to file such notice within the prescribed time limit
                  shall be liable for punishment under section 89C of the Act.
                </li>
              </ul>
            </p>
            <h3 className="heading">
              Procedure for the Registration of Agreement
            </h3>
            <p className="content">
              The agreement may be registered with the sub-registrar’s office
              where the mortgaged property is situated. The procedure for the
              registration is the same as for the other documents.
            </p>
            <h3 className="heading">
              How to Cancel the MODT once the debts are cleared?
            </h3>
            <p className="content">
              Typically, it’s the duty of the bank or Housing Finance Company to
              cancel the MODT (Memorandum of Deposit of Title Deed) after the
              closure of the Home Loan. But most banks (mortgagee) in India
              thrust the duty onto the borrowers (mortgagor). So, when
              collecting documents from the bank after the settlement of your
              loan, do not take the MODT. Instead, insist on the bank to cancel
              the MODT and give you a “Deed of Receipt” executed by the
              mortgagee in favor of the mortgagor. However, if they do end up
              pushing it onto you, below are the guidelines on how to do the
              MODT Cancellation.
            </p>
            <h3 className="heading">The documents required are:</h3>
            <p className="content">
              <ol>
                <li>Original MODT.</li>
                <li>NOC certificate.</li>
                <li>Bank representative (Mortgagee – Executant) Office ID.</li>
                <li> Aadhaar Card</li>
                <li>
                  Authorization Letter from the bank that the bank
                  representative is the authorized person for executing the
                  cancellation of MODT (if applicable)
                </li>
                <li>PAN & Aadhar of Borrowers (Mortgagors – Claimant)</li>
                <li> ID (preferably Aadhaar) for 2 Witnesses</li>
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
