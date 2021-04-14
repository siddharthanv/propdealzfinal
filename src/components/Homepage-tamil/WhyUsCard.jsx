import React from "react";
import AssignmentIcon from "@material-ui/icons/Assignment";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

function WhyUsCard() {
  return (
    <div className="WhyUsCardStyle">
      <Container>
        <Grid container spacing={10} className="WhyUsCardStyle">
          <Grid md={4} sm={12}>
            <Card>
              <CardContent className="center">
                <AssignmentIcon className="icon50 colorBlue whyUsIcon" />
                <Typography variant="h5" className="colorBlue mBottom10">
                  உங்கள் சொத்துக்கான சேவையைத் தேடுங்கள்
                </Typography>
                <Typography
                  variant="body2"
                  className="colorBlue mBottom20 lh1p6"
                >
                  லோரெம் இப்சம் என்பது அச்சிடும் போலி உரை மற்றும் தட்டச்சு
                  செய்யும் தொழில். லோரெம் இப்சம் தொழில்.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} sm={12}>
            <Card>
              <CardContent className="center">
                <AssignmentIcon className="icon50 colorBlue whyUsIcon" />
                <Typography variant="h5" className="colorBlue mBottom10">
                  உங்கள் சொத்துக்கான சேவையைத் தேடுங்கள்
                </Typography>
                <Typography
                  variant="body2"
                  className="colorBlue mBottom20 lh1p6"
                >
                  லோரெம் இப்சம் என்பது அச்சிடும் போலி உரை மற்றும் தட்டச்சு
                  செய்யும் தொழில். லோரெம் இப்சம் தொழில்.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid md={4} sm={12}>
            <Card>
              <CardContent className="center">
                <AssignmentIcon className="icon50 colorBlue whyUsIcon" />
                <Typography variant="h5" className="colorBlue mBottom10">
                  உங்கள் சொத்துக்கான சேவையைத் தேடுங்கள்
                </Typography>
                <Typography
                  variant="body2"
                  className="colorBlue mBottom20 lh1p6"
                >
                  லோரெம் இப்சம் என்பது அச்சிடும் போலி உரை மற்றும் தட்டச்சு
                  செய்யும் தொழில். லோரெம் இப்சம் தொழில்.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default WhyUsCard;
