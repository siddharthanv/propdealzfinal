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
        <h1 className="heading">Manual EC/ Computer EC</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is Manual EC/ Computer EC?</h3>
            <p className="content">
              An Encumbrance Certificate (EC) is an important document used as a
              proof of free-title/ownership of a property. The document is
              required when buying or selling a property or when apply for home
              loan or loan against property to verify that the concerned
              property is free of any monetary or legal liabilities.
            </p>
            <h3 className="heading">
              Why is Encumbrance Certificate Important?
            </h3>
            <p className="content">
              The importance of an Encumbrance Certificate is expressed in the
              following points:
              <ul>
                <li>
                  Buying a property is a huge investment making it important for
                  buyers to check for any encumbrances as it may transfer to
                  them along with the property ownership. Getting “Encumbrance
                  Certificate” of a property gives a buyer assurance of the fact
                  that the property does not have any financial or non-financial
                  liabilities such as liens, outstanding loans and leases.
                </li>
                <li>
                  Since the document is also furnished at the time of loan
                  against property and home loan application, it is important
                  that buyers obtain the document to not only to secure the
                  legal title of the property but also to ensure that the buyer
                  will be eligible for the loan.
                </li>
                <li>
                  Other scenarios where the Encumbrance Certificate might be
                  required are:
                  <ul>
                    <li>
                      To get mutation of property (Patta) done, the documents is
                      submitted.
                    </li>
                    <li>
                      If the concerned property or land tax is not paid for more
                      than 3 years, the certificate is provided to the Village /
                      Panchayat Officer to update the land tax records
                    </li>
                    <li>
                      To withdraw PF for a property purchase or house
                      construction.
                    </li>
                  </ul>
                </li>
              </ul>
            </p>
            <h3 className="heading">
              What does an Encumbrance Certificate Include?
            </h3>
            <p className="content">
              An Encumbrance Certificate for a specific time-frame includes the
              list of all registered transactions related to the property that
              took place during the requested time-frame. Individuals can get
              Encumbrance Certificate of a property for up to a period of 30
              years. Note that, if you are asking an EC for a particular period,
              you will get the details only for that period and not more. The
              details will be given from the entries available in the register
              available with the sub-registrar.
            </p>
            <h3 className="heading">
              What are the Different Types of Encumbrance Certificate?
            </h3>
            <p className="content">
              The Encumbrance Certificate is usually issued in 2 forms – Form 15
              & Form 16.
              <ol>
                <li>
                  Form 15 – The ‘Form 15’ is issued when the property has any
                  encumbrance during the said period. It includes information
                  such as the nature of the encumbrance such as gift, partition,
                  lease and loan, the parties involved, the registered number of
                  the document and other details in a date-wise manner
                </li>
                <li>
                  Form 16 – The ‘Form 16’ or ‘Nil Encumbrance Certificate (NEC)‘
                  is issued when the property does not have any encumbrance
                  during the said period. Note: While an Encumbrance Certificate
                  contains all transaction details related to a property,
                  however, it may not be enough to prove the ownership of the
                  property. Therefore, it is wise for buyers to obtain a
                  Possession Certificate along with an EC.
                </li>
              </ol>
            </p>
            <h3 className="heading">
              How Long Does it Take to Get an Encumbrance Certificate?
            </h3>

            <p className="content">
              As mentioned earlier, the process to obtain an EC differs from one
              place to another. If you apply for an EC in person at a
              Sub-Registrar’s Office, you will get the certificate within 15 to
              30 days. However, if you apply for an EC online, you will get it
              faster. Online applications usually take 2 to 3 working days to be
              processed.
            </p>
            <h3 className="heading">What is Nil Encumbrance Certificate?</h3>

            <p className="content">
              When you apply for an Encumbrance Certificate, you will be asked
              to specify the period for which you need the information. If there
              are no charges placed on the property during the requested period,
              a “Nil Encumbrance Certificate” will be issued. This means that no
              lender has placed a lien on the property during that period.
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
