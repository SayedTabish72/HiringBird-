import React from "react";
import {
  LeftDiv,
  RightDiv,
  SignupImg,
  Logo,
  Heading,
  SubHeading,
  SignupText,
  SignupButton,
  Wrap,
  Pink,
  Split,
  Box,
  SubBox,
  Text,
  TextWrap,
  Pink1,
} from "./styles/Signup.styled";
import Link from "next/link";

function Page2({ page, setPage }) {
  return (
    <Split>
      <LeftDiv>
        <Logo src="/auth/signup/hiringbird.png" />
        <SignupImg src="/auth/signup/signup-img2.svg" />
      </LeftDiv>
      <RightDiv>
        <Heading>Lets get you started!</Heading>
        <SubHeading>E-mail Verification</SubHeading>
        <Text>
          Enter the 4 digit code sent to <span>vikrant.negi74@gmail.com</span>{" "}
          for verification
        </Text>

        <Box>
          <SubBox>
            <h1>*</h1>
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <h1>*</h1>
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <h1>*</h1>
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <h1>0</h1>
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
        </Box>
        <TextWrap>
          <SignupText>
            Didn’t receive a code?{" "}
            <Link href="/signin">
              <Pink1>Resend OTP</Pink1>
            </Link>
          </SignupText>
        </TextWrap>

        <Wrap>
          <SignupButton onClick={() => setPage(page + 1)}>Verify</SignupButton>
          <SignupText>
            Already on HiringBird ? Go to{" "}
            <Link href="/signin">
              <Pink>Sign In</Pink>
            </Link>
          </SignupText>
        </Wrap>
      </RightDiv>
    </Split>
  );
}

export default Page2;
