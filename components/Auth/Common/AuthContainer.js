import React from "react";
import * as S from "../Signin/styles/Signin.styled";
import Link from "next/link";

function AuthContainer({ svg, form }) {
  return (
    <S.OuterContainer>
      <S.Split>
        <div className="left">
          <Link href="/">
            <img className="logo" src="/auth/signin/hiringbird.png" alt="" />
          </Link>
          <img className="vector" src={svg} alt="" />
        </div>

        <div className="right">{form}</div>
      </S.Split>
      <S.Blob1>
        <img src="/images/blob1.svg" alt="universe" />
      </S.Blob1>
      <S.Blob2>
        <img src="/images/blob2.svg" alt="universe" />
      </S.Blob2>
    </S.OuterContainer>
  );
}

export default AuthContainer;
