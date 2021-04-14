import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h3 className="heading">
          Registration Fees to be paid in case of Settlement:
        </h3>
        <p className="contentfinal">
          <ol>
            <b>The settlement fee is as follows: </b>{" "}
            <li>
              If Settlement is in favour of family member then the Stamp duty is
              1% of the market value of the property subject to a maximum of Rs.
              25000/- and the registration fee is also 1% of the market value of
              the property subject to a maximum of Rs.4000/-
            </li>
            <li>
              However Settlement for other cases - then the Stamp duty is 7% of
              the market value of the property and the registration fee is 4% of
              the market value of the property. Note: The definition of family
              member varies from state to state in India – but usually – family
              member consists of mother, spouse, son, daughter, grand children,
              wife of pre-deceased son. In Tamilnadu – family member includes
              includes father, mother, husband, wife, son,
              daughter,brother,sister and grand child. The relationship should
              be traced from the owner of the property prior to transaction.
            </li>
          </ol>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
