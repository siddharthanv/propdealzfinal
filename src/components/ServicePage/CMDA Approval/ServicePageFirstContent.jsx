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
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {},
  media: {
    height: " 277px",
  },
});

function ServicePageFirstContent() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1 className="heading">CMDA Approval</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
              </CardActionArea>
            </Card>
            <h3 className="heading">CMDA Approval</h3>
            <p className="content">
              CMDA stands for Chennai Metropolitan Development Authority. CMDA
              is a statutory organization of the Tamil Nadu Government. The
              responsibility of CMDA is to regulate physical developments within
              the Chennai metropolitan area. For this purpose, CMDA has already
              prepared a master plan that designates the permission for the use
              of land in every part of the Chennai metropolitan area.
            </p>
            <h3 className="heading">
              What are the Powers & Functions of CMDA?
            </h3>
            <p className="content">
              CMDA has a specific set of functions & responsibilities that are
              listed down below.
              <ul>
                <li>
                  First, CMDA surveys the Chennai Metropolitan area which is
                  under its control. This is usually done by preparing a report
                  for each area & the survey is carried out.
                </li>
                <li>
                  The CMDA is the sole authority that prepares maps that
                  supports in the planning of the city.
                </li>
                <li>
                  The plans for development if also prepared by the CMDA that
                  includes the master plan as well.
                </li>
              </ul>
              <b>The perks that the power of CMDA enjoys being,</b>
              <ul>
                <li>
                  Designating any part of the territory within its jurisdiction
                  as a new town.
                </li>
                <li>
                  The authority can also nominate any other body to carry out
                  specific planning functions on its behalf.
                </li>
              </ul>
            </p>
            <h3 className="heading">
              What are the Guidelines & Norms set by CMDA for execution of
            </h3>
            <p className="content">
              {" "}
              Planning Permission? The new streamlined procedure ensures you get
              the planning permission extremely easy & early.
            </p>
            <h3 className="heading">What is a Planning Permission?</h3>
            <p className="content">
              It is an obligation for any developer/real estate builder to
              obtain permission for further development on the site/plot. Before
              undertaking any development on the plot, you have to obtain
              Planning Permission (PP) from the CMDA. This is a must under the
              Town and Country Planning Act. This permission is valid for 3
              years from the date of issue. In case of buying CMDA approved
              plots in Chennai from builders/real estate developers in Chennai,
              then there is no need to apply by your own as it would be done for
              you by the developer itself.
            </p>
            <h3 className="heading">Why is CMDA important for plots/land?</h3>
            <p className="content">
              For a proper planning/development to take place in a city, it is
              extremely important to constitute a competent authority by
              overseeing the structures & observing the guidelines. This in fact
              helps to form a better course of action for the future. People
              will vouch for a CMDA approved plot considering that it is legal.
              Though CMDA Approval process is a bit stringent compared to DTCP,
              the value of CMDA Plots seem to have a high appreciation in the
              future as it comes under the city limits. Likewise, Eternity villa
              plots is located in Thirumazhisai is CMDA approved, which means
              you are buying a plot within Chennai city limits that yields high
              value in the future.
            </p>
            <h3 className="heading">
              What is the power of a CMDA approved plot?
            </h3>
            <p className="content">
              An approved plot is one that is verified by the CMDA. Basically,
              it means that the plot can be used for further real estate
              transactions and the owner can modify/make changes to the plot
              according to his/her wishes.
            </p>
            <h3 className="heading">Benefits of CMDA Approved Plots</h3>
            <p className="content">
              <ul>
                <li>
                  The DTCP & CMDA Approval carry the advantage of owning a
                  plot/land that can be used for a specific purpose which is
                  designated by the planning authority.
                </li>
                <li>
                  The major benefit of DTCP or CMDA approval is the entitlement
                  for getting building approval. This can also be an assurance
                  that the building cannot be demolished without any proper
                  procedure laid out for the approved layouts.
                </li>
                <li>
                  The demolition of buildings developed on CMDA approved
                  plots/land is quite uncommon as it is not encouraged without
                  any strong legal justification. This benefit is not available
                  in the unapproved plots/layouts.
                </li>
                <li>
                  The value of property will substantially increase if the
                  approval is sought and this will in fact increase the resale
                  value.
                </li>
                <li>
                  Investors can buy DTCP approved plots in the developing areas,
                  which is devoid of proper infrastructural development.
                  Whereas, CMDA plots comes under the city limits, you are
                  buying an asset in a sound infrastructure with schools, global
                  companies, metro & flyovers around the location.
                </li>
                <li>
                  The scope of transparency in land/plots transaction is
                  increased and resale is also made easier.
                </li>
                <li>
                  The Banks also will approve loans or fund building
                  construction or renovation only when the land is approved.
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
