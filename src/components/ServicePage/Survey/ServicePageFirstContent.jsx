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
        <h1 className="heading">Surveying</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is Surveying in India?</h3>
            <p className="content">
              Don't let the leaking taps or clogged pipes drain your vital
              energy on the plumbing issues. It is very annoying if you find
              leaky or broken taps or for that matter blockage in water supply.
              Get an easy fix to all your plumbing related concerns with
              Lifeasy. You can count on our expert professionals for any
              bathroom fittings, faucet issues, running toilets, common clogs,
              pipe repairs. Lifeasy understand that basic amenities failures not
              necessarily happen between convenient business hours and so we
              provide our expert services right at your{" "}
            </p>
            <h3 className="heading">Who is a Surveying?</h3>
            <p className="content">
              Don't let the leaking taps or clogged pipes drain your vital
              energy on the plumbing issues. It is very annoying if you find
              leaky or broken taps or for that matter blockage in water supply.
              Get an easy fix to all your plumbing related concerns with
              Lifeasy. You can count on our expert professionals for any
              bathroom fittings, faucet issues, running toilets, common clogs,
              pipe repairs. Lifeasy understand that basic amenities failures not
              necessarily happen between convenient business hours and so we
              provide our expert services right at your convenience.
            </p>
            <h3 className="heading">Audit for Surveying</h3>
            <p className="content">
              Don't let the leaking taps or clogged pipes drain your vital
              energy on the plumbing issues. It is very annoying if you find
              leaky or broken taps or for that matter blockage in water supply.
              Get an easy fix to all your plumbing related concerns with
              Lifeasy. You can count on our expert professionals for any
              bathroom fittings, faucet issues, running toilets, common clogs,
              pipe repairs. Lifeasy understand that basic amenities failures not
              necessarily happen between convenient business hours and so we
              provide our expert services right at your convenience.
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
