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
import Links from "../../Links";

import img from "../../../images1/sample.png";
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
        <h1 className="heading">Gift Deed</h1>
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
            <h3 className="heading">What is Gift Deed in India?</h3>
            <p className="content">
              A gift deed is an agreement that is used, when a person wishes to
              gift his property or money to someone else. It can be a moveable
              or immovable property that is gifted voluntarily, from the donor
              to the donee. A gift deed allows the property owner to gift the
              property to anyone and avoids any future dispute arising out of
              succession or inheritance claims. A registered gift deed is also
              evidence in itself and unlike in the case of a will, the transfer
              of property is instant and you will not be required to go to the
              court of law for its execution and hence, it also saves time.
            </p>
            <h3 className="heading">What gifts require a gift deed?</h3>
            <p className="content">
              A movable property, or immovable property, or an existing property
              that is transferable, can be gifted and require a gift deed.
              Having a gift deed registered, will help you avoid any litigation
              that comes up thereafter.
            </p>
            <h3 className="heading">How to draft a gift deed?</h3>
            <p className="content">
              <b>A gift deed must include the following details:</b>{" "}
              <ul>
                <li>Place and date on which the deed is to be executed. </li>
                <li>
                  {" "}
                  Relevant information regarding the donor and the donee, such
                  as their names, address, relationship, date of birth and
                  signatures.
                </li>
                <li>Complete details about the property.</li>
                <li>
                  Two witnesses to bear testimony and their signatures.
                  Thereafter, depending on the value determined by the state
                  government, the gift deed must be printed on stamp paper after
                  paying the required amount and the deed should be registered
                  at the registrar or sub-registrar’s office.
                </li>
              </ul>
            </p>
            <h3 className="heading">
              Important clauses to mention in a gift deed
            </h3>
            <p className="content">
              Here are some important things that should be mentioned in the
              gift deed.<br></br>
              <b>There’s no money or force involved</b>
              <p className="content">
                Make sure that you add this consideration clause to the gift
                deed. It must be indicated that there is no exchange of money
                and that the gift deed is made solely out of love and affection
                and not due to money or coercion.
              </p>
              <b>You are the owner of your property when you gift</b>
              <p className="content">
                Only the owner can gift a property. If you are not the owner
                (title holder) of the property, you cannot gift it to someone
                else, even in anticipation
              </p>
              <b>Describe the property</b>
              <p className="content">
                All information pertaining to the property, such as the
                structure, type of property, address, area, location, etc., must
                be mentioned.
              </p>
              <b> Relationship between the donor and the donee</b>
              <p className="content">
                If the donor and donee are blood relatives, some state
                governments may offer a concession on stamp duty. Even
                otherwise, it is important to establish the relationship between
                the donor and donee.
              </p>
              <b>Mention liabilities</b>
              <p className="content">
                If there are rights or liabilities attached to the gift, such as
                whether the donee can sell or lease the property, etc., such
                clauses should be mentioned.
              </p>
              <b>Delivery clause</b>
              <p className="content">
                This mentions the expressed or implied action of delivery of
                possession of the property.
              </p>
              <b>Revocation of the gift</b>
              <p className="content">
                The donor can also mention clearly if he/she wants a revocation
                clause to be adhered to the gift deed by the donee. Both, the
                donor and donee, must agree on this clause.
              </p>
            </p>

            <h3 className="heading">
              Documents required to register a gift deed
            </h3>
            <p className="content">
              Apart from the aforementioned documents, you will need to produce
              the original gift deed, as well as ID proof, PAN card, Aadhaar
              card, the sale deed of the property, as well as other documents
              pertaining to other agreements regarding this property.
            </p>
            <h3 className="heading">Can I revoke a gift deed?</h3>
            <p className="content">
              After the property has been gifted, lawfully, it becomes the
              donee’s and cannot be revoked easily. However, according to
              Section 126 of the Transfer of Property Act, 1882, revoking of a
              gift may be allowed under certain circumstances:{" "}
              <ol>
                <li>If the gift deed was made due to coercion or fraud.</li>
                <li>
                  If it is determined that the grounds were immoral,
                  illegitimate or reprehensible.
                </li>
                <li>
                  If it was agreed upon from the beginning that the gift deed is
                  revocable under certain circumstances. In such cases, even in
                  the event of the death of the donor, his legal heirs can go
                  ahead with the revocation.
                </li>
              </ol>
            </p>
            <h3 className="heading">Income tax on gift deed</h3>
            <p className="content">
              Gifts have to be declared in the Income Tax Returns (ITR). In
              1998, the Gift Tax Act of 1958 was abolished, only to be
              reintroduced in 2004. Therefore, in case you have been gifted an
              immovable property, you will have to pay tax, if its stamp duty
              value exceeds Rs 50,000 and if the property is received without
              necessary consideration. For example, if the consideration is Rs
              1.5 lakhs while the stamp duty was Rs 4 lakhs, the difference
              between the two exceeds Rs 50,000.
            </p>
            <h3 className="heading">Tax exemption for gift of property</h3>
            <p className="content">
              If the property has been received from any of the following, then,
              the above clause shall not apply and the donee will not be taxed:
              <ul>
                <li>
                  If received from relatives by an individual and from a member
                  by a HUF.{" "}
                </li>
                <li>
                  {" "}
                  If received on the occasion of the marriage of the individual.
                </li>
                <li>If received under a will or by way of inheritance.</li>
                <li>
                  If received in contemplation of death of the payer or donor.
                </li>
                <li>
                  {" "}
                  If received from a local authority (as defined in Explanation
                  to Section 10(20) of the Income-tax Act).
                </li>
                <li>
                  If received from any fund, foundation, university, other
                  educational institution, hospital or other medical
                  institution, any trust or institution referred to in Section
                  10(23C).{" "}
                </li>
                <li>
                  If received from a trust or institution registered under
                  Section 12AA.
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
