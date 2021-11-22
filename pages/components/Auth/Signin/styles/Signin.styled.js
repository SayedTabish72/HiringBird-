import styled from "styled-components";

export const Container = styled.div`
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
export const Split = styled.div`
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
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        padding-bottom: 20px;
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
