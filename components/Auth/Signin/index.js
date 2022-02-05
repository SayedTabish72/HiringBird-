import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as S from "./styles/Signin.styled";
import { useSelector } from "react-redux";
import { signin } from "../../../redux/actions/auth";
import { Button } from "../../common/styles/outlineBtn.styled";

const Signin = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const errors = useSelector((state) => state.auth.errors);
  const { id } = router.query;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };
    dispatch(signin(formData, id, router));
  };

  return (
    <S.OuterContainer>
      <S.Split>
        <div className="left">
          <img className="logo" src="/images/skillzen-logo.svg" alt="" />
          <img className="vector" src="/auth/signin/vector.svg" alt="" />
        </div>

        <div className="right">
          <S.Form onSubmit={handleSubmit}>
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
            </div>

            <div className="forgotPass">
              <Link href="/forgotpass">Forgot Password?</Link>
            </div>

            {/* checkbox */}
            <div className="checkbox-container">
              <input
                onChange={(e) => setShowPass(e.target.checked)}
                type="checkbox"
                id="password-checkbox"
              />
              <label htmlFor="password-checkbox">Show Password</label>
            </div>

            {/* checkbox */}
            <div className="checkbox-container">
              <input type="checkbox" name="" id="loggedin-checkbox" />
              <label htmlFor="loggedin-checkbox">Keep me logged in</label>
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

            <div className="button-container">
              <Button
                style={{
                  marginBottom: "1rem",
                }}
              >
                Sign In
              </Button>
              <p>
                Already on Skilzen ? Go to
                <Link href="/signup">
                  <span> Sign Up</span>
                </Link>
              </p>
            </div>
          </S.Form>
        </div>
      </S.Split>
      <S.Blob1>
        <img src="/images/blob1.svg" alt="universe" />
      </S.Blob1>
      <S.Blob2>
        <img src="/images/blob2.svg" alt="universe" />
      </S.Blob2>
    </S.OuterContainer>
  );
};

export default Signin;