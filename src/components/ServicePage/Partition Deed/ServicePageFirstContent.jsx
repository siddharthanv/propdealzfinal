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
import Links from "../../Links";

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
        <h1 className="heading">Partition Deed</h1>
        <Grid container spacing={5}>
          <Grid item xs={7}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={`${img}`} />
                <CardContent></CardContent>
              </CardActionArea>
            </Card>
            <h3 className="heading">What is a partition deed?</h3>
            <p className="content">
              Joint ownership of a property by many people is quite common,
              especially if it is an immovable estate that is owned by a family.
              The need for partition arises, when the co-owners decide to go
              their own way, as the combined ownership over the property limits
              their rights. The legal instrument that is used to affect this
              change, is known as the deed of partition or partition deed in
              legal parlance. A partition deed is mostly used by families, to
              divide members’ shares in inherited properties. After the
              division, each member becomes the independent owner of his share
              in the property and is legally free to sell, rent or gift his
              asset, according to his will.
            </p>
            <h3 className="heading">When do you need a partition deed?</h3>
            <p className="content">
              Co-owners enjoy limited rights over a property, as their undivided
              shares leave a lot of scope for uncertainty. Even though all of
              these people are joint owners, they are not free to rent, sell or
              gift the property on their own accord, unless each party agrees to
              such a proposition. Basically, the consent of each co-owner is
              required to carry out any such transaction. The need for a
              partition deed arises, when it becomes important to create a clear
              division of shares in the property.
            </p>
            <h3 className="heading">
              How is property divided under a partition deed?
            </h3>
            <p className="content">
              If a property is being divided between two people who have
              invested in the purchase, the division is based on their
              respective contribution. If two siblings bought a property for,
              say Rs 1 crore and each contributed Rs 50 lakhs, the property will
              be divided equally between the two parties through a partition
              deed. If the ratio of their contribution is 60:40, the division
              would be in this manner. However, the law assumes each member to
              have an equal share in an undivided property, unless documentary
              proof stating otherwise is produced. In case of inherited
              property, co-owners would get their share in a property based on
              their treatment in the inheritance law governing their religion.
            </p>
            <h3 className="heading">
              Application of inheritance laws on deed of partition
            </h3>
            <p className="content">
              Partition of any property is subject to the laws of inheritance.
              This brings into picture inheritance laws governing property
              division among Hindus, Muslims and Christians. At the time of
              partition, the share of each member is determined, based on his
              entitlement under the applicable inheritance laws. In case of
              Hindus, provisions of the Hindu Succession Act, 1956, will be
              applicable at the time of partition of an inherited estate.
            </p>
            <h3 className="heading">
              What happens to a property after a partition deed is executed?
            </h3>
            <p className="content">
              Once the partition deed comes into effect, each share in the
              property becomes an independent entity. Each divided share of the
              asset gets a new title. Also, members surrender their claim in the
              shares that have been allocated to the other members. For example,
              if Sid, Shyam and Dev divide a property through a partition deed,
              then,SID and Shyam would give up their right in the part that has
              been allocated to Dev. Similarly, Dev would give up his right in
              the shares allotted to Sid and Shyam. Apart from the common areas
              where easements rights are applicable, each one has an independent
              property within an estate, after its partition. This also provides
              them the right to deal with their share in a manner they like.
              After the partition, each party must also complete the property
              mutation process, to make the change legally valid.
            </p>
            <h3 className="heading">
              Registration and stamp duty on partition deed
            </h3>
            <p className="content">
              To attain legal validity, a partition deed must be registered with
              the sub-registrar of the area in which the immovable asset is
              located. This is mandatory under Section 17 of the Indian
              registration Act, 1908. This means that the parties involved in
              the partition, will have to pay stamp duty charges (under the
              provisions of the Indian stamp Act, 1899) and registration charge,
              to get the partition deed registered. For example, in Delhi, 2% of
              the value of the separated share of the property has to be paid as
              the stamp duty on a partition deed. The same rate is applicable on
              registration of partition deeds in Maharashtra, along with a 1%
              registration charge. (However, it is not mandatory for the
              co-owners to register the partition deed in the state.) The manner
              of calculation of stamp duty would be better explained through an
              example: Suppose a father, through partition, divides his estate
              worth Rs 5 crores into three parts, keeping 40% share with
              himself, while allocating 30% each to two of his sons. In this
              case, the stamp duty will be applicable on the 60% of the property
              value, i.e., Rs 3 crores. Supposing this property is located in
              Delhi and the applicable stamp duty levy is 2%, then, the brothers
              will have to pay Rs 6 lakhs, to register the partition deed.
            </p>
            <h3 className="heading">
              Is it compulsory to register a partition deed?
            </h3>
            <p className="content">
              In 2018, the Maharashtra government said that the process of
              partition of properties belonging to a Hindu Undivided Family
              (HUF) and the receipt thereof by a coparcener, do not fall under
              the definition of ‘transfer’. Consequently, it is not compulsory
              to register such partition deeds. Note here that in case the
              partition has been affected through a partition deed, which has
              not been registered, the deed will not be admissible as a proof in
              a court of law.
            </p>
            <h3 className="heading">
              Difference between partition deed and partition suit
            </h3>
            <p className="content">
              Under the provisions of the law, a property would be divided,
              either by way of a partition deed or by a partition suit. The need
              to go for the second option arises, in case of a dispute or in
              cases where the co-owners do not mutually agree to the partition.
              In this case, a partition suit must be filed in an appropriate
              court of law. Before one can file a suit, they will have to issue
              a request to all the co-owners, demanding partition. In case the
              parties refuse to entertain your request, you are within your
              legal rights to move court over the matter. Under the Indian laws,
              the aggrieved party must approach the court within three years,
              from the date when the right to file a partition suit accrues.
              Both the instruments, however, serve the same purpose – they
              create and extinguish rights of co-owners in a jointly owned
              property.
            </p>
            <h3 className="heading">Word of caution</h3>
            <p className="content">
              The text of the partition deed must be such that it explicitly
              mentions each aspect of the division. Aside from the names of the
              parties concerned, the deed must have a clear mention of the date
              on which the partition is affected. In case there are any
              ambiguities in the language or any errors in the text, a partition
              deed could be challenged in the court of the law. Co-owners are
              thus advised to first reach an agreement and clearly set the terms
              and conditions of the partition. All aspects of the division must
              be considered by each party, so as to avoid any inconvenience in
              future. Once the partition deed document is prepared, all parties
              concerned must read it thoroughly, to ensure that there are no
              ambiguities and that it is error-free. Once the text is final, the
              deed must be drafted on a stamp paper and the parties involved
              must proceed with the registration.
            </p>
            <h3 className="heading">
              Treatment of verbal partition or family settlement under the law
            </h3>
            <p className="content">
              The text of the partition deed must be such that it explicitly
              mentions each aspect of the division. Aside from the names of the
              parties concerned, the deed must have a clear mention of the date
              on which the partition is affected. In case there are any
              ambiguities in the language or any errors in the text, a partition
              deed could be challenged in the court of the law. Co-owners are
              thus advised to first reach an agreement and clearly set the terms
              and conditions of the partition. All aspects of the division must
              be considered by each party, so as to avoid any inconvenience in
              future. Once the partition deed document is prepared, all parties
              concerned must read it thoroughly, to ensure that there are no
              ambiguities and that it is error-free. Once the text is final, the
              deed must be drafted on a stamp paper and the parties involved
              must proceed with the registration.
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
