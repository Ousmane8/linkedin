import React, { useState } from "react";
import Navshare from "../components/navshare";
import styled from "styled-components";

const Share = () => {
  const [content, setContent] = useState("");
  const handlesubmit = (e) => {
    console.log(content);
    e.preventDefault();
    if (!content) {
      return;
    }
    const publications = JSON.parse(localStorage.getItem("publications")) || [];
    publications.push(content);
    localStorage.setItem("publications", JSON.stringify(publications));
  };
  return (
    <div>
      <div>
        <Navshare />
        <StyledForm onSubmit={handlesubmit}>
          <StyledTextarea
            placeholder="Partagez ou postez votre contenu."
            onChange={(e) => setContent(e.target.value)}
            type="text"
          ></StyledTextarea>
          <StyledButton type="submit">Publier</StyledButton>
        </StyledForm>
      </div>
    </div>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const StyledTextarea = styled.textarea`
  margin: 50px 0px;
  border: 0px solid black;
  height: 400px;
  border-bottom: 1px solid rgb(0 0 0 / 67%);
  padding: 5px 10px 5px 20px;
  width: 100%;
  font-size: 16px;
`;
const StyledButton = styled.button`
  background: black !important;
  border-radius: 28px !important;
  border: 2px solid #0a66c2;
  color: white;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  width: 50%;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
`;
export default Share;
