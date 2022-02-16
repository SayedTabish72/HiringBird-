import { Button } from "@/common/styles/OutlineBtn.styled";
import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

function PasswordReset({ bindIndex, setBindIndex }) {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    // redirect to login page
    router.push("/signin");
  }

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Almost done!</h1>
      <h2>Password Reset</h2>

      <TextField>
        <label htmlFor="email">Registered Email</label>
        <input type="text" placeholder="someone@gmail.com" />
      </TextField>

      <h4>OR</h4>

      <TextField>
        <label htmlFor="email">Contact Number</label>
        <input type="text" placeholder="87XX7689X" />
      </TextField>

      <Button
        style={{
          alignSelf: "center",
          marginTop: "5.5em",
          marginBottom: "2em",
        }}
        padding="0.8em 1.5em"
        type="submit"
      >
        Save
      </Button>

      <DotsContainer>
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
          style={{
            fill: `${bindIndex === 1 ? "#F26A7E" : "#CDDBEA"}`,
          }}
          onClick={() => setBindIndex(1)}
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="8.82353"
            height="8.82353"
            rx="4.41176"
            transform="matrix(-1 0 0 1 9 0)"
            fill=""
          />
        </svg>
      </DotsContainer>
    </Wrapper>
  );
}

export default PasswordReset;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: min(90%, 50rem);
  overflow-y: auto;
  margin-inline: auto;

  h1 {
    color: #ec1f28;
    font-weight: 600;
    font-size: 38px;
    margin-bottom: 0.3em;
    @media (max-width: 511px) {
      font-size: 30px;
    }
  }
  h2 {
    color: #404366;
    font-size: 27px;
    margin-bottom: 3.8em;
    font-weight: 600;
    @media (max-width: 511px) {
      font-size: 20px;
    }
  }

  h4 {
    font-size: 14px;
    margin: 1.5em 0;
    color: #f26a7e;
    align-self: center;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #404366;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 0.76489px solid #cddbea;
    padding: 0.5rem 0.1em;

    /* placeholder color */
    ::-webkit-input-placeholder {
      font-size: 14px;
      color: #cddbea;
    }
  }
`;

export const DotsContainer = styled.div`
  align-self: center;
  display: flex;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }
`;
