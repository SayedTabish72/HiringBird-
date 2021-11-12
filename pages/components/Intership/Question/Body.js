import React, { useState } from "react";
import styled from "styled-components";
import SuccessModal from "./SuccessModal";

const Body = () => {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    setShowModal(true);
  };
  return (
    <>
      <SuccessModal show={showModal} setShowModal={setShowModal} />
      <Wrapper>
        <div className="head">
          <h1>UI/UX Design internship at Skilzen</h1>
        </div>

        <h2>Assessment questions</h2>
        <div className="question">
          <h5>
            Q.How many years of work experience do you have using Figma/sketch
            software ? <span>*</span>
          </h5>
          <input type="text" placeholder="e.g. 1 (only numerical Value)" />
        </div>

        <div className="question">
          <h5>
            Q.Rate your self in figma tool skill out of 5? Where 5 being highest{" "}
            <span>*</span>
          </h5>
          <input type="text" placeholder="e.g. 1 (only numerical Value)" />
        </div>

        <div className="question">
          <h5>
            Q.Add the link to your design portfolio. <span>*</span>
          </h5>
          <input type="text" placeholder="Add link" />
        </div>

        <div className="question">
          <h5>
            Q.Why do you think you are suitable for this role? <span>*</span>
          </h5>
          <input type="text" placeholder="Type here" />
          <div className="upload-file">
            <p>or</p>
            <CustomFileInput>
              <label htmlFor="upload-photo">
                <span>Upload file</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#A9ACCB"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </label>
              <input type="file" name="photo" id="upload-photo" />
            </CustomFileInput>
          </div>
        </div>

        <ResumeContainer>
          <h1>
            Resume <span>*</span>
          </h1>
          <div className="flex">
            {/* checkbox */}
            <CustomCheckbox className="child">
              <input type="checkbox" id="check" hidden />
              <label htmlFor="check"></label>
              <span>Use resume.pdf</span>
            </CustomCheckbox>
            {/* or letter */}
            <p className="child">or</p>
            {/* upload file btn */}
            <CustomFileInput className="child">
              <label htmlFor="upload-photo">
                <span>Upload file</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className=""
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="#A9ACCB"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                  />
                </svg>
              </label>
              <input type="file" name="photo" id="upload-photo" />
            </CustomFileInput>
          </div>
        </ResumeContainer>

        <button onClick={handleSubmit}>Submit</button>
      </Wrapper>
    </>
  );
};

export default Body;

const Wrapper = styled.div`
  width: min(95%, 80rem);
  padding: 2rem 2rem;
  @media (max-width: 600px) {
    padding: 3%;
  }
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  box-shadow: 0px 30px 72px rgba(0, 0, 0, 0.05);
  border: 1px solid lightgrey;
  margin-top: 2%;
  margin-inline: auto;
  color: #404366;
  h1 {
    font-weight: 500;
    font-size: 32px;
  }
  /* background-color: #f5f5f5; */
  .head {
    margin-bottom: 3em;
  }
  h2 {
    font-weight: 500;
    font-size: 28px;
    margin-bottom: 0.8em;
  }
  .question {
    max-width: 55rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5em;
    .upload-file {
      display: flex;
      margin-left: 1.2em;
      margin-top: 1em;
      align-items: center;
      p {
        margin-right: 1em;
        color: #a9accb;
      }
    }

    h5 {
      font-weight: 500;
      font-size: 17px;
      line-height: 24px;
      margin-bottom: 0.6em;
      span {
        color: red;
      }
    }
    input {
      outline: none;
      border: none;
      padding: 0.4em 0.5em;
      border-bottom: 1px solid #c9cbe2;
      margin-left: 1.2em;
    }
  }
  button {
    background-color: #f26a7e;
    padding: 10px 26px;
    color: #fff;
    border: none;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
    border-radius: 4px;
    align-self: flex-end;
    margin-top: 2em;
  }
`;

const CustomFileInput = styled.div`
  label {
    cursor: pointer;
    display: flex;
    border: 2px solid #f1a6b1;
    border-radius: 5px;
    align-items: center;
    width: fit-content;
    padding: 8px 14px;
    svg {
      height: 1.6rem;
    }
    span {
      font-weight: 500;
      margin-right: 0.2em;
    }
  }
  input {
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;
const ResumeContainer = styled.div`
  h1 {
    margin-bottom: 0.2em;
    span {
      color: red;
    }
  }
  .flex {
    display: flex;
    align-items: center;
    .child {
      margin-right: 1em;
    }
    p {
      color: #a9accb;
    }
    .checkbox {
      span {
        margin-left: 0.4em;
        font-size: 16px;
      }
    }
  }
`;

const CustomCheckbox = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 0.5em;
  }
  #check {
    &:checked ~ label {
      border: none;
      background-color: #f26a7e;
    }
    &:checked ~ label::after {
      opacity: 1;
    }
  }

  label {
    display: block;
    width: 19px;
    height: 19px;
    background-color: #fff;
    border-radius: 3.09091px;
    position: relative;
    border: 1.5px solid #c9cbe2;
    transition: all 0.2s ease-in-out;
    &:after {
      content: "";
      position: absolute;
      height: 10px;
      width: 5px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 40%;
      left: 50%;
      transition: all 0.2s ease-in-out;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
    }
  }
`;
