import { Button } from "@material-ui/core";
import React from "react";
import Logo from "../../images/PropDealzLogo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                  சமுதாய
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/sale-deed" alt="Link">
                      விற்பனை பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      கட்டுமான ஒப்பந்தம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      விற்பனை ஒப்பந்தம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      குத்தகை பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      தீர்வு பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பரிசு பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பகிர்வு பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பகிர்வு பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      எளிய அடமானம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      வெளியீட்டு பத்திரம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      வாடகை ஒப்பந்தம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      வில் பத்திரம்
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
                  இணை சான்றிதழ்
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      கையேடு EC / கணினி EC
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      Computer EC
                    </a>
                  </li> */}
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
                  இடமாற்றங்கள்
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பட்டா / சித்தா / அதங்கல்
                    </a>
                  </li>
                  {/* <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      Chitta
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      Adangal
                    </a>
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பெயர் பரிமாற்றம்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      துணை பிரிவு
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
                  சான்றிதழ்கள்
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      பிறப்பு சான்றிதழ்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      இறப்பு சான்றிதழ்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      சட்ட வாரிசு சான்றிதழ்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      திருமண சான்றிதழ்
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
                  ஒப்புதல்
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      RERA ஒப்புதல்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      DTCP ஒப்புதல்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      CMDA ஒப்புதல்
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
                  சட்ட வாரிசு சான்றிதழ்
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      சட்ட வாரிசு சான்றிதழ்
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/" alt="Link">
                      சட்ட வாரிசு சான்றிதழ்
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="lang">
              <Link to="/தமிழ்">
                <Button color="white" className="is-rounded">
                  <span>தமிழ்</span>
                </Button>
              </Link>
              <Link to="/Home">
                <Button color="white" className="is-rounded">
                  <span>English</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
