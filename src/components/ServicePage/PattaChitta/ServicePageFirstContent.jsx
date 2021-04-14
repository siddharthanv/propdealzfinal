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
        <h1 className="heading">Patta/Chitta/Adangal</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is Patta/Chitta/Adangal?</h3>
            <p className="content">
              A Patta is a revenue record of a piece of land, while a Chitta
              contains details about the area, size, ownership of the property.
              Since 2015, both records have been merged into a single document
              called Patta Chitta In order to establish your right over a
              property, you must have enough documented proof. In Tamil Nadu, a
              ‘Patta’ is all the evidence you need, to prove your legal right
              over a property. The Tamil Nadu state government launched the
              Tamil Nadu Patta Chitta Land Record for citizens of Tamil Nadu,
              who can now access digitised land records. This service comes
              under the revenue department.
            </p>
            <h3 className="heading">Patta</h3>
            <p className="content">
              A Patta is a revenue record of a piece of land. It is issued by
              the government and is also known as the Record of Rights (ROR).
              The Patta includes the Patta number, name of the district, taluk
              and village, owner’s name, survey number and subdivision,
              wetland/dryland, area of land and tax details.
            </p>
            <h3 className="heading">Chitta</h3>

            <p className="content">
              This land revenue document contains details about the area, size,
              ownership of the property. These details are maintained by the
              Village Administration Officer and the nature of land- whether dry
              or wetland is mentioned. Starting 2015, both these documents have
              been merged and are available as one with all the relevant
              information in the Patta.
            </p>
            <h3 className="heading">Details on the Patta Chitta document</h3>
            <p className="content">
              You can get the following information in the Patta Chitta
              document:
              <ul>
                <li>Name of the Owner</li>
                <li>Sub-division and survey number</li>
                <li>Quantity of Patta</li>
                <li>Name of the district, village and taluk of the owner</li>
                <li>Area or dimensions of the land</li>
                <li>Tax details of the owner</li>
                <li>Dry land or wetland details</li>
                <li>Chitta land ownership</li>
              </ul>
            </p>
            <h3 className="heading">Nature of land </h3>
            <p className="content">
              <b>Nanjai:</b> In short, it is a wetland – it could be a lake,
              river, canal or water bodies.<br></br>
              <b>Punjai:</b> Punjai is dry land. It has low water reservoirs and
              depends on small sources such as well, borewells, etc.
            </p>
            <h3 className="heading">
              Documents required to apply for patta chitta online
            </h3>
            <p className="content">
              The following documents are required, if you are applying for the
              Patta Chitta. Keep them handy. These include:
              <ul>
                <li>
                  The original sale deed is required, as well as a photocopy of
                  this deed, which will be verified. These need to be submitted
                  in the tehsildar’s office.
                </li>
                <li>
                  Any proof of possession of the property. This includes
                  property tax payment receipt, electricity bill or even the
                  encumbrance certificate. These documents establish your claim
                  and legal possession over the property.
                </li>
              </ul>
            </p>
            <h3 className="heading">How to transfer Patta Chitta?</h3>
            <p className="content">
              You must apply for the transfer of Patta. The application needs to
              be submitted in the respective tehsildar’s office. Do carry
              photocopies and original documents of the sale deed, tax receipts,
              electricity bill and encumbrance certificate, when applying for
              transfer of Patta Chitta. The application may be accepted or
              rejected, on the basis of the study that the concerned department
              does. Fees charged for Patta Chitta transfer is Rs 100 only.
            </p>
            <h3 className="heading">
              Step by step process to change your name in Patta
            </h3>
            <p className="content">
              Note that you cannot change the name on the Patta online. However,
              you can do it by making a physical visit.
              <ul>
                <li>Visit the village administration office.</li>
                <li>
                  Ask for changes in the patta transfer form provided to you.
                </li>
                <li>
                  Keep handy the sale deed, tax receipts, electricity bill and
                  encumbrance certificate, as you may need to show these.
                </li>
                <li>
                  Fill the form and submit the signed form, with the documents.
                </li>
                It may take up to 30 days for changes to reflect and a new Patta
                to be issued.
              </ul>
            </p>
            <h3 className="heading">Other requirements of Patta Chitta</h3>
            <p className="content">
              To be eligible for various economic developmental schemes, the
              Tamil Nadu government may ask you for your documents which
              include, proof of residence, community certificate with number,
              details like family’s annual income, family card, ration card, GST
              number and project report, along with patta/chitta (for buying
              land and its development). Therefore, keep these handy.
            </p>
            <h3 className="heading">
              Is Patta Chitta, adangal available across Tamil Nadu?
            </h3>
            <p className="content">
              Tamil Nadu land records are available for 27 out of 32 districts
              in the state, while for the rest, the digitisation process is
              still ongoing. Districts where the patta, chitta and adangal are
              available, include Ariyalur, Coimbatore, Cuddalore, Dharmapuri,
              Dindigul, Erode, Kancheepuram, Kanyakumari, Karur, Krishnagiri,
              Madurai, Nagapattinam, Namakkal, Nilgiris, Perambalur, Pudukottai,
              Ramanathapuram, Salem, Sivagangai, Thanjavur, Thoothukkudi,
              Tirunelveli, Tiruppur, Tiruvannamalai, Vellore, Villupuram and
              Virudhunagar.
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
