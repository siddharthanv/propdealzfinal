import React from "react";
import { Container, Grid, Link } from "@material-ui/core";

function FooterBottom() {
  return (
    <div>
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <p
              style={{
                textAlign: "center",
                color: "#fff",
                padding: "30px 0px",
              }}
            >
              பதிப்புரிமை &copy; {new Date().getFullYear()}{" "}
              <span>
                {" "}
                <Link color="inherit" underline="none" href="/">
                  ப்ராப்டீல்ஸ்.
                </Link>
              </span>{" "}
              அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.
            </p>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default FooterBottom;
