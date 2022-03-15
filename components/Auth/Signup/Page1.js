import React, { useState } from "react";
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
  SignupText,
  Wrap,
  Pink,
  Split,
} from "./styles/Signup.styled";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "@/common/styles/OutlineBtn.styled";
import { useDispatch } from "react-redux";
import { signup } from "../../../redux/actions/auth";

function Page1({ page, setPage, setEmail }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [showPass, setShowPass] = useState(false);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobileNumber: "",
    userType: "recruiter",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(values, router));
    setPage(page + 1);
  };

  const handleChange = (e) => {
    e.persist();
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  };

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
              required
              type="text"
              placeholder="John"
              autocomplete="off"
              onChange={handleChange}
              name="firstName"
            ></InputField>
          </Input>
          <Input>
            <InputName>
              Last Name <Star>*</Star>
            </InputName>
            <InputField
              required
              type="text"
              placeholder="Doe"
              autocomplete="off"
              onChange={handleChange}
              name="lastName"
            ></InputField>
          </Input>
        </Info>
        <Info>
          <Input>
            <InputName>
              Email Address <Star>*</Star>
            </InputName>
            <InputField
              required
              type="email"
              placeholder="Johndoe@gmail.com"
              autocomplete="off"
              name="email"
              onChange={handleChange}
            ></InputField>
          </Input>
          <Input>
            <InputName>
              Mobile Number <Star>*</Star>
            </InputName>
            <InputField
              required
              type="text"
              placeholder="7007409205"
              name="mobileNumber"
              onChange={handleChange}
            ></InputField>
          </Input>
        </Info>
        <InputSeperate>
          <InputName>
            Password <Star>*</Star>
          </InputName>
          <InputField
            required
            type="text"
            placeholder="abrakadabra"
            name="password"
            onChange={handleChange}
          ></InputField>
        </InputSeperate>
        <InputSeperate>
          <InputName>
            Re-enter Password <Star>*</Star>
          </InputName>
          <InputField
            required
            type={`${showPass ? "text" : "password"}`}
            placeholder="************"
            autoComplete="new-password"
          ></InputField>
        </InputSeperate>
        <div className="checkbox-container">
          <input
            type="checkbox"
            id="password-checkbox"
            onChange={(e) => setShowPass(e.target.checked)}
          />
          <label htmlFor="password-checkbox">Show Password</label>
        </div>

        <Wrap>
          {/* <SignupButton onClick={() => setPage(page + 1)}>Finish</SignupButton> */}
          <Button onClick={handleSubmit}>Finish</Button>
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
