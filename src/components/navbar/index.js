import React from "react";
import styled from "styled-components";
import { NavbarLink } from "styled-navbar-component";
import { Nav } from "styled-nav-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = (props) => {
  return (
    <StyledBackgrounded>
      <Nav className="ko">
        <NavbarLink>
          <FontAwesomeIcon icon="home" size="lg" className="ye" />
          Accueil
        </NavbarLink>
        <NavbarLink light href="#">
          <FontAwesomeIcon icon="user-friends" size="lg" className="ye" />
          Mon réseau
        </NavbarLink>
        <NavbarLink href="#">
          <FontAwesomeIcon icon="bell" size="lg" className="ye" />
          Notifications
        </NavbarLink>
        <NavbarLink href="#">
          <FontAwesomeIcon icon="briefcase" size="lg" className="ye" />
          Emplois
        </NavbarLink>
      </Nav>
    </StyledBackgrounded>
  );
};

const StyledBackgrounded = styled.div`
  background: white;
  height: 60px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
`;
export default Navbar;
