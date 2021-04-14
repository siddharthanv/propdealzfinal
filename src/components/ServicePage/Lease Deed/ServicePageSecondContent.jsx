import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h3 className="heading">
          Documents required for registration of lease deed
        </h3>
        <p className="contentfinal">
          <ul>
            The following documents are required for lease deed registration:
            <li>
              Identity proof, such as Aadhaar Card, driving licence, passport,
              etc., of the landlord and tenant.{" "}
            </li>
            <li>
              Address proof of the authorised signatory, from both the parties.
            </li>
            <li>
              Passport-sized colour photographs of the authorised signatory,
              from both the parties.{" "}
            </li>
            <li>
              {" "}
              Company PAN card and company seal/stamp, if it is a commercial
              property.
            </li>
            <li>
              {" "}
              The original proof/evidence of ownership or title of the property.{" "}
            </li>
            <li>
              {" "}
              Property documents, such as Index II or tax receipt of the
              property to be leased.
            </li>
            <li> Route map of the property leased out.</li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
