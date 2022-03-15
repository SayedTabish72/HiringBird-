import React, { useState } from "react";
import Head from "next/head";
import AuthContainer from "components/Auth/Common/AuthContainer";
import ForgotPass from "components/Auth/ForgotPass";
import PasswordReset from "components/Auth/ForgotPass/PasswordReset";

const forgotPassword = () => {
  const [bindIndex, setBindIndex] = useState(0);

  return (
    <>
      <Head>
        <title>Forgot password</title>
        <meta name="description" content="Generated by create-next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {bindIndex === 0 && (
        <AuthContainer
          svg="/auth/forgotpass/vector.svg"
          form={
            <ForgotPass bindIndex={bindIndex} setBindIndex={setBindIndex} />
          }
        />
      )}

      {bindIndex === 1 && (
        <AuthContainer
          svg="/auth/forgotpass/vector2.svg"
          form={
            <PasswordReset bindIndex={bindIndex} setBindIndex={setBindIndex} />
          }
        />
      )}
    </>
  );
};

export default forgotPassword;