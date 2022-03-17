import { Button } from "@/common/styles/OutlineBtn.styled";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import OtpInput from "./lib/components/OtpInput";
import ResendOTP from "./lib/components/ResendOTP";
import {
  Box,
  Heading,
  LeftDiv,
  Logo,
  Pink,
  Pink1,
  RightDiv,
  SignupImg,
  SignupText,
  Split,
  SubHeading,
  Text,
  TextWrap,
  Wrap,
} from "./styles/Signup.styled";

const msg91_baseurl = "https://api.msg91.com/api/v5/otp";
const msg91_authkey = "225232A3aN25Eko5b44538b";
const msg91_template_id = "6069426a75253726a5582ae5";
const msg91_mobile = "917034286905";

function Page3({ page, setPage }) {
  const [OTP, setOTP] = useState("");

  useEffect(() => {
    sendOtp();
  }, []);

  const sendOtp = () => {
    axios
      .get(
        `${msg91_baseurl}?template_id=${msg91_template_id}&mobile=${msg91_mobile}&authkey=${msg91_authkey}`
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const verifyOtp = () => {
    axios
      .get(
        `${msg91_baseurl}/verify?authkey=${msg91_authkey}&mobile=${msg91_mobile}&otp=${OTP}`
      )
      .then((res) => {
        console.log(res.data);
        setPage(page + 1);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resendOtp = () => {
    axios
      .get(
        `${msg91_baseurl}/retry?authkey=${msg91_authkey}&mobile=${msg91_mobile}`
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <OtpInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={5}
            otpType="number"
            disabled={false}
            // secure
          />
        </Box>

        <TextWrap>
          <SignupText>
            Didn’t receive a code?
            <ResendOTP
              renderTime={() => React.Fragment}
              renderButton={(buttonProps) => {
                return buttonProps.remainingTime !== 0 ? (
                  <Pink1>
                    {`Please wait for ${buttonProps.remainingTime} sec`}
                  </Pink1>
                ) : (
                  <Pink1 onClick={resendOtp}>Resend OTP</Pink1>
                );
              }}
            />
          </SignupText>
        </TextWrap>

        <Wrap>
          <Button onClick={verifyOtp}>Verify</Button>
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
