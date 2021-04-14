import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h1 className="heading">Government Fee Structure</h1>
        <p className="contentfinal">
          The fee for a death certificate varies under different conditions.
          <ul>
            <li> A fee of Rs. 25 has to be paid for each copy.</li>
            <li>
              {" "}
              If the date of death is unknown or unspecified, the search fee for
              every year is Rs. 25(per copy).
            </li>
            <li>
              {" "}
              If there is a delay in the registering of deaths, such as if it is
              less than one month, it can be acquired without penalty; more than
              a month and less than a year, a fee of Rs. 25 has to be paid for
              each copy; and if it is more than a year with the order of
              Magistrate it is Rs.50.
            </li>
            <li>
              {" "}
              As per the rules of the court, a fee stamp of Rs.2/- should be
              affixed in the application form.
            </li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
