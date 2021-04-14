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
import $ from "jquery";
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
        <h1 className="heading">Settlement Deed</h1>
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
            <h3 className="heading">What is Settlement Deed in India?</h3>
            <p className="content">
              Settlement deed in terms of immovable property like land/building,
              is a legal document wherein parties settle their differences or
              disputes. Legal Definition states Settlement is a disposition of
              property/properties – whether movable or immovable, as per the
              choice of the owner of the said property/properties. A settlement
              deed for it to be valid has to be brought down in writing and has
              to be registered. Usually the nature of disputes settled through a
              settlement deed are court cases, property division, payments
              settlement. A settlement deed between members of a family is a
              family settlement deed, and most often it is related to the
              division of property. Settlement deed is a legally enforceable
              document and has to be registered. Only those properties can be
              settled which have been self-acquired (properties inherited and
              received through family partition are also considered
              self-acquired properties).
            </p>
            <h3 className="heading">
              Parties to a Settlement Deed and what is conditional or absolute
              settlement?
            </h3>
            <p className="content">
              The party executing the settlement(executants) is called the
              Settlor and the claimant (beneficiary) is called the Settlee. A
              settlement deed can be conditional or unconditional (absolute). In
              case of conditional – the settlor can impose certain conditions
              which the Settlee has to observe/follow such as pay certain amount
              of money to the Settlor every month / every year and non-abiding
              of such a clause will invalidate the Settlement and The Settlor
              has option to Void(Revoke) the Settlement due to non-fulfilment of
              said condition. So a Settlor can insert a clause to this effect
              and enjoy the benefits and life interest for his/her lifetime
              along with their spouse. In case of unconditional/absolute
              settlement, the property gets transferred to the Settlee without
              any conditions and the Settlor cannot revoke the same.
            </p>
            <h3 className="heading">Consideration</h3>
            <p className="content">
              In case of sale, there is monetary exchange involved which is
              basically the consideration for the property bought. In case of
              gift, it is imperative that there is no consideration (no monetary
              exchange for the property) so gifted (only out of love and
              affection). In case of settlements, consideration is not as direct
              as in the case of sale. Love and affection can be considered as
              Consideration for property settled by a Settlor to a Settlee
              (Settlee may be a family member or even non-relative). Settlee can
              even be for Charitable or Religious Trust – wherein mental
              satisfaction is the Consideration, even marriage is consideration
              for a settlement.
            </p>
            <h3 className="heading">Registration of Settlement Deed</h3>
            <p className="content">
              In case of immovable asset like land/building for a settlement
              deed to be valid it has to registered. Along with the settlement
              deed the following have to be presented at the Concerned
              Sub-Registrar’s office – a few of the other documents required are
              the title document (parent document and Patta) in original,
              Encumbrance certificate of the property (till the date of the
              registration), ID proof, Aadhaar proof of the parties – this list
              is not exhaustive and varies on a case-to-case basis depending on
              the property settled and the conditions contained therein the
              settlement deed.
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
