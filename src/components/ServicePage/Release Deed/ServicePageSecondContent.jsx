import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h3 className="heading">How to Sign a Deed of Release</h3>
        <p className="contentfinal">
          <ul>
            <li>
              A person who is not part of the deed of release must witness both
              parties’ signatures.{" "}
            </li>
            <li>
              {" "}
              The deed of release is executed in line with the rules of the
              companies.{" "}
            </li>
            <li>here must be enough copies for each party to sign.</li>
            <li>
              {" "}
              Once the first party signs all copies of the deed of release, then
              the signed copies will be passed to the other party to sign. The
              deed may permit parties to sign by counterpart, which means
              parties can sign separate copies of an identical deed of release.
            </li>
            <li>Keep copies of the deed of release in a safe place.</li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
