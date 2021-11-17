import React, { useState } from "react";
import styled from "styled-components";
import SuccessModal from "./SuccessModal";
import axios from "../../../../utils/axios";
import { useRouter } from "next/router";
import ErrorModal from "./ErrorModal";

const Body = () => {
  const router = useRouter();
  const { id } = router.query;
  const [errorModal, setErrorModal] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [values, setValues] = useState({
    experience: "",
    figma_skill: "",
    url: "",
    reason: "",
  });

  const [errors, setErrors] = useState({});

  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
  const rx_url =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  function checkObjEmpty(obj) {
    return Object.keys(obj).every((key) => obj[key] === "");
  }

  const validate = (values) => {
    const errors = {};
    if (!values.experience) {
      errors.experience = "Required";
    } else if (values.experience > 100) {
      errors.experience = "Must be less than 100";
    } else if (!rx_live.test(values.experience)) {
      errors.experience = "Invalid";
    }
    if (!values.figma_skill) {
      errors.figma_skill = "Required";
    } else if (values.figma_skill > 5) {
      errors.figma_skill = "Must be less than 5";
    } else if (!rx_live.test(values.figma_skill)) {
      errors.figma_skill = "Invalid";
    }
    if (!values.url) {
      errors.url = "Required";
    } else if (!rx_url.test(values.url)) {
      errors.url = "Invalid";
    }

    if (!values.reason) {
      errors.reason = "Required";
    } else if (values.reason.length > 100) {
      errors.reason = "Must be less than 100 words";
    }

    return errors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const errObj = validate(values);
    setErrors(errObj);
    if (checkObjEmpty(errObj)) {
      axios
        .put(`/internship/apply/${id}`, {
          answers: [
            {
              questionID:
                "How many years of work experience do you have using Figma/sketch software",
              answer: values.experience,
            },
            {
              questionID:
                "Rate your self in figma tool skill out of 5? Where 5 being highest",
              answer: values.figma_skill,
            },
            {
              questionID: "Add the link to your design portfolio",
              answer: values.url,
            },
            {
              questionID: "Why do you think you are suitable for this role",
              answer: values.reason,
            },
          ],
        })
        .then((res) => {
          console.log(res.data);
          setShowModal(true);
          setValues({
            experience: "",
            figma_skill: "",
            url: "",
            reason: "",
          });
        })
        .catch((err) => {
          console.log(err.response.data);
          setErrMsg(err.response.data.message);
          setErrorModal(true);
          setValues({
            experience: "",
            figma_skill: "",
            url: "",
            reason: "",
          });
        });
    } else {
      console.log("solve the errors");
    }
  };

  return (
    <>
      <ErrorModal
        errorModal={errorModal}
        setErrorModal={setErrorModal}
        err={errMsg}
        id={id}
      />
      <SuccessModal show={showModal} setShowModal={setShowModal} />
      <Wrapper onSubmit={handleSubmit}>
        <div className="head">
          <h1>UI/UX Design internship at Skilzen</h1>
        </div>

        <h2>Assessment questions</h2>
        <div className="question">
          <h5>
            Q.How many years of work experience do you have using Figma/sketch
            software ? <span>*</span>
          </h5>
          <input
            name="experience"
            value={values.experience}
            onChange={handleChange}
            type="text"
            placeholder="e.g. 1 (only numerical Value)"
          />
          {errors.experience && (
            <ErrorBox>
              <p>{errors.experience}</p>
              <svg width="20" height="20">
                <circle cx="50%" cy="50%" r="8" fill="red" />
              </svg>
            </ErrorBox>
          )}
        </div>

        <div className="question">
          <h5>
            Q.Rate your self in figma tool skill out of 5? Where 5 being highest{" "}
            <span>*</span>
          </h5>
          <input
            name="figma_skill"
            value={values.figma_skill}
            onChange={handleChange}
            type="text"
            placeholder="e.g. 1 (only numerical Value)"
          />
          {errors.figma_skill && (
            <ErrorBox>
              <p>{errors.figma_skill}</p>
              <svg width="20" height="20">
                <circle cx="50%" cy="50%" r="8" fill="red" />
              </svg>
            </ErrorBox>
          )}
        </div>

        <div className="question">
          <h5>
            Q.Add the link to your design portfolio. <span>*</span>
          </h5>
          <input
            name="url"
            value={values.url}
            onChange={handleChange}
            type="text"
            placeholder="Add link"
          />
          {errors.url && (
            <ErrorBox>
              <p>{errors.url}</p>
              <svg width="20" height="20">
                <circle cx="50%" cy="50%" r="8" fill="red" />
              </svg>
            </ErrorBox>
          )}
        </div>

        <div className="question">
          <h5>
            Q.Why do you think you are suitable for this role? <span>*</span>
          </h5>
          <textarea
            name="reason"
            value={values.reason}
            onChange={handleChange}
            rows="6"
            placeholder="Type here"
          />
          {errors.reason && (
            <ErrorBox>
              <p>{errors.reason}</p>
              <svg width="20" height="20">
                <circle cx="50%" cy="50%" r="8" fill="red" />
              </svg>
            </ErrorBox>
          )}
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
              <input type="file" name="" id="upload-photo" />
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
              <input type="file" name="pdf" id="pdf" />
            </CustomFileInput>
          </div>
        </ResumeContainer>

        <button type="submit">Submit</button>
      </Wrapper>
    </>
  );
};

export default Body;

const Wrapper = styled.form`
  width: min(95%, 80rem);
  padding: 2rem 2rem;
  margin-bottom: 1em;
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
    textarea {
      outline: none;
      border: 1px solid #c9cbe2;
      padding: 1em;
      font-family: inter, sans-serif;
      border-radius: 5px;
    }
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
    gap: 1rem;
    align-items: center;
    @media (max-width: 700px) {
      flex-direction: column;
      gap: 0.5rem;
      align-items: flex-start;
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

const ErrorBox = styled.div`
  border: 1px solid #ec1f28;
  position: relative;
  padding: 1em;
  border-radius: 3px;
  background: #fff9fa;
  margin-top: 1em;
  p {
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.216454px;
    color: #395185;
  }
  svg {
    position: absolute;
    left: -0.65rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
