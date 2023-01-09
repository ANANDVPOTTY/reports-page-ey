import "./testnav.css";

import React from "react";
import logoey from "../../img/ey-edited-br.png";

function TestNav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand ey-logo" href="#">
            <img src={logoey} alt="EY-logo" />
            <h1>GLINT Technologies & Solutions</h1>
          </a>
          {/* responsive button ≡ */}
          <button
            className="navbar-toggler navbar-dark"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/*-------------------------------------------------------------------------*/}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {/*--------------NavItems--------------------*/}
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Technology Listing
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Quick Link
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Rss Feed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TestNav;
