import React from "react";
import styled from "styled-components";

const Footer = (props) => {
  return <StyledBackgrounded></StyledBackgrounded>;
};

const StyledBackgrounded = styled.div`
  background: transparent;
  height: 50px;
  width: 100%;
  margin: 0;
  padding: 0;
  border: 0;
  position: fixed;
  bottom: 0;
  box-shadow: 0 -1px 3px rgba(0, 0, 0, 0.2);
`;

export default Footer;
