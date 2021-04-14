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
import ContactUs from "../../../components/ContactUs";
import Links from "../../Links";

import img from "../../../images1/sample.png";

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
        <h1 className="heading">Sale Deed</h1>
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
            <h3 className="heading">What is Sale Deed in India?</h3>
            <p className="content">
              A sale deed is a legal document used in property transactions as
              evidence for sale and transfer of ownership of property in favour
              of the buyer from the seller. A sale deed, also known as the final
              deed or conveyance deed, is an instrument in writing which legally
              transfers the ownership rights of a property from one person to
              another in exchange of a price paid/consideration. It is made for
              the sale or purchase of land or any construction made on it. The
              person who transfers the property is known as the transferor or
              the seller while the person in whose name the property is
              transferred is called the transferee or the buyer. The document
              lays down the details of the parties, the final deal price of the
              property, the accepted mode of payment and the time for handing
              over the possession of the property along with the original
              documents. It also acts as proof that the buyer is the outright
              owner of the said property.
            </p>
            <h3 className="heading">
              How is a sale deed different from a sale agreement?
            </h3>
            <p className="content">
              A sale agreement of immovable property is different from the sale
              deed for the same property. In simple words, the sale agreement of
              a property is a contract stating that a sale of such property
              shall happen on the terms as agreed upon by the parties. It
              specifies the terms and conditions, under which the property (to
              be sold) will be transferred. So, a sale agreement basically,
              contains a promise to transfer a property in future, after
              compliance with specific terms and conditions. It does not develop
              or establish any rights or interest in the property for the
              prospective buyer.
            </p>
          </Grid>
          <Grid item xs={5}>
            <Grid item>
              <ContactUs />
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
