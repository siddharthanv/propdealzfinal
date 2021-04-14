import React from "react";
import SocialmediaHandles from "./SocialMediaHandles";
import FooterContent from "./FooterContentTamil";
import FooterBottom from "./FooterBottomTamil";
import { Divider } from "@material-ui/core";

function Footer() {
  return (
    <div style={{ backgroundColor: "#010815" }}>
      <SocialmediaHandles />
      <Divider />
      <FooterContent />
      <Divider />
      <FooterBottom />
    </div>
  );
}

export default Footer;
