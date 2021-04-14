import React from "react";
import { Container, Box } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";

function SocialMediaHandles() {
  return (
    <div>
      <Container>
        <Box display="flex" justifyContent="flex-end">
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="socialMediaHandlesStyles"
          >
            <TwitterIcon
              onClick={(event) =>
                (window.location.href = "https://twitter.com/propdealz")
              }
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="socialMediaHandlesStyles"
          >
            <FacebookIcon
              onClick={(event) =>
                (window.location.href =
                  "https://www.facebook.com/propdealzchennai")
              }
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="socialMediaHandlesStyles"
          >
            <LinkedInIcon
              onClick={(event) =>
                (window.location.href =
                  "https://www.linkedin.com/company/propdealz")
              }
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="socialMediaHandlesStyles"
          >
            <InstagramIcon
              onClick={(event) =>
                (window.location.href = "https://www.instagram.com/")
              }
            />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default SocialMediaHandles;
