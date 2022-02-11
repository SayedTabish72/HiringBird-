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
  Pink,
  Split,
  Text,
  Box,
  Wrap1,
} from "./styles/Signup.styled";

import Link from "next/link";

function Page4() {
  return (
    <Split>
      <LeftDiv>
        <Logo src="/auth/signup/hiringbird.png" />
        <SignupImg src="/auth/signup/signup-img4.svg" />
      </LeftDiv>
      <RightDiv>
        <Heading>All Set Up!</Heading>
        <SubHeading>Upload Resume</SubHeading>
        <Text style={{ color: "#404366" }}>
          Upload your resume to start applying directly.
        </Text>

        <Box>
          {/* upload button */}
          <div className="customFileInput">
            <button type="button">
              Upload
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                />
              </svg>
            </button>
            <input
              style={{ display: "none" }}
              type="file"
              name=""
              id=""
              accept=".docx,.pdf"
            />
          </div>
        </Box>

        <Wrap1>
          <SignupButton>Sign Up</SignupButton>
          <SignupText>
            Already on HiringBird ? Go to{" "}
            <Link href="/signin">
              <Pink>Sign In</Pink>
            </Link>
          </SignupText>
        </Wrap1>
      </RightDiv>
    </Split>
  );
}

export default Page4;
