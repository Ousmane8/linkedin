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
          <button type="submit">Publier</button>
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
  height: 100px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px 10px 10px 20px;
  width: 100%; ;
`;

export default Share;
