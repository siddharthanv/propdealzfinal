import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function Links() {
  return (
    <div>
      <Container className="links-service">
        <h3>RELATED LINKS</h3>
        <ul>
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="http://tnreginet.gov.in/"
            >
              Income Tax for Proprietorships
            </a>
          </li>
          <br />
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="http://tnreginet.gov.in/"
            >
              Advantages and Disadvantages of Proprietorships registration
            </a>
          </li>
          <br />
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="http://tnreginet.gov.in/"
            >
              Bank account for Sole Proprietorships
            </a>
          </li>
          <br />
          <li>
            <a
              style={{ textDecoration: "none" }}
              href="http://tnreginet.gov.in/"
            >
              Conversion of Proprietorship into a company
            </a>
          </li>
        </ul>
      </Container>
    </div>
  );
}
