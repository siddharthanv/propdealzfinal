import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h1 className="heading">What is the state of unapproved plots?</h1>
        <p className="contentfinal">
          <ul>
            <li>
              o Generally, unapproved plots are seized by the CMDA & sold off in
              auctions later. This means, if you plan to buy plots in Chennai,
              ensure it is CMDA approved for further development.
            </li>
            <li>
              There has been a sudden increase in the unapproved plots,
              especially after the conversion of agricultural land into
              residential land was banned by the Government of Tamil Nadu.
            </li>
            <li>
              The penalty levied increases with the length of the period for
              which the unapproved plots are owned. This also includes the
              period prior to the sale deed execution.
            </li>
            <li>
              It is considered illegal to provide water & sewage connections to
              buildings that are constructed/developed on unapproved plots/land.
            </li>
            <li>
              Since building plan approval will not be provided for unapproved
              plots, there are possibilities of demolition of such buildings. In
              fact, this can be discounted as well.
            </li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
