import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { Login } from "../../../api";
import {
  OuterContainer,
  Container,
  Split,
  Blob1,
  Blob2,
} from "./styles/Signin.styled";
import { useSelector } from "react-redux";

const Signin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const errors = useSelector((state) => state.auth.errors);
  console.log({ errors });
  const { id } = router.query;
  console.log({ id });

  const SIGN_IN = (e) => {
    e.preventDefault();

    dispatch(
      Login(
        {
          email,
          password,
        },
        id,
        router
      )
    );
  };

  return (
    <OuterContainer>
      <Container>
        <Split>
          <div className="left">
            <img className="logo" src="/images/skillzen-logo.svg" alt="" />
            <img className="vector" src="/images/signin-vector.png" alt="" />
          </div>

          <div className="right">
            <form onSubmit={SIGN_IN} className="form">
              <img
                className="hiringbird-logo"
                src="/images/hiringbird.png"
                alt=""
              />
              <h1>Welcome Back!</h1>
              <h2>Sign In</h2>
              <div className="icons">
                <img
                  onClick={() => {
                    signIn("facebook", {
                      callbackUrl: "http://localhost:3000",
                    });
                  }}
                  src="/images/fb.svg"
                  alt=""
                />
                <img
                  onClick={() => {
                    signIn("google", {
                      callbackUrl: "http://localhost:3000",
                    });
                  }}
                  src="/images/google.svg"
                  alt=""
                />
                <img
                  onClick={() =>
                    signIn("linkedin", {
                      callbackUrl: "http://localhost:3000",
                    })
                  }
                  src="/images/linkedin.svg"
                  alt=""
                />
              </div>

              <div className="text-field">
                <label htmlFor="">
                  Email <span>*</span>{" "}
                </label>
                <input
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="yourname@gmail.com"
                />
              </div>

              <div className="text-field">
                <label htmlFor="">
                  Password <span>*</span>{" "}
                </label>
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={`${showPass ? "text" : "password"}`}
                  placeholder="yourpassword"
                  autoComplete="new-password"
                />
               <Link href="/forgotpass"><p>Forgot Password?</p></Link>
                {/* checkbox */}
                <div className="checkbox-container">
                  <input
                    onChange={(e) => setShowPass(e.target.checked)}
                    type="checkbox"
                    name=""
                    id="password-checkbox"
                  />
                  <label htmlFor="">Show Password</label>
                </div>
                {/* checkbox */}
                <div className="checkbox-container">
                  <input type="checkbox" name="" id="loggedin-checkbox" />
                  <label htmlFor="">Keep me logged in</label>
                </div>

                <div
                  style={{
                    display: `${errors?.length != 0 ? "block" : "none"}`,
                  }}
                  className="error-box"
                >
                  {errors?.map((e, i) => (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: "-3px",
                      }}
                      key={i}
                    >
                      <div className="small-circle" />
                      <p>{e}</p>
                    </div>
                  ))}

                  <div className="circle"></div>
                </div>
              </div>

              <div className="button-container">
                <button>Sign In</button>
                <p>
                  Already on Skilzen ? Go to
                  <Link href="/signup">
                    <span> Sign Up</span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </Split>
      </Container>
      <Blob1>
        <img src="/images/blob1.svg" alt="universe" />
      </Blob1>
      <Blob2>
        <img src="/images/blob2.svg" alt="universe" />
      </Blob2>
    </OuterContainer>
  );
};

export default Signin;
