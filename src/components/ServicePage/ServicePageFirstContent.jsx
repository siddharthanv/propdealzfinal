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
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import $ from "jquery";

const useStyles = makeStyles({
  // root: {
  //   maxWidth: 345,
  // },
  media: {
    height: 170,
  },
});

function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/10806/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Form Data Submitted :)");
    },
    error: function () {
      alert("There was an error :(");
    },
  });
}
function ServicePageFirstContent() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <h1>PROPRIETORSHIP REGISTRATION</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="/static/images/cards/contemplative-reptile.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
            <h3>What is Sole Proprietorship in India?</h3>
            <p>
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
            <h3>Who is a Sole Proprietor?</h3>
            <p>
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
            <Card className="width80">
              <CardContent>
                <h1 className="ContactUsCardHeading">CONTACT US</h1>
                <Box>
                  <TextField
                    id="name"
                    label="Name"
                    // InputLabelProps={{
                    //   shrink: true,
                    // }}
                    variant="outlined"
                    className="width100"
                  />
                </Box>
                <Box>
                  <TextField
                    id="tel"
                    label="Mobile"
                    //   InputLabelProps={{
                    //     shrink: true,
                    //   }}
                    variant="outlined"
                    className="width100"
                  />
                </Box>
                <Box>
                  <TextField
                    id="name"
                    label="Email"
                    //   InputLabelProps={{
                    //     shrink: true,
                    //   }}
                    variant="outlined"
                    className="width100"
                  />
                </Box>
              </CardContent>
              <CardActions style={{ width: "100%", textAlign: "center" }}>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ width: "80%", marginBottom: "20px" }}
                  onClick={SubForm}
                >
                  Submit
                </Button>
              </CardActions>
            </Card>
            <h3>RELATED LINKS</h3>
            <ul style={{ listStyleType: "none" }}>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
              <li>
                <a style={{ textDecoration: "none" }} href="/">
                  link text
                </a>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ServicePageFirstContent;
