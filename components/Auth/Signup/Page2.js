import React, { useState, useEffect } from "react";
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
  Box,
  SubBox,
  Text,
  TextWrap,
  Pink1,
} from "./styles/Signup.styled";
import Link from "next/link";
import { Button } from "@/common/styles/OutlineBtn.styled";
import axios from "../../../utils/axios";
import axios1 from "axios";

function Page2({ page, setPage, email, mobile }) {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [five, setFive] = useState("");
  const [six, setSix] = useState("");
  const [resend, setResend] = useState(false);

  async function sendOtpTOUser(mobile) {
    const template = "6069426a75253726a5582ae5";
    const apiKey = "225232A3aN25Eko5b44538b";
    const sendotp =
      "https://api.msg91.com/api/v5/otp?template_id=" +
      template +
      "&mobile=" +
      mobile +
      "&authkey=" +
      apiKey;
    // let request_options1 = {
    //   method: "get",
    //   url: sendotp,
    // };

    let otpResponse = await axios1(sendotp);
    console.log(otpResponse.data);
  }

  const handleSubmit = async () => {
    await axios
      .post("/otp/verify", {
        email: `${email}`,
        otp: `${one + two + three + four + five + six}`,
      })
      .then((res) => {
        console.log(res);
        // setPage(page + 1);
      })
      .catch((err) => console.log(err));
    console.log(one + two + three + four + five + six);
    sendOtpTOUser(mobile);
  };

  // resend text delay
  const [currentCount, setCount] = useState(10);
  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    if (currentCount <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);
  console.log(currentCount);

  const handleResendEmail = async () => {
    await axios
      .post("/otp/resend", {
        email: `${email}`,
      })
      .then((res) => {
        setResend(true);
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

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
          Enter the 6 digit code sent to <span>{email}</span> for verification
        </Text>

        <Box>
          <SubBox>
            <input
              type="text"
              value={one}
              onChange={(e) => setOne(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <input
              type="text"
              value={two}
              onChange={(e) => setTwo(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <input
              type="text"
              value={three}
              onChange={(e) => setThree(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <input
              type="text"
              value={four}
              onChange={(e) => setFour(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <input
              type="text"
              value={five}
              onChange={(e) => setFive(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
          <SubBox>
            <input
              type="text"
              value={six}
              onChange={(e) => setSix(e.target.value)}
            />
            <img src="/auth/signup/line-signup.svg" alt="line"></img>
          </SubBox>
        </Box>
        <TextWrap>
          {resend ? (
            <SignupText>
              We have resend you the otp,
              <Pink1>please check your email.</Pink1>
            </SignupText>
          ) : (
            <>
              {currentCount < 1 ? (
                <SignupText>
                  Didn’t receive a code?{" "}
                  <span onClick={handleResendEmail}>
                    <Pink1>Resend OTP</Pink1>
                  </span>
                </SignupText>
              ) : (
                ""
              )}
            </>
          )}
        </TextWrap>

        <Wrap>
          <Button onClick={handleSubmit}>Verify</Button>
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
