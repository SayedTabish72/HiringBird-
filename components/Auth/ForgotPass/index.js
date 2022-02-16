import { Button } from "@/common/styles/OutlineBtn.styled";
import React from "react";
import * as S from "./ForgotPass.styled";

function ForgotPass({ bindIndex, setBindIndex }) {
  return (
    <S.Wrapper>
      <h1>Let us help</h1>
      <h2>Forgot Password</h2>
      <p>
        Mention your Registered Email/mobile number to get the verification
        code.{" "}
      </p>

      <S.TextField>
        <label htmlFor="email">Registered Email</label>
        <input type="text" placeholder="someone@gmail.com" />
      </S.TextField>

      <h4>OR</h4>

      <S.TextField>
        <label htmlFor="email">Contact Number</label>
        <input type="text" placeholder="87XX7689X" />
      </S.TextField>

      <Button
        style={{
          alignSelf: "center",
          marginTop: "5.5em",
          marginBottom: "2em",
        }}
        padding="0.8em 1.5em"
        type="button"
        onClick={() => setBindIndex(1)}
      >
        Enter
      </Button>
      <S.DotsContainer>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: `${bindIndex === 0 ? "#F26A7E" : "#CDDBEA"}`,
          }}
          onClick={() => setBindIndex(0)}
        >
          <rect
            width="8.82353"
            height="8.82353"
            rx="4.41176"
            transform="matrix(-1 0 0 1 8.82422 0)"
            fill=""
          />
        </svg>

        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          onClick={() => setBindIndex(1)}
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: `${bindIndex === 1 ? "#F26A7E" : "#CDDBEA"}`,
          }}
        >
          <rect
            width="8.82353"
            height="8.82353"
            rx="4.41176"
            transform="matrix(-1 0 0 1 9 0)"
            fill=""
          />
        </svg>
      </S.DotsContainer>
    </S.Wrapper>
  );
}

export default ForgotPass;
