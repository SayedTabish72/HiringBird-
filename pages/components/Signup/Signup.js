import React from "react";
import Link from "next/link";
import {
  Container,
  Image1,
  Image2,
  MiniContainer,
  LeftDiv,
  RightDiv,
  Cross,
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
} from "./styles/Signup.styled";
import { signIn } from "next-auth/react";

function Signup() {
  return (
    <Container>
      <Image1 src="/bg1.svg" />
      <Image2 src="/bg2.svg" />
      <MiniContainer>
        <LeftDiv>
          <Logo src="/skilzenlogo.png" />
          <SignupImg src="/signup.png" />
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
              src="/fb.svg"
            />
            <Icon
              onClick={() => {
                signIn("google", {
                  callbackUrl: "http://localhost:3000",
                });
              }}
              src="/google.svg"
            />
            <Icon
              onClick={() =>
                signIn("linkedin", {
                  callbackUrl: "http://localhost:3000",
                })
              }
              src="/linkedin.svg"
            />
          </IconsDiv>
          <Info>
            <Input>
              <InputName>
                Name <Star>*</Star>
              </InputName>
              <InputField type="text" placeholder="John"></InputField>
            </Input>
            <Input>
              <InputName>
                Last Name <Star>*</Star>
              </InputName>
              <InputField type="text" placeholder="Doe"></InputField>
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
              ></InputField>
            </Input>
            <Input>
              <InputName>
                Mobile Number <Star>*</Star>
              </InputName>
              <InputField type="number" placeholder="7007409205"></InputField>
            </Input>
          </Info>
          <InputSeperate>
            <InputName>
              Password <Star>*</Star>
            </InputName>
            <InputField type="text" placeholder="abrakadabra"></InputField>
          </InputSeperate>
          <InputSeperate>
            <InputName>
              Re-enter Password <Star>*</Star>
            </InputName>
            <InputField type="password" placeholder="************"></InputField>
          </InputSeperate>
          <CheckboxContainer>
            <CheckboxField type="checkbox"></CheckboxField>
            <CheckboxText>Show Password</CheckboxText>
          </CheckboxContainer>

          <Wrap>
            <SignupButton>Sign Up</SignupButton>
            <SignupText>
              Already on Skilzen ? Go to{" "}
              <Link href="/login">
                <Pink>Sign In</Pink>
              </Link>
            </SignupText>
          </Wrap>
        </RightDiv>
        <Cross src="/cross.svg" />
      </MiniContainer>
    </Container>
  );
}

export default Signup;
