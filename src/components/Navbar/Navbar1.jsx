import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar1.css";
// import eylogo from "https://sites.ey.com/sites/AutomateTest/SiteAssets/splite/media/ey-edited-br.png";

function Navbar1() {
  return (
    <>
      <section>

        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          className="nav1"
        >
          <Navbar.Brand href="#home" className="logo-text">
            <img
              src="https://sites.ey.com/sites/AutomateTest/SiteAssets/splite/media/EYLogo.png"
              alt="img not found"
            />
            <span className="ey-logo">GLINT Technologies & Solutions</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav" className="test3">
            <Nav className="nav3">
              <Nav.Item>
                <Nav.Link
                  className="text-white nav-head"
                  href="https://sites.ey.com/sites/AutomateTest/SiteAssets/splite/index.aspx"
                >
                  Home
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link className="text-white nav-head" href="#services">
                  Services
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="text-white nav-head"
                  href="https://sites.ey.com/sites/AutomateTest/SiteAssets/splite/reports.aspx"
                >
                  Reports
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-white nav-head" href="#quicklinks">
                  Quick Link
                </Nav.Link>
              </Nav.Item> */}
              <Nav.Item>
                <Nav.Link
                  className="text-white nav-head"
                  href="https://sites.ey.com/sites/AutomateTest/SiteAssets/splite/techlist.aspx"
                >
                  Technology Listing
                </Nav.Link>
              </Nav.Item>
              {/* <Nav.Item>
                <Nav.Link className="text-white nav-head" href="#rssfeed">
                  RSS Feed
                </Nav.Link>
              </Nav.Item> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>
    </>
  );
}

export default Navbar1;
