import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as S from "./styles/Signin.styled";
import { useSelector } from "react-redux";
import { signin } from "../../../redux/actions/auth";
import Button from "@/ui/Button";
import Loader from "@/ui/Loader";

const Signin = () => {
  // router query
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const signinErrors = useSelector((state) => state.auth.signinErrors);
  const signinStatus = useSelector((state) => state.auth.signinStatus);
  console.log(
    "🚀 ~ file: index.js ~ line 19 ~ Signin ~ signinStatus",
    signinStatus
  );
  console.log(
    "🚀 ~ file: index.js ~ line 18 ~ Signin ~ signinErrors",
    signinErrors
  );

  // states
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const [showPass, setShowPass] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  };

  const handleChange = (event) => {
    event.persist();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errObj = validate(values);
    setErrors(errObj);

    if (Object.values(errObj).every((el) => el === null)) {
      dispatch(signin(values, router));
    }
  };

  return (
    <S.OuterContainer>
      <S.Split>
        <div className="left">
          <Link href="/">
            <img className="logo" src="/auth/signin/hiringbird.png" alt="" />
          </Link>
          <img className="vector" src="/auth/signin/vector2.svg" alt="" />
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

            <div className="text-field">
              <label htmlFor="">
                Email <span>*</span>{" "}
              </label>
              <input
                value={values.email}
                onChange={handleChange}
                type="text"
                placeholder="yourname@gmail.com"
                style={{
                  borderBottom: errors.email && "1px solid red",
                }}
                name="email"
              />
              {errors.email && (
                <S.ErrorBox>
                  <p>{errors.email}</p>
                  <svg width="20" height="20">
                    <circle cx="50%" cy="50%" r="8" fill="red" />
                  </svg>
                </S.ErrorBox>
              )}
            </div>

            <div className="text-field">
              <label htmlFor="">
                Password <span>*</span>{" "}
              </label>
              <input
                value={values.password}
                onChange={handleChange}
                type={`${showPass ? "text" : "password"}`}
                placeholder="yourpassword"
                style={{
                  borderBottom: errors.password && "1px solid red",
                }}
                name="password"
              />
              {errors.password && (
                <S.ErrorBox>
                  <p>{errors.password}</p>
                  <svg width="20" height="20">
                    <circle cx="50%" cy="50%" r="8" fill="red" />
                  </svg>
                </S.ErrorBox>
              )}
            </div>

            <div className="forgotPass">
              <Link href="/forgotPassword">Forgot Password?</Link>
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

            {signinErrors && (
              <S.ErrorBox>
                <p>{signinErrors}</p>
                <svg width="20" height="20">
                  <circle cx="50%" cy="50%" r="8" fill="red" />
                </svg>
              </S.ErrorBox>
            )}

            <div className="button-container">
              {signinStatus === "loading" ? (
                <Button size="lg" variant="filled">
                  <Loader />
                </Button>
              ) : (
                <Button size="lg" variant="outlined">
                  Sign In
                </Button>
              )}

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
