import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <h3 className="heading">Benefits of MODT</h3>
        <p className="contentfinal">
          <ul>
            <li>
              The stamp duty and other fees are as low as 0.1% of the home loan
              amount. In the case of registered mortgages, the cost is
              comparatively higher.
            </li>
            <li>
              {" "}
              The title deed can be easily secured after making the payments.
            </li>
            <li>
              No registration process is required when the property is handed
              over to you.
            </li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
