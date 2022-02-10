import React from "react";
import Link from "next/link";
import { useState } from "react";
import {
  LeftDiv,
  RightDiv,
  SignupImg,
  Logo,
  Heading,
  SubHeading,
  IconsDiv,
  Icon,
  Info,
  Star,
  Input,
  InputName,
  InputField,
  InputSeperate,
  CheckboxContainer,
  CheckboxField,
  CheckboxText,
  SignupText,
  SignupButton,
  Wrap,
  Pink,
  OuterContainer,
  Split,
  Blob1,
  Blob2,
} from "./styles/Signup.styled";
import { signIn } from "next-auth/react";
import axios from "../../../utils/axios";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");

  const onCreateuser = (e) => {
    e.preventDefault();
    const userdata = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: pass,
      mobileNumber: phone,
      countryCode: "+91",
      userType: "student",
    };

    axios
      .post("/register", userdata)
      .then((res) => {
        console.log(res.data);
        router.push("/signin");
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };

  return (
    <OuterContainer>
      <Split>
        <LeftDiv>
          <Logo src="/auth/signup/hiringbird.png" />
          <SignupImg src="/auth/signup/vector.svg" />
        </LeftDiv>
        <RightDiv>
          <Heading>Lets get you started!</Heading>
          <SubHeading>Sign Up</SubHeading>
          <IconsDiv>
            <Icon
              onClick={() => {
                signIn("facebook", {
                  callbackUrl: "http://localhost:3000",
                });
              }}
              src="/images/fb.svg"
            />
            <Icon
              onClick={() => {
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                });
              }}
              src="/images/google.svg"
            />
            <Icon
              onClick={() =>
                signIn("linkedin", {
                  callbackUrl: "http://localhost:3000",
                })
              }
              src="/images/linkedin.svg"
            />
          </IconsDiv>
          <Info>
            <Input>
              <InputName>
                First Name <Star>*</Star>
              </InputName>
              <InputField
                type="text"
                placeholder="John"
                onChange={(e) => setFname(e.target.value)}
                autocomplete="off"
              ></InputField>
            </Input>
            <Input>
              <InputName>
                Last Name <Star>*</Star>
              </InputName>
              <InputField
                type="text"
                placeholder="Doe"
                onChange={(e) => setLname(e.target.value)}
                autocomplete="off"
              ></InputField>
            </Input>
          </Info>
          <Info>
            <Input>
              <InputName>
                Email Address <Star>*</Star>
              </InputName>
              <InputField
                type="email"
                placeholder="Johndoe@gmail.com"
                onChange={(e) => setemail(e.target.value)}
                autocomplete="off"
              ></InputField>
            </Input>
            <Input>
              <InputName>
                Mobile Number <Star>*</Star>
              </InputName>
              <InputField
                type="text"
                placeholder="7007409205"
                onChange={(e) => setphone(e.target.value)}
              ></InputField>
            </Input>
          </Info>
          <InputSeperate>
            <InputName>
              Password <Star>*</Star>
            </InputName>
            <InputField
              type="text"
              placeholder="abrakadabra"
              onChange={(e) => setpass(e.target.value)}
            ></InputField>
          </InputSeperate>
          <InputSeperate>
            <InputName>
              Re-enter Password <Star>*</Star>
            </InputName>
            <InputField
              type="password"
              placeholder="************"
              autoComplete="new-password"
              // onChange={(e) => setrepass(e.target.value)}
            ></InputField>
          </InputSeperate>
          <CheckboxContainer>
            <CheckboxField type="checkbox"></CheckboxField>
            <CheckboxText>Show Password</CheckboxText>
          </CheckboxContainer>

          <Wrap>
            <SignupButton onClick={onCreateuser}>Sign Up</SignupButton>
            <SignupText>
              Already on Skilzen ? Go to{" "}
              <Link href="/signin">
                <Pink>Sign In</Pink>
              </Link>
            </SignupText>
          </Wrap>
        </RightDiv>
      </Split>
      <Blob1>
        <img src="/images/blob1.svg" />
      </Blob1>
      <Blob2>
        <img src="/images/blob2.svg" />
      </Blob2>
    </OuterContainer>
  );
}

export default Signup;
