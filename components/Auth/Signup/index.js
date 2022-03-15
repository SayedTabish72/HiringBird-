import React from "react";

import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
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

import axios from "../../../utils/axios";
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
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
      {page === 1 ? (
        <Page1
          setPage={setPage}
          page={page}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        ""
      )}
      {page === 2 ? (
        <Page2
          setPage={setPage}
          page={page}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        ""
      )}
      {page === 3 ? <Page3 setPage={setPage} page={page} /> : ""}
      {page === 4 ? <Page4 setPage={setPage} page={page} /> : ""}
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
