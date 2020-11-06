import React from "react";
import logo from "../../assets/LinkedIn-Logo.png";
import styled from "styled-components";

//import "./index.css";

const Header = (props) => {
  console.log("Header -> props", props);
  return (
    <header className="App-header">
      <StyledLogo src={logo} alt="Logo" />
    </header>
  );
};

const StyledLogo = styled.img`
  width: 50%;
  position: relative;
  transform: translate(50%, 0%);
`;

export default Header;
