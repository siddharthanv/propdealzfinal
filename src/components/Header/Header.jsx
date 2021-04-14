import { Button } from "@material-ui/core";
import React from "react";
import Logo from "../../images/PropDealzLogo.png";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
//import zIndex from "@material-ui/core/styles/zIndex";
//import Typography from "@material-ui/core/Typography";
//import Button from '@material-ui/core/Button';
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {},
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className="container">
      <div className={classes.root}>
        <AppBar
          className="tamil"
          elevation={0}
          position="static"
          color="transparent"
        >
          <Toolbar
            style={{
              display: "flex",
              position: "relative",
              left: "65rem",
              bottom: "4rem",
              zIndex: 2,
            }}
            disableGutters
            variant="dense"
          ></Toolbar>
        </AppBar>
      </div>
      <nav
        style={{ position: "relative", right: "130px" }}
        className="navbar navbar-expand-lg navbar-light"
      >
        <div className="container-fluid navbar1">
          <a className="navbar-brand" href="/" alt="logo">
            <img src={Logo} alt="Prop Dealz Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            style={{ paddingLeft: "22rem" }}
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Registration
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/sale-deed" alt="Link">
                      Sale Deed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Construction-agreement"
                      alt="Link"
                    >
                      Construction Agreement
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Sale-agreement"
                      alt="Link"
                    >
                      Sale Agreement
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Lease-deed" alt="Link">
                      Lease Deed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Settlement-deed"
                      alt="Link"
                    >
                      Settlement Deed
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Gift-deed" alt="Link">
                      Gift Deed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Partition-deed"
                      alt="Link"
                    >
                      Partition Deed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/MODT-registration"
                      alt="Link"
                    >
                      MODT Registration
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Simple-mortgage"
                      alt="Link"
                    >
                      Simple Mortgage
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Release-deed"
                      alt="Link"
                    >
                      Release Deed
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Rental-agreement"
                      alt="Link"
                    >
                      Rental Agreement
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Will-deed" alt="Link">
                      Will Deed
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Encumbrance Certificate
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/ManualEC-ComputerEC"
                      alt="Link"
                    >
                      Manual EC/Computer EC
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Transfers
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Patta-Chitta-Adangal"
                      alt="Link"
                    >
                      Patta/Chitta/Adangal
                    </a>
                  </li>

                  <li>
                    <a
                      className="dropdown-item"
                      href="/Name-transfer"
                      alt="Link"
                    >
                      Name Transfer
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Certificates
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Birth-certificate"
                      alt="Link"
                    >
                      Birth Certificate
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Death-certificate"
                      alt="Link"
                    >
                      Death Certificate
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/Legal-heir-certificate"
                      alt="Link"
                    >
                      Legal Heir Certificate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Approval
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/DTCP-Approval"
                      alt="Link"
                    >
                      DTCP Approval
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="/CMDA-Approval"
                      alt="Link"
                    >
                      CMDA Approval
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  alt="Link"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Valuations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/Surveying" alt="Link">
                      Surveying
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/Fencing" alt="Link">
                      Fencing
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
