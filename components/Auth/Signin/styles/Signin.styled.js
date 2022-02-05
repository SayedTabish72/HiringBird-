import styled from "styled-components";

export const Split = styled.div`
  display: flex;
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
  }
`;

export const Form = styled.form`
  .hiringbird-logo {
    display: none;
    @media (max-width: 1100px) {
      display: block;
    }
  }
  .forgotPass {
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 0.7rem;
    user-select: none;
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      height: 1.3rem;
      width: 1.3rem;
      background-color: #fff;
      border-radius: 5px;
      border: 1px solid #c9cbe2;
      cursor: pointer;
      position: relative;
      &:before {
        content: "";
        position: absolute;
        width: 5px;
        height: 10px;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        top: 42%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        opacity: 0;
        transition: all 0.2s ease-in-out;
      }
      &:checked {
        background-color: #f26a7e;
        border: none;
        &:before {
          opacity: 1;
        }
      }
    }
    label {
      font-size: 14px;
      color: #404366;
    }
  }
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
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
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-bottom: 20px;
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
    gap: 0.4rem;
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
  }
`;

export const OuterContainer = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Blob1 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Blob2 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  top: 0;
  right: 0;
`;
