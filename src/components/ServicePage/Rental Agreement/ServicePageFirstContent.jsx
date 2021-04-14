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
        <h1 className="heading">Rental Agreement</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is Rental Agreement?</h3>
            <p className="content">
              A contract between a landlord and tenant, whereby the former gives
              the latter the right to occupy a home or residential premises for
              a certain period, is termed as a rental agreement. It is one of
              the most vital documents for both parties to avoid future
              disputes. At a time when tenancy disputes are growing by leaps and
              bounds, it is of the utmost importance to secure a property by
              drafting a thorough rent/lease agreement and further, registering
              the agreement at the nearest sub-registrar’s office. Registering a
              rental agreement makes it legally binding and safeguards the
              rights of both parties in case of future conflicts. A rental
              agreement can be verbal, written or implied. However, a written
              agreement serves as evidence and summarises the terms and
              conditions mutually-accepted by both parties. Once both the
              parties agree to the terms and conditions mentioned in the
              agreement, it cannot be altered without their mutual consent.
            </p>
            <h3 className="heading">
              Why should you register a rent agreement?
            </h3>
            <p className="content">
              A registered rental agreement is vital for a discord-free
              landlord-tenant relationship. Not only does it foster the
              relationship between the two parties but also protects their
              rights. Further, it informs others about the ownership of the
              property. The landlord/tenant should never settle for an oral
              agreement since it is not bound by law and therefore, should
              always insist on executing a written agreement. Another key
              benefit of registering a rental agreement is that it acts as legal
              evidence and can protect the landlord from any legal dispute in
              the future. When a deal involves a significant asset such as a
              residential property, the landlord needs a document that protects
              him/her legally in case of any dispute or opposition from the
              other party in the future.
            </p>
            <h3 className="heading">When to register a rent agreement?</h3>
            <p className="content">
              According to the Registration Act, 1908, applicable to all States,
              (except Jammu and Kashmir), a ‘lease’ includes all entities such
              as residential property, commercial property, undertaking leased
              for cultivation, hereditary allowances, fisheries, ferries, rights
              to ways, lights and any other benefit arising out of the land
              (excluding timber or crops cultivation). All these properties
              should be registered if they are leased out to a tenant for a
              period of more than 11 months. A rent agreement that lasts only or
              lesser than 11 months does not require registration. It is also
              prudent here to add that while it is not mandatory to register
              rent agreements having durations of lesser than a year, it is
              still advantageous and proactive. A large number of disputes
              regarding the legitimacy of 11-month rent agreements have taken
              place in various High Courts and the Supreme Court of India, where
              in some instances, 11-month agreements have been deemed as
              inadmissible in court. Therefore, future disputes are not worth
              the savings of stamp duty and registration cost by not getting a
              rent agreement registered.
            </p>
            <h3 className="heading">How to register the rent agreement?</h3>
            <p className="content">
              Visit the nearest sub-registrar’s office for registration.
              However, it is important to keep track of the time when the deed
              was created. The registration must be made at least four months
              before the date of deed expiration. After this, a fresh deed has
              to be created. This is applicable to all legal documents mandating
              registration barring a property will. To register the deed, both
              the parties - the tenant and the landlord. should be present along
              with two witnesses for attestation. If both the parties are not
              present at the same time, he/she must sign the Power of Attorney,
              granting attorney the rights of agreement closure.
            </p>
            <h3 className="heading">
              What are the documents required for rent agreement registration?
            </h3>
            <p className="content">
              <ul>
                <li>
                  The original proof/evidence of ownership or title of the
                  property.
                </li>
                <li>
                  Property documents such as Index II or tax receipt of the
                  property to be leased.
                </li>
                <li>
                  {" "}
                  Two photographs of each of the parties and one of each of the
                  witnesses.
                </li>
                <li>
                  Copy of the address proof of both the parties and witnesses.
                  Passport, Aadhar Card, Ration Card, Bank Passbook or Driving
                  License; any of them can be submitted as the address proof.{" "}
                </li>
                <li>Route map of the property leased out.</li>
              </ul>
            </p>
            <h3 className="heading">What are the registration charges?</h3>
            <p className="content">
              Registration charges vary per state. Stamp duty charges are also
              applicable. These too vary per State. For instance, in Delhi,
              stamp duty charges for a property rented out for a period of 5
              years is 2 percent. Similarly, a 3 percent stamp duty is levied on
              properties leased out for more than 5 years but up to 10 years.
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
