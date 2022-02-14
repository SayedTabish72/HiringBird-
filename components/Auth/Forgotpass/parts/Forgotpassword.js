import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Letterres,
  HiringBird,
  Mailimg,
  Donthaveacc,
  Signinbtn1,
  Arrow,
  Lighttext,
  Leftvector,
  Regmail,
  Rightvector,
  Signupblock,
  Imageblock,
  Siginupmain,
  Fpimg,
  Toptextsignin,
  Secondtext,
  Siginblock,
  Thirdtext,
  Regemail,
  Signinbtn,
  Input,
  Skilzenlogo,
  Letushelp,
  Forgotpass,
  Mention,
  Line1,
  Or,
  Contactnum,
  Input2,
  Line2,
  Checkmail,
  Enterbut,
  Hiringres,
  Forgotpassmail,
  Regemobno,
  Fillin1,
  Fillin2,
} from "./styles/Forgotpassword.styled";
import leftvector from "../icons/leftvector.svg";
import rightvector from "../icons/rightvector.svg";
import skilzenlogo from "../icons/skilzenlogo.svg";
import forgotpass from "../icons/forgotpass.svg";
import hiring from "../icons/HiringBird.svg";
import arrow from "../icons/arrow.svg";
import fp from "../icons/fp.svg";
import mailsvg from "../icons/forgotpassmailsvgphoto.jpg";

import { useState } from "react";
import axios from "axios";
import router, { useRouter } from "next/router";
const forgotpassword = () => {
  const router = useRouter();
  const [fname, setFname] = useState("");
  // const [lname, setLname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [pass, setpass] = useState("");
  // const [repass, setrepass] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.email,
    };
    axios
      .post("forgot", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onCreateuser = (e) => {
    e.preventDefault();
    const userdata = {
      name: fname,
      email: email,
      password: pass,
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
    <>
      <head>
        <Mailimg>
          <Image className="fp" src={fp}></Image>
        </Mailimg>
      </head>
      <Hiringres></Hiringres>
      <Leftvector>
        <Image src={leftvector}></Image>
      </Leftvector>
      <Rightvector>
        <Image src={rightvector}></Image>
      </Rightvector>
      <Siginupmain>
        <Imageblock></Imageblock>

        <Fpimg>
          <Image src={forgotpass}></Image>
        </Fpimg>
        <Skilzenlogo>
          <Link href="/">
            <Image src={skilzenlogo}></Image>
          </Link>
        </Skilzenlogo>
        <HiringBird>
          <Image src={hiring}></Image>
        </HiringBird>
        <Letushelp>Let us help!</Letushelp>

        <Letterres>
          <Image src={mailsvg}></Image>
        </Letterres>
        <Arrow>
          <Image src={arrow}></Image>
        </Arrow>
        <Forgotpass>Forgot Password</Forgotpass>
        <Mention>
          Mention your Registered Email/mobile number to get the verification
          code. *
        </Mention>
        <Lighttext>
          Enter your Registered email or phone number to recieve a code
        </Lighttext>
        <Regmail>Registered Email id*</Regmail>
        <Input
          placeholder="someone@gmail.com"
          type="email"
          onChange={(e) => setemail(e.target.value)}
        ></Input>
        <Line1></Line1>
        <Or>OR</Or>
        <Contactnum>Contact Number</Contactnum>
        <Regemobno>Registered Mobile Number *</Regemobno>
        <Fillin1></Fillin1>

        <Input2
          onChange={(e) => setphone(e.target.value)}
          placeholder="87XX7689X"
        ></Input2>
        <Line2></Line2>
        <Checkmail>Check you Email/Text to get the code</Checkmail>
        <Signinbtn>Enter</Signinbtn>
        <Signinbtn1>Continue</Signinbtn1>
        <Donthaveacc>
          Dont have an account ?{" "}
          <span style={{ textDecoration: "none", color: "#f26a7e" }}>
            <Link style={{ color: "red" }} href="/signup">
              Sign up
            </Link>
          </span>
        </Donthaveacc>
      </Siginupmain>
    </>
  );
};

export default forgotpassword;
