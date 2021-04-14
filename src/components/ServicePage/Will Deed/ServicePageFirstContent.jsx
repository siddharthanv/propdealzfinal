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
import { Link } from "react-router-dom";
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
        <h1 className="heading">Partition Deed</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is WILL Deed?</h3>
            <p className="content">
              Will is an important legal document in which the testator mentions
              about the distribution of the assets. However, it is not mandatory
              in India under section 17 of the Registration Act, 1908 (Act), and
              according to section 18 (e). There is no stamp duty payable on
              Will registration. When a person makes a will, he/ she is
              declaring how the assets and properties are disbursed and to whom
              after his/ her death. Of course, the property and assets can’t be
              ancestral, but only self-owned. Registration of will is not
              mandatory, as under the Indian Succession Act, 1925, it’s
              considered to be a personal choice of the testator. However, it’s
              advisable to register it, if its contents are to be abided by
              after the person’s death. In other words, the will’s validity or
              genuineness will be a suspect and difficult to prove if it’s not
              registered.
            </p>
            <h3 className="heading">
              What are the conditions to be satisfied while drafting a will?
            </h3>
            <p className="content">
              The following conditions must be satisfied while drafting a will
              or make a will India-{" "}
              <ul>
                <li>
                  The first condition for making a valid will format is that it
                  must be in written form. The law also requires the words in
                  the will to be clear and intelligible.
                </li>
                <li>
                  {" "}
                  As per section 63 of the Indian Succession Act, 1925, the
                  creator (testator) of the will format must sign/affix his or
                  her mark on the will.
                </li>
                <li>
                  The signature /mark of the creator ( or the signee on his
                  behalf) must be placed in such a way so that it discloses
                  clear intention of the creator to give effect to what is
                  written in the will.{" "}
                </li>
                <li>
                  Section 63 also specifies that 2 or more witnesses should
                  attest to the will. They must have seen the testator (or his
                  authorized signatory) sign/ affix his or her mark on the will.
                  But, a beneficiary of the will should not be included among
                  the witnesses.
                </li>
              </ul>
            </p>
            <h3 className="heading">Procedure for will registration</h3>
            <p className="content">
              Having understood this, let’s look at the procedure for
              registering a will.
              <ol>
                <li>
                  Registration of the will happens at the office of the
                  sub-registrar. One must submit address proof, photographs and
                  the witnesses to sign the will. The witnesses have to bring
                  their photographs and address proofs as well.
                </li>
                <li>
                  {" "}
                  Once the will is drafted, a witness should accompany the
                  testator to the registrar for registration.
                </li>
                <li>
                  Once it’s registered, it can be kept in safe custody with the
                  lawyer or in a bank locker. In addition, the registrars have
                  the authority to keep wills in the deposit. If you select a
                  registrar to safeguard your will, you must apply the will in a
                  sealed cover. After confirming the identity of the testator or
                  the authorized person, the register will keep on the will.
                </li>
                <li>
                  If you want to withdraw the will from the registrar, you can
                  personally send your request or do it through an authorized
                  agent. If the registrar is satisfied, they will be delivered
                  to the person.
                </li>
                <li>
                  In case you want to revise or modify certain clauses in your
                  will, it can be done through Codicil, a document enlisting the
                  amended parts of the will. It is then attested by the testator
                  in the presence of two witnesses and kept along with the will
                  with the registrar.
                </li>
                <li>
                  If the person whose will is with the Registrar dies, any
                  person may apply to the Registrar for the opening of the cover
                  containing that will. However, the registrar will only open
                  the cover after confirming that the testator is dead. They
                  open the cover in the applicant’s presence and also provide a
                  copy of the will to them. The original will remain in the
                  Registrar’s custody until a court orders them to produce the
                  original will.
                </li>
              </ol>
            </p>
            <h3 className="heading">Advantages of Registering a Will</h3>
            <p className="content">
              <ol>
                <li>The will cannot be tampered, destroyed, lost or stolen.</li>
                <li>The will is kept in safe custody by the registrar.</li>
                <li>
                  {" "}
                  No person can access or examine the will without the express
                  permission in writing of the testator until his/ her death.
                </li>
                <li>
                  If a registered will is uncontested, it may be possible to get
                  the leasehold property mutated in the name of the legal heirs
                  without obtaining a probate of the will. Disadvantages of
                  Registering a Will
                  <ol>
                    <li>
                      Revocation of a registered will is cumbersome when
                      compared to the revocation of an unregistered will.
                    </li>
                    <li>
                      If a registered will is revoked, the subsequent will made
                      by the person should also be registered.
                    </li>
                  </ol>
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
