import React from "react";
import {
  LeftDiv,
  RightDiv,
  SignupImg,
  Logo,
  Heading,
  SubHeading,
  SignupText,
  Wrap,
  Pink,
  Split,
  Text,
  Box,
  SubBox,
  TextWrap,
  Pink1,
} from "./styles/Signup.styled";
import Link from "next/link";
import { Button } from "@/common/styles/OutlineBtn.styled";

function Page3({ page, setPage }) {
  // const authKey = "225232A3aN25Eko5b44538b";
  // const templateId = "6069426a75253726a5582ae5";

  // fetch(
  //   `https://api.msg91.com/api/v5/otp?template_id=${templateId}&mobile=${mobile}&authkey=${authKey}`,
  //   { mode: "no-cors" }
  // )
  //   .then((res) => {
  //     console.log("Phone otp success");
  //     console.log(res);
  //     console.log("Phone otp success");
  //   })
  //   .catch((err) => {
  //     console.log("Phone otp failure");
  //     console.log(err);
  //     console.log("Phone otp failure");
  //   });

  return (
    <Split>
      <LeftDiv>
        <Logo src="/auth/signup/hiringbird.png" />
        <SignupImg src="/auth/signup/signup-img2.svg" />
      </LeftDiv>
      <RightDiv>
        <Heading>Lets get you started!</Heading>
        <SubHeading>Phone Verification</SubHeading>
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
          <Button onClick={() => setPage(page + 1)}>Verify</Button>
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

export default Page3;
