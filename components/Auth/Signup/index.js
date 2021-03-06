import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "../../../utils/axios";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";
import Page4 from "./Page4";
import { Blob1, Blob2, OuterContainer } from "./styles/Signup.styled";

function Signup() {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [pass, setpass] = useState("");

  const onCreateuser = (e) => {
    e.preventDefault();
    const userdata = {
      firstName: fname,
      lastName: lname,
      email: email,
      password: pass,
      mobileNumber: mobile,
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
          setMobile={setMobile}
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
          mobile={mobile}
        />
      ) : (
        ""
      )}
      {page === 3 ? (
        <Page3 setPage={setPage} page={page} mobile={mobile} />
      ) : (
        ""
      )}
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
