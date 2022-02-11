import React from "react";
import {
  LeftDiv,
  RightDiv,
  SignupImg1,
  Logo,
  Heading,
  SubHeading,
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
  Split,
} from "./styles/Signup.styled";
import Link from "next/link";

function Page1({ page, setPage }) {
  return (
    <Split>
      <LeftDiv>
        <Logo src="/auth/signup/hiringbird.png" />
        <SignupImg1 src="/auth/signup/signup-img1.svg" />
      </LeftDiv>
      <RightDiv>
        <Heading>Lets get you started!</Heading>
        <SubHeading>Sign Up</SubHeading>

        <Info>
          <Input>
            <InputName>
              First Name <Star>*</Star>
            </InputName>
            <InputField
              type="text"
              placeholder="John"
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
              autocomplete="off"
            ></InputField>
          </Input>
          <Input>
            <InputName>
              Mobile Number <Star>*</Star>
            </InputName>
            <InputField type="text" placeholder="7007409205"></InputField>
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
          <InputField
            type="password"
            placeholder="************"
            autoComplete="new-password"
          ></InputField>
        </InputSeperate>
        <CheckboxContainer>
          <CheckboxField type="checkbox"></CheckboxField>
          <CheckboxText>Show Password</CheckboxText>
        </CheckboxContainer>

        <Wrap>
          <SignupButton onClick={() => setPage(page + 1)}>Finish</SignupButton>
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

export default Page1;
