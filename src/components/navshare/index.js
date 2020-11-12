import React from "react";
import styled from "styled-components";
import logo from "../../assets/bg-in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navshare = (props) => {
  return (
    <StyledBackgroundNav>
      <StyledLogo src={logo} alt="Logo" />
      <StyledText>Partager ou Postez</StyledText>

      <StyledInput
        as="a"
        target="_blank"
        onClick={() => {
          props.history.push.goBack("/home");
        }}
      >
        <FontAwesomeIcon icon="times" size="2x" className="hi" />
      </StyledInput>
    </StyledBackgroundNav>
  );
};
const StyledBackgroundNav = styled.div`
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
  top: 10%;
  left: 5%;
  position: relative;
  transform: translate(0%, 0%);
  border-radius: 50%;
  border: 1px solid white;
`;
const StyledText = styled.text`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  margin: 15%;
`;
const StyledInput = styled.input`
  color: white;
`;
export default Navshare;
