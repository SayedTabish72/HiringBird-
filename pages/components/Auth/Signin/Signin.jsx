import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "../../../../utils/axios";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Button } from "../commonStyles/Button.styled";

const Signin = () => {
  const router = useRouter();
  const [errorText, setErrorText] = useState("");
  const [showPass, setShowPass] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string().required("Please Enter your password"),
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      // ),
    }),
    onSubmit: (values) => {
      console.log({ values });
      axios
        .post("/login", values)
        .then((res) => {
          console.log("user", res.data);
          // store tokens in localstorage
          localStorage.setItem("access_token", res.data.accessToken);
          localStorage.setItem("refresh_token", res.data.refreshToken);
          // store user in redux
          // redirect to homepage
          router.push("/");
        })
        .catch((err) => {
          console.log(err.response.data.message);
          setErrorText(err.response.data.message);
        });
    },
  });

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
          <Form onSubmit={formik.handleSubmit}>
            <h1>Welcome Back!</h1>
            <h2>Sign in</h2>

            <div className="icons">
              <img
                onClick={() => {
                  signIn("facebook", {
                    callbackUrl: "http://localhost:3000",
                  });
                }}
                src="/images/fb.svg"
                alt=""
              />
              <img
                onClick={() => {
                  signIn("google", {
                    callbackUrl: "http://localhost:3000",
                  });
                }}
                src="/images/google.svg"
                alt=""
              />
              <img
                onClick={() =>
                  signIn("linkedin", {
                    callbackUrl: "http://localhost:3000",
                  })
                }
                src="/images/linkedin.svg"
                alt=""
              />
            </div>

            <div className="fields">
              <CustomTextField
                required
                autoFocus
                id="email"
                name="email"
                type="email"
                label="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && formik.errors.email}
                placeholder="you@example.com"
                margin="normal"
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                helperText={
                  formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null
                }
                variant="standard"
              />
              <CustomTextField
                required
                placeholder="yourpassword"
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
                fullWidth={true}
                id="password"
                name="password"
                label="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                error={formik.touched.password && formik.errors.password}
                helperText={
                  formik.touched.password && formik.errors.password ? (
                    <div>{formik.errors.password}</div>
                  ) : null
                }
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

            {errorText && (
              <ErrorBox>
                <p>{errorText}</p>
              </ErrorBox>
            )}

            <Footer>
              <Button type="submit">Sign In</Button>
              <p>
                New User?{" "}
                <Link href="/signup">
                  <StyledLink>SignUp</StyledLink>
                </Link>
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

export default Signin;

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
    width: 100%;
    height: 100%;
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

const Form = styled.form`
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
  /* label.Mui-focused {
    color: gray;
  } */

  label {
    font-family: "Inter", sans-serif;
  }

  /* .MuiInput-underline:after {
    border-bottom-color: gray;
  } */
`;

const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* button {
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
  } */
  span {
    font-weight: bold;
    color: #f26a7e;
  }
`;

const ErrorBox = styled.div`
  background-color: #f86d6d;
  color: #fff;
  padding: 17px;
`;

const StyledLink = styled.a`
  color: #f26a7e;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  &:active {
    transform: scale(0.8);
  }
`;
