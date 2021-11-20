import React, { useState } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import { signIn } from "next-auth/react";
import Link from "next/link";

const Signin = () => {
  const router = useRouter();
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const { id } = router.query;
  console.log({ id });

  const SIGN_IN = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8800/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("access_token", res.data.authToken.accessToken);
        if (id) {
          router.push(`/internship/questions/${id}`);
        } else {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err?.response?.data?.message);
        if (Array.isArray(err?.response?.data?.message)) {
          setErrors(err.response.data.message);
        } else {
          setErrors([err.response.data.message]);
        }
      });
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
                />
                <p>Forgot Password?</p>
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
                    display: `${errors.length != 0 ? "block" : "none"}`,
                  }}
                  className="error-box"
                >
                  {errors?.map((e, i) => (
                    <div
                      style={{ display: "flex", alignItems: "center" }}
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

const Container = styled.div`
  height: 80%;
  width: min(88%, 80rem);
  background-color: #fff;
  margin-inline: auto;
  border-radius: 20px;
  overflow: hidden;
  z-index: 99;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;
const Split = styled.div`
  display: flex;
  height: 100%;
  .left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1.2em 0 2.3em 0;
    height: 100%;
    background-color: #fff8f8;
    width: 31.5rem;
    @media (max-width: 1100px) {
      display: none;
    }
    .logo {
      margin-left: 1em;
    }
    .vector {
      display: block;
      width: 100%;
      margin-inline: auto;
      padding: 0 3em;
    }
  }

  .right {
    flex: 1;
    /* background-color: lightgray; */
    display: flex;
    align-items: center;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
      scrollbar-width: none;
    }
    .form {
      * {
        --tw-space-y-reverse: 0;
        margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
        margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
      }
      .hiringbird-logo {
        display: none;
        @media (max-width: 1100px) {
          display: block;
        }
      }
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #fff;
      height: 85%;
      width: 80%;
      @media (max-width: 600px) {
        width: 90%;
        height: 90%;
      }
      margin-inline: auto;
      h1 {
        font-weight: 600;
        font-size: 42px;
        color: #ec1f28;
      }
      h2 {
        font-weight: 600;
        font-size: 32px;
        color: #404366;
      }
      .icons {
        * {
          margin-right: 0.8em;
        }
        margin: 1em 0;
      }
      .button-container {
        margin-top: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        button {
          border: 1px solid red;
          padding: 15px 25px;
          border-radius: 5px;
          background-color: #fff;
          margin-bottom: 0.6em;
          cursor: pointer;
        }
        p {
        }
        span {
          color: #f26a7e;
          cursor: pointer;
        }
      }
      .text-field {
        display: flex;
        flex-direction: column;
        width: 100%;
        label {
          font-weight: 500;
          font-size: 14px;
          color: #404366;
        }
        p {
          font-size: 12px;
          line-height: 15px;
          text-align: right;
          color: #404366;
        }
        input {
          border: none;
          padding: 0.35rem 0;
          outline: none;
          font-size: 14px;
          line-height: 17px;
          color: #404366;
          font-family: "Inter", "san-serfi";
          border-bottom: 0.76489px solid #cddbea;
          &::placeholder {
            color: #c9cbe2;
            opacity: 1;
          }
        }
        span {
          color: #ff5f66;
        }
        .error-box {
          margin-top: 0.9em;
          background: #fff9fa;
          border: 1px solid #ec1f28;
          box-sizing: border-box;
          border-radius: 3px;
          position: relative;
          padding: 0.6rem 0;
          display: flex;
          flex-direction: column;
          .small-circle {
            height: 5px;
            width: 5px;
            background-color: #196abc;
            border-radius: 50%;
            margin-left: 0.8em;
            margin-right: 0.5em;
          }
          p {
            font-size: 12px;
            text-align: left;
            line-height: 15px;
            letter-spacing: 0.216454px;
            color: #395185;
          }
          .circle {
            position: absolute;
            top: 50%;
            left: -9px;
            transform: translateY(-60%);
            height: 16px;
            width: 16px;
            background-color: #ec1f28;
            border-radius: 50%;
          }
        }

        .checkbox-container {
          display: flex;
          align-items: center;
          input {
            &:checked {
              background: red;
            }
            margin-right: 0.7rem;
          }
        }
      }
    }
  }
`;

const OuterContainer = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
  position: relative;
`;

const Blob1 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Blob2 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  top: 0;
  right: 0;
`;
