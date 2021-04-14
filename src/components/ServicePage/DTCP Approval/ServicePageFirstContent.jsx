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
        <h1 className="heading">DTCP Approval</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">DTCP Approval</h3>
            <p className="content">
              The Chennai Metropolitan Development Authority (CMDA) and
              Directorate of Town and Country Planning (DTCP) are the nodal
              agencies responsible for issuing land layout approvals in Tamil
              Nadu. The jurisdiction of the CMDA is confined to Chennai and its
              peripheral areas. DTCP jurisdictions are confined to all other
              parts of the State. Approval for layouts up to 10 acres (increased
              from 5 acres) is accorded by the Local Planning Authority (LPA), a
              sub-committee of the DTCP. Layout approvals over 10 acres are
              sanctioned by the head office of the DTCP in Chennai. There is no
              adequate legal awareness among the general public with respect to
              Panchayat layouts. In fact, there is no terminology called
              ‘Panchayat Approval’ as only LPA’s and the DTCP have the authority
              to accord layout sanctions. The panchayat president of any
              panchayat does not have any power to sanction land layouts within
              that respective panchayat.<br></br>
              <b>
                Conditions for granting<br></br>
                layout approvals:
              </b>
              <ol>
                <li>
                  An NOC from the Tahsildar stating that it is not a poromboke
                  land, that it is not covered under Land Reforms Act of 1961,
                  Land Ceiling Act of 1978, and that the site will not be
                  affected by floods, if any, during the monsoon.
                </li>
                <li>
                  Documents from the Tahsildar highlighting FMB/Town Survey
                  Sketch, patta/chitta/town survey land records, ‘A’ register
                  extract; village map copy, details of any water flowing
                  through the site.
                </li>
                <li>
                  For sites exceeding 2,500 sq.m., a site plan ensuring 10 per
                  cent reservation for Open Space Reservation (OSR) land is a
                  must.
                </li>
                <li>
                  If an electric/telephone line passes through the site, an
                  undertaking should be produced for its realignment.
                </li>
                An NOC from the concerned department is mandatory if the site
                lies within a distance of:
                <ul>
                  <li>
                    15 metres from water bodies (PWD or concerned department).
                  </li>
                  <li>30 metres from a railway line (Railways).</li>
                  <li>90 metres from a compost yard (local body).</li>
                  <li>
                    90 metres from a burial ground/ crematorium (Health
                    Officer).
                  </li>
                  <li>300 metres from a quarry (AD, Mines).</li>
                  <li>500 metres from a crusher (AD, Mines).</li>
                  <li>
                    500 metres from an airport (Airport Authority of India).
                  </li>
                </ul>
                <li>Topo layout plan.</li>
                <li>
                  Land layouts sanctioned by the CMDA from the year 2000 can be
                  verified online on the CMDA website www.cmdachennai.gov.in.
                  Similarly, land layouts sanctioned by the DTCP from the year
                  2011-2012 can be verified online on the DTCP website
                  www.tn.gov.in/tcp/.
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
