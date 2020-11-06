import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../assets/gmail.png";

import { useHistory } from "react-router-dom";

const Link = ({ className, text, ...props }) => (
  <a {...props} className={className}>
    {text}
  </a>
);

const Signin = ({ submit }) => {
  const [formState, setFormState] = useState({ username: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();
  return (
    <StyledForm
      onSubmit={(e) => submit(e, formState, setErrorMessage, history)}
    >
      <StyledH1>Bon retour parmi nous</StyledH1>
      <StyledText>
        Ne manquez pas votre prochaine opportunité ! Identifiez-vous pour rester
        au courant de ce qui se passe dans votre sphère professionnelle.
      </StyledText>
      <SigninInput
        placeholder="E-mail ou téléphone"
        onChange={(e) =>
          setFormState({ ...formState, username: e.target.value })
        }
        type="text"
      ></SigninInput>
      <SigninInput
        placeholder="Mot de passe"
        onChange={(e) =>
          setFormState({ ...formState, password: e.target.value })
        }
        type="password"
      ></SigninInput>
      <StyledSpan>{errorMessage}</StyledSpan>
      <StyledButton type="submit">S’identifier</StyledButton>
      <StyledSpanP>ou</StyledSpanP>
      <StyledButtonG
        as="a"
        target="_blank"
        href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=storagerelay%3A%2F%2Fhttps%2Fwww.linkedin.com%3Fid%3Dauth486832&response_type=permission%20id_token&scope=email%20profile%20openid&openid.realm&client_id=990339570472-k6nqn1tpmitg8pui82bfaun3jrpmiuhs.apps.googleusercontent.com&ss_domain=https%3A%2F%2Fwww.linkedin.com&fetch_basic_profile=true&gsiwebsdk=2&flowName=GeneralOAuthFlow"
      >
        <StyledLogo src={logo} alt="Logo" />
        S’identifier avec Google
      </StyledButtonG>
      <StyledComp
        text="Mot de passe oublié ?"
        href="https://www.linkedin.com/checkpoint/rp/request-password-reset?trk=guest_homepage-basic_nav-header-signin"
      />
      <StyledText2>
        Nouveau sur LinkedIn ?
        <StyledComp1
          text=" S’inscrire"
          href="https://www.linkedin.com/signup/cold-join?source=guest_homepage-basic_nav-header-signin"
        />
      </StyledText2>
    </StyledForm>
  );
};
const StyledSpan = styled.span`
  color: red;
  margin-bottom: 12px;
`;
const StyledH1 = styled.h1`
  font-size: 1.8rem;
  line-height: 1.6;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.9);
  margin: 0;
  padding: 0;
  border: 0;
  margin-top: -5% !important;
`;
const StyledText = styled.text`
  text-align: center;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  padding-bottom: 16px;
  margin: 2%;
  padding: 0;
  margin-top: 0% !important;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SigninInput = styled.input`
  margin: 10px 0 10px 0;
  outline: none;
  border: 1px solid #555;
  border-radius: 4px;
  font-size: 18px;
  line-height: 1.33333;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
  position: relative;
  z-index: 1;
  height: 52px;
  width: 90%;
  padding: 0px 0px 0px 10px;
`;
const StyledButton = styled.button`
  background: #0a66c2 !important;
  border-radius: 28px !important;
  border: 0;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
`;
const StyledSpanP = styled.span`
  font-size: 1.2rem;
  line-height: 1.42857;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.6);
  padding: 10px 12px;
`;
const StyledButtonG = styled.button`
  border-radius: 28px !important;
  background: white;
  border: 1px solid black;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  width: 90%;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
`;
const StyledComp = styled(Link)`
  margin: 20px 0 0 0;
  color: #0a66c2;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
`;
const StyledLogo = styled.img`
  width: 7%;
  top: 5px;
  right: 2%;
  position: relative;
  transform: translate(0%, 0%);
`;
const StyledComp1 = styled(Link)`
  color: #0a66c2;
  font-size: 1rem;
  font-weight: 600;
  font-family: inherit;
  text-align: center;
  text-decoration: none;
`;
const StyledText2 = styled.text`
  margin: 20px;
  text-align: center;
  font-size: 1rem;
  line-height: 1.42857;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.9);
`;
export default Signin;
