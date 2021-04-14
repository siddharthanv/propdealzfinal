import React from "react";
import { Container } from "@material-ui/core";

function ServicePageSecondContent() {
  return (
    <div>
      <Container>
        <p className="contentfinal">
          <b>
            Documents to be received from Seller & Builder (all in originals)
          </b>

          <ul>
            <li>
              Sale & Construction Agreement – entered into between the Builder &
              your Seller
            </li>
            <li>
              {" "}
              Assignment Deed duly signed by Seller, Buyer & Builder, confirming
              acceptance of the transfer{" "}
            </li>
            <li>
              Statement of account confirming NO DUES or Balance dues as the
              case may be{" "}
            </li>
            <li>
              {" "}
              Post registration directly from Builder, Original Sale Deed
            </li>
          </ul>
        </p>
      </Container>
    </div>
  );
}

export default ServicePageSecondContent;
