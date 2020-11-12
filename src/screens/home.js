import React, { useEffect, useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import styled from "styled-components";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = (props) => {
  const [publications, setPublications] = useState([]);
  useEffect(() => {
    setPublications(JSON.parse(localStorage.getItem("publications")) || []);
  }, []);
  return (
    <div>
      <Nav />
      <StyledDiv>
        <FontAwesomeIcon icon="edit" size="lg" />
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
          return <div>{publication}</div>;
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

export default Home;
