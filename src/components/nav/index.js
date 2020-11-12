import React from "react";
import styled from "styled-components";
import logo from "../../assets/bg-in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Nav = (props) => {
  return (
    <StyledBackground>
      <StyledLogo src={logo} alt="Logo" />
      <SigninInput placeholder="Rechercher" type="text"></SigninInput>
      <FontAwesomeIcon icon="envelope" size="2x" className="hm" />
    </StyledBackground>
  );
};

const StyledBackground = styled.div`
  background: #0073b1;
  height: 50px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  position: fixed;
  top: 0;
`;
const StyledLogo = styled.img`
  width: 8%;
  top: 15%;
  left: 5%;
  position: relative;
  transform: translate(0%, 0%);
  border-radius: 50%;
  border: 1px solid white;
`;
const SigninInput = styled.input`
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.9);
  background-color: #e1e9ee;
  position: relative;
  height: 35px;
  box-sizing: border-box;
  left: 10%;
  width: 65%;
  border: 0;
  top: -5%;
  font-size: 18px;
`;

export default Nav;
