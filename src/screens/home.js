import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/navbar";
import styled from "styled-components";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    //setPublications(JSON.parse(localStorage.getItem("publications")) || []);
    let affichages = JSON.parse(localStorage.getItem("publications")) || [];
    setPublications(affichages.reverse());
  }, []);
  return (
    <div>
      <Nav />
      <StyledDiv>
        <FontAwesomeIcon icon="edit" size="lg" className="mi" />
        <StyledButtonG
          as="a"
          target="_blank"
          onClick={() => {
            props.history.push("/share");
          }}
        >
          Partagez ou postez votre contenu
        </StyledButtonG>

        {publications.map((publication, key) => {
          return (
            <div>
              <Wrapper>
                <StyledUsername>
                  {localStorage.getItem("pseudo")}
                </StyledUsername>
                <StyledSpan></StyledSpan>
                <StyledText>{publication}</StyledText>
              </Wrapper>
            </div>
          );
        })}
      </StyledDiv>
      <Footer />
    </div>
  );
};
const StyledDiv = styled.div`
  margin-top: 15%;
  width: auto;
  height: 50px;
  background: antiquewhite;
  border: 1px solid transparent;
  margin: 60px 15px 0;
`;

const StyledButtonG = styled.button`
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  margin-left: 10px !important;
`;
const Wrapper = styled.section`
  padding: 1.5%;
  background: papayawhip;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const StyledUsername = styled.h1`
  font-size: 1.3em;
  text-align: left;
  color: palevioletred;
  padding-left: 10px;
`;
const StyledSpan = styled.div`
  border: 1px solid red;
  width: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const StyledText = styled.text`
  font-size: 1.2em;
  text-align: justify;
  color: black;
`;
export default Home;
