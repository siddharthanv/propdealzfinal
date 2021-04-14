import React from "react";
import Carousel from "react-material-ui-carousel";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Card, CardActionArea, CardMedia } from "@material-ui/core";
import img from "../../images1/1.png";
import img1 from "../../images1/2.png";
import img2 from "../../images1/3.png";
import img3 from "../../images1/4.png";
import img4 from "../../images1/5.png";
import img5 from "../../images1/6.png";
import img6 from "../../images1/7.png";
import img7 from "../../images1/8.png";
import img8 from "../../images1/9.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 170,
  },
});

export default function PopularServicesCard() {
  const classes = useStyles();
  return (
    <div className="popularServicesCardStyle">
      <Carousel
        animation="slide"
        interval="7000"
        navButtonsAlwaysVisible="true"
      >
        <Grid container spacing={5}>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img1}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img2}`} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img3}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img4}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img5}`} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container spacing={5}>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img6}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img7}`} />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item md={4} sm={12}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img8}`} />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Carousel>
    </div>
  );
}
