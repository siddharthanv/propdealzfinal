import React from "react";
import {Container, Typography} from "@material-ui/core";
import PopularServicesCard from "./PopularServicesCard";

function PopularServices() {
    return (
        <Container>
        <div className="popularServicesHeading">
        <Typography variant="body2" style={{color: "#259AC4"}}>SERVICES</Typography>
        <Typography variant="h5">POPULAR SERVICES</Typography>
        </div>
        <PopularServicesCard />
        </Container>
    );
}

export default PopularServices;