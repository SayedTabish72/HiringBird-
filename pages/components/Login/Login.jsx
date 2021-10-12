import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <OuterContainer>
      <Blob1>
        <img src="/images/blob1.svg" alt="universe" />
      </Blob1>
      <InnerContainer>
        <Left>
          <img
            className="skillzen-logo"
            src="/images/skillzen-logo.svg"
            alt=""
          />
          <img
            className="signin-vecotor"
            src="/images/signin-vector.svg"
            alt=""
          />
        </Left>
        <Right>
          <Form>
            <h1>Welcome Back!</h1>
            <h2>Sign in</h2>

            <div className="icons">
              <img src="/images/fb.svg" alt="" />
              <img src="/images/google.svg" alt="" />
              <img src="/images/linkedin.svg" alt="" />
            </div>

            <div className="fields">
              <CustomTextField
                required
                autoFocus
                id="standard-email"
                label="Email"
                placeholder="you@example.com"
                margin="normal"
                fullwidth
                InputLabelProps={{
                  shrink: true,
                }}
                // defaultValue="Hello World"
                // helperText="Incorrect entry."
                variant="standard"
              />
              <CustomTextField
                required
                placeholder="yourpassword"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                fullwidth
                id="standard-password-input"
                label="Password"
                type={showPass ? "text" : "password"}
                autoComplete="current-password"
                variant="standard"
              />
              <div className="bottom">
                <FormControlLabel
                  sx={{ flex: "1 50%" }}
                  control={
                    <Checkbox
                      onChange={(e) => setShowPass(e.target.checked)}
                      sx={{
                        color: " #F26A7E",
                        "&.Mui-checked": {
                          color: "#F26A7E",
                        },
                        "&..MuiFormControlLabel-root": {
                          fontFamily: "inter",
                        },
                      }}
                    />
                  }
                  label="Show password"
                />
                <p style={{ cursor: "pointer" }}>Forgot password?</p>

                <FormControlLabel
                  sx={{ flex: "1 50%" }}
                  control={
                    <Checkbox
                      sx={{
                        color: " #F26A7E",
                        "&.Mui-checked": {
                          color: "#F26A7E",
                        },
                        "&..MuiFormControlLabel-root": {
                          fontFamily: "inter",
                        },
                      }}
                    />
                  }
                  label="Keep me logged in"
                />
              </div>
            </div>
            <Footer>
              <button>Sign In</button>
              <p>
                New User? <span>Sign Up</span>
              </p>
            </Footer>
          </Form>
        </Right>
      </InnerContainer>
      <Blob2>
        <img src="/images/blob2.svg" alt="universe" />
      </Blob2>
    </OuterContainer>
  );
};

export default Login;

const OuterContainer = styled.div`
  position: relative;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  background-color: #e5e5e5;
  place-items: center;
`;
const InnerContainer = styled.div`
  position: absolute;
  display: flex;
  max-width: 1450px;
  width: 90%;
  height: 80%;
  border-radius: 10px;
  background-color: white;
  z-index: 1;
  overflow: hidden;
  @media (max-width: 1200px) {
    flex-direction: column;
    overflow-y: scroll;
    width: 95%;
    height: 95%;
  }
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Blob1 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Blob2 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  top: 0;
  right: 0;
`;

const Left = styled.div`
  width: 500px;
  background-color: #fff8f8;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 100%;
  }
  .skillzen-logo {
    height: 40px;
    margin: 10px;
    @media (max-width: 1200px) {
    }
  }
  .signin-vecotor {
    height: 220px;
    margin: 0 auto;
    margin-bottom: 40px;
    @media (max-width: 1200px) {
      margin: 20px auto 40px auto;
    }
  }
  align-items: flex-start;
`;
const Right = styled.div`
  height: 100%;
  flex: 1;
  padding: 15px;
`;

const Form = styled.div`
  height: 100%;
  h1 {
    color: #ec1f28;
    font-size: 37px;
    line-height: 50.83px;
    margin-bottom: 10px;
  }
  h2 {
    line-height: 38.73px;
    margin-bottom: 10px;
    font-size: 27px;
  }
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  .icons {
    margin: 20px 0;
    img {
      margin-right: 20px;
      cursor: pointer;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      &:active {
        transform: scale(1.1);
      }
    }
  }
  .fields {
    display: flex;
    flex-direction: column;
  }
  .bottom {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
  }
`;

const CustomTextField = styled(TextField)`
  .MuiInputBase-input {
    font-family: "Inter", sans-serif;
  }
  label.Mui-focused {
    color: #f26a7e;
  }

  label {
    font-family: "Inter", sans-serif;
  }

  .MuiInput-underline:after {
    border-bottom-color: #f26a7e;
  }
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button {
    background-color: #fff;
    padding: 13px 20px;
    font-weight: bold;
    font-size: 17px;
    border: 1px solid #f26a7e;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 100px;
    margin-bottom: 10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover {
      background-color: #f26a7e;
      color: #fff;
    }
    &:active {
      transform: scale(0.9);
    }
  }
  span {
    font-weight: bold;
    color: #f26a7e;
  }
`;
