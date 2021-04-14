import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import HouseIcon from "@material-ui/icons/House";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from "@material-ui/icons/People";

function WhyUsCard() {
  return (
    <div>
      <Card elevation={0} style={{ backgroundColor: "#f7f3e9" }}>
        <Typography
          variant="body2"
          className="colorBlue centre"
          style={{ textAlign: "center", paddingTop: "50px" }}
        >
          ALWAYS SATISFIED
        </Typography>
        <Typography variant="h5" style={{ textAlign: "center" }}>
          WHY US?
        </Typography>
        <Grid container style={{ padding: "60px" }} className="WhyUsContainer">
          <Grid md={4} sm={12}>
            <CardContent className="center">
              <SearchIcon className="icon50 colorBlue whyUsIcon" />
              <Typography variant="h5" className="mBottom10">
                Search property from anywhere
              </Typography>
              <Typography variant="body2" className="mBottom20 lh1p6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </Typography>
            </CardContent>
          </Grid>
          <Grid md={4} sm={12}>
            <CardContent className="center">
              <PeopleIcon className="icon50 colorBlue whyUsIcon" />
              <Typography variant="h5" className="mBottom10">
                Professional and friendly agent
              </Typography>
              <Typography variant="body2" className="mBottom20 lh1p6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </Typography>
            </CardContent>
          </Grid>
          <Grid md={4} sm={12}>
            <CardContent className="center">
              <HouseIcon className="icon50 colorBlue whyUsIcon" />
              <Typography variant="h5" className="mBottom10">
                Buy and sell awesome property
              </Typography>
              <Typography variant="body2" className="mBottom20 lh1p6">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

export default WhyUsCard;
