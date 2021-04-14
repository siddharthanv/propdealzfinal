import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h3 className="heading">
          What are the Documents Required to Get an Encumbrance Certificate?
        </h3>

        <p className="contentfinal">
          Some of the documents that you may require when applying for an
          Encumbrance Certificate are:
          <ul>
            <li>Applicant’s proof of address.</li>
            <li>Property registration document.</li>
            <li>Property details and its title deed details.</li>
            <li>
              The property sale deed/gift deed/partition deed/release deed if a
              deed has been executed previously.
            </li>
            <li>
              The deed number upon registration containing the date and book
              number along with the signature of the applicant.
            </li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
