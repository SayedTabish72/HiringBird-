import React, { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useDispatch } from "react-redux";
import * as S from "./styles/Signin.styled";
import { useSelector } from "react-redux";
import { signin } from "../../../redux/actions/auth";
import { Button } from "@/common/styles/OutlineBtn.styled";

const Signin = () => {
  // router query
  const router = useRouter();

  // redux
  const dispatch = useDispatch();
  const signinErr = useSelector((state) => state.auth.error.signin);

  // states
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  console.log({ values });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  console.log({ errors });

  const [showPass, setShowPass] = useState(false);
  const { id } = router.query;

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
    <S.Form onSubmit={handleSubmit}>
      <img className="hiringbird-logo" src="/images/hiringbird.png" alt="" />
      <h1>Welcome Back!</h1>
      <h2>Sign In</h2>
      {/* <div className="icons">
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
      </div> */}

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

      {signinErr && (
        <S.ErrorBox>
          <p>{signinErr}</p>
          <svg width="20" height="20">
            <circle cx="50%" cy="50%" r="8" fill="red" />
          </svg>
        </S.ErrorBox>
      )}

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
  );
};

export default Signin;
