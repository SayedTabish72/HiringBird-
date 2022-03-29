import { Button } from "@/common/styles/FilledBtn.styled";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

function InternshipError({ setShow }) {
  const internshipApplyError = useSelector(
    (state) => state.internship.internshipApplyError
  );

  return (
    <Wrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          alignSelf: "end",
          cursor: "pointer",
          marginBottom: "1.2em",
        }}
        onClick={() => setShow(false)}
      >
        <path
          d="M15 1L1 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L15 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <svg
        width="67"
        height="65"
        viewBox="0 0 67 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M35.8212 2.27093L65.8083 60.3351C66.7244 62.0537 65.4419 64.202 63.4875 64.202H3.51327C1.55891 64.202 0.27637 62.1151 1.19247 60.3351L31.1796 2.27093C32.1568 0.368187 34.844 0.368187 35.8212 2.27093Z"
          fill="#C9CBE2"
        />
        <path
          d="M63.5482 65H3.51288C2.29141 65 1.19208 64.3862 0.520272 63.3428C-0.151537 62.2993 -0.151537 61.0104 0.398125 59.9056L30.4463 1.90274C31.0571 0.736544 32.2175 0 33.5 0C34.7825 0 36.004 0.736544 36.5537 1.90274L66.6019 59.9056C67.1515 61.0104 67.1515 62.2993 66.4797 63.3428C65.869 64.3862 64.7697 65 63.5482 65ZM33.5 1.7186C32.8282 1.7186 32.2785 2.08687 31.9732 2.63928L1.92496 60.7035C1.6196 61.2559 1.68067 61.9311 1.98604 62.4221C2.29141 62.9745 2.84107 63.2814 3.51288 63.2814H63.5482C64.1589 63.2814 64.7086 62.9745 65.075 62.4221C65.3804 61.8697 65.4415 61.2559 65.1361 60.7035L35.0879 2.70066C34.7825 2.08687 34.1718 1.7186 33.5 1.7186Z"
          fill="#404366"
        />
        <path
          d="M33.8652 10.4958L58.3557 57.8188C58.5389 58.187 58.2946 58.6167 57.8671 58.6167H8.88607C8.45856 58.6167 8.21427 58.187 8.39749 57.8188L32.888 10.4958C33.0712 10.0662 33.6209 10.0662 33.8652 10.4958Z"
          fill="white"
        />
        <path
          d="M57.8072 59.5372H8.88728C8.39869 59.5372 7.9101 59.2917 7.66581 58.862C7.42152 58.4324 7.36044 57.88 7.60474 57.4503L32.0952 10.1274C32.3395 9.63636 32.8281 9.32947 33.3778 9.32947C33.9274 9.32947 34.416 9.63636 34.6603 10.1274L59.1508 57.4503C59.3951 57.88 59.3951 58.4324 59.0898 58.862C58.7844 59.2303 58.2958 59.5372 57.8072 59.5372ZM9.37587 57.8186H57.3797L33.3167 11.4163L9.37587 57.8186Z"
          fill="#404366"
        />
        <path
          d="M33.379 22.4032C35.2723 22.4032 36.7992 23.9377 36.677 25.7176L35.2723 45.6043C35.2113 46.525 34.3562 47.2616 33.379 47.2616C32.4019 47.2616 31.5468 46.525 31.4858 45.6043L30.0811 25.7176C29.9589 23.9377 31.4858 22.4032 33.379 22.4032Z"
          fill="#F26A7E"
        />
        <path
          d="M33.7437 54.6269C35.0873 54.6269 36.1867 53.522 36.1867 52.1717C36.1867 50.8214 35.0873 49.7166 33.7437 49.7166C32.4001 49.7166 31.3008 50.8214 31.3008 52.1717C31.3008 53.522 32.339 54.6269 33.7437 54.6269Z"
          fill="#F26A7E"
        />
        <path
          d="M31.6083 54.8114C31.4251 54.5659 30.3868 53.2156 30.4479 51.988C30.509 50.9446 31.4251 49.7784 31.6083 49.5942L32.7687 50.5763C32.4633 50.9446 31.9747 51.6811 31.9747 52.1108C31.9747 52.6018 32.4633 53.4611 32.7687 53.8907L31.6083 54.8114Z"
          fill="#404366"
        />
        <path
          d="M31.9013 46.1241L30.5996 24.5577L29.3194 24.6357L30.621 46.2021L31.9013 46.1241Z"
          fill="#404366"
        />
      </svg>

      <h1>Error</h1>
      {Array.isArray(internshipApplyError.message) ? (
        <p>
          {internshipApplyError.message.map((error, index) => (
            <span key={index}>{error}</span>
          ))}
        </p>
      ) : (
        <p>{internshipApplyError.message}</p>
      )}
      <div className="line" />
      <Link href="/internship">
        <Button padding=".7em 1em">Find internships</Button>
      </Link>
    </Wrapper>
  );
}

export default InternshipError;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;

  h1 {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 0.6rem;
  }

  p {
    padding: 1rem 0;
    color: red;
    text-align: center;
  }
`;
