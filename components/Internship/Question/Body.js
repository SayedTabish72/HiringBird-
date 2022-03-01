import Modal from "@/common/components/Modal";
import InternshipError from "@/common/components/Modal/InternshipError";
import InternshipSuccess from "@/common/components/Modal/InternshipSuccess";
import { Button } from "@/common/styles/FilledBtn.styled";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchInternshipById,
  internshipApply,
  resetInternshipApply,
  resetInternshipById,
} from "redux/actions/internship";
import styled from "styled-components";
import questions from "../../../utils/questions";

const Body = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const internshipApplyStatus = useSelector(
    (state) => state.internship.internshipApplyStatus
  );

  // states
  const [showErrModal, setShowErrModal] = useState(false);
  const [showSuccModal, setShowSuccModal] = useState(false);
  const [values, setValues] = useState({
    experience: "",
    figma_skill: "",
    url: "",
    reason: "",
  });
  const [file, setFile] = useState(null);
  const hiddenFileInput = useRef(null);
  const [uploaded, setUploaded] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    id && dispatch(fetchInternshipById(id));

    return () => {
      dispatch(resetInternshipById());
    };
  }, [id]);

  useEffect(() => {
    return () => {
      dispatch(resetInternshipApply());
    };
  }, []);

  useEffect(() => {
    if (internshipApplyStatus === "succeeded") {
      setShowSuccModal(true);
    } else if (internshipApplyStatus === "failed") {
      setShowErrModal(true);
    }
  }, [internshipApplyStatus]);

  const convertDate = (date) => {
    const d = new Date(date);
    const month = `0${d.getMonth() + 1}`.slice(-2);
    const day = `0${d.getDate()}`.slice(-2);
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const rx_live = /^[+-]?\d*(?:[.,]\d*)?$/;
  const rx_url =
    // eslint-disable-next-line no-useless-escape
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
    // if (!file) {
    //   errors.file = "Required";
    // }

    return errors;
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errObj = validate(values);
    setErrors(errObj);
    if (checkObjEmpty(errObj)) {
      const answers = [
        {
          questionID: 1,
          answer: parseInt(values.experience),
        },
        {
          questionID: 2,
          answer: parseInt(values.figma_skill),
        },
        {
          questionID: 3,
          answer: values.url,
        },
        {
          questionID: 4,
          answer: values.reason,
        },
      ];
      dispatch(internshipApply(id, answers));
    } else {
      console.log("solve validation errors");
    }
  };

  // const validateFile = (file) => {
  //   const fileTypes = ["application/pdf", "application/docx"];
  //   if (fileTypes.includes(file.type)) {
  //     setFile(file);
  //   } else {
  //     alert("Please upload a valid file");
  //   }
  // };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
    file && setUploaded(true);
  };

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showErrModal && (
          <Modal width="33rem">
            <InternshipError setShow={setShowErrModal} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showSuccModal && (
          <Modal width="37rem">
            <InternshipSuccess setShow={setShowSuccModal} />
          </Modal>
        )}
      </AnimatePresence>

      <Wrapper onSubmit={handleSubmit}>
        <h1>UI/UX Design internship at Skilzen</h1>

        <QuestionsContainer>
          {questions.map((q) => (
            <Question key={q.id}>
              <h5>
                Q. {q.questionTitle}
                <span>*</span>
              </h5>
              {q.textarea ? (
                <>
                  <textarea
                    name={q.keyword}
                    value={values[q.keyword]}
                    onChange={handleChange}
                    id=""
                    cols="30"
                    rows="10"
                    style={{
                      resize: "vertical",
                      outline: "none",
                      border: "0.76489px solid #C9CBE2",
                      padding: "1rem",
                      fontWeight: "500",
                      fontSize: "15px",
                    }}
                  ></textarea>
                  <div className="customFileInput">
                    <button
                      onClick={() => hiddenFileInput.current.click()}
                      type="button"
                    >
                      Upload
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                        />
                      </svg>
                    </button>
                    <input
                      onChange={handleFileUpload}
                      style={{ display: "none" }}
                      type="file"
                      name=""
                      id=""
                      ref={hiddenFileInput}
                      accept=".docx,.pdf"
                    />
                  </div>
                </>
              ) : (
                <input
                  name={q.keyword}
                  value={values[q.keyword]}
                  onChange={handleChange}
                  type={q.answerType}
                  placeholder={q.inputPlaceholder}
                />
              )}

              {errors[q.keyword] && (
                <ErrorBox>
                  <p>{errors[q.keyword]}</p>
                  <svg width="20" height="20">
                    <circle cx="50%" cy="50%" r="8" fill="red" />
                  </svg>
                </ErrorBox>
              )}
            </Question>
          ))}
        </QuestionsContainer>

        <ResumeContainer>
          <h2>
            Resume <span>*</span>
          </h2>
          <div className="flex">
            <div className="checkbox-container">
              <input type="checkbox" id="resume-checkbox" />
              <label htmlFor="resume-checkbox">Use resume.pdf</label>
            </div>
            <span style={{ color: "#A9ACCB" }}>or</span>
            {uploaded ? (
              <div className="uploaded-file">
                <div
                  style={{
                    background: `${
                      file.name.includes("pdf") ? "#F26A7E" : "#1a73e8"
                    }`,
                    padding: ".6rem",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  <p>{file.name.includes("pdf") ? "PDF" : "DOCX"}</p>
                </div>
                <div className="uploadedFile__content">
                  <h5>{file.name}</h5>
                  <p>Last used {convertDate(file.lastModified)}</p>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  onClick={() => {
                    setFile(null);
                    setUploaded(false);
                  }}
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              <>
                <div className="customFileInput">
                  <button
                    onClick={() => hiddenFileInput.current.click()}
                    type="button"
                  >
                    Upload
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </button>
                  <input
                    onChange={handleFileUpload}
                    style={{ display: "none" }}
                    type="file"
                    name=""
                    id=""
                    ref={hiddenFileInput}
                    accept=".docx,.pdf"
                  />
                </div>
                {errors.file && (
                  <ErrorBox>
                    <p>{errors.file}</p>
                    <svg width="20" height="20">
                      <circle cx="50%" cy="50%" r="8" fill="red" />
                    </svg>
                  </ErrorBox>
                )}
              </>
            )}
          </div>
        </ResumeContainer>
        <Button
          style={{
            alignSelf: "flex-end",
          }}
          padding="14px 33px"
          type="submit"
        >
          Submit
        </Button>
      </Wrapper>
    </>
  );
};

export default Body;

const Wrapper = styled.form`
  width: min(90%, 90rem);
  margin: 1rem auto;
  border: 1px solid #c9cbe2;
  padding: 1.5rem;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  h1 {
    font-weight: 500;
    color: #404366;
    font-size: clamp(1.5rem, 1.2667rem + 1.037vw, 2.2rem);
    margin-bottom: 1.5rem;
  }

  textarea {
    border: 1px solid #c9cbe2;
    border-radius: 8px;
    padding: 0.5rem;
  }
`;

const QuestionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
const Question = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h5 {
    font-weight: 500;
    font-size: 18px;
    letter-spacing: 0.0987159px;
    color: #404366;
    span {
      color: red;
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }

  input {
    padding: 0.5rem;
    border: none;
    border-bottom: 1px solid #c9cbe2;
    outline: none;
    font-weight: 500;
    font-size: 15px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  .customFileInput {
    button {
      border-radius: 6px;
      padding: 12px 30px;
      font-weight: 600;
      font-size: 16px;
      color: #404366;
      border: 1px solid #f26a7e;
      cursor: pointer;
      background: ${(props) => (props.uploaded ? "#f26a7e" : "#ffffff")};

      display: flex;
      align-items: center;
      gap: 0.7rem;
      svg {
        color: #a9accb;
        height: 1.3rem;
      }
    }
  }
`;

const ResumeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  .flex {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 768px) {
      flex-direction: column;
    }
  }

  h2 {
    font-weight: 600;
    font-size: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0987159px;
    color: #404366;
    span {
      color: red;
    }
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    gap: 0.5rem;
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

  .uploaded-file {
    display: flex;
    align-items: center;
    gap: 0.6rem;

    user-select: none;
    background: #ffffff;
    border: 1px solid #98a8b8;
    border-radius: 12px;
    padding: 12px 10px;
    svg {
      height: 1.3rem;
      cursor: pointer;
    }
    .uploadedFile__content {
      h5 {
        font-weight: 500;
        font-size: 15.7px;
        line-height: 24px;
        display: flex;
        align-items: center;
        letter-spacing: 0.0987159px;
        color: #404366;
      }
      p {
        font-weight: 500;
        font-size: 14px;
        display: flex;
        align-items: center;
        letter-spacing: 0.0987159px;
        color: #a9accb;
      }
    }
  }

  .customFileInput {
    button {
      border-radius: 6px;
      padding: 12px 30px;
      font-weight: 600;
      font-size: 16px;
      color: #404366;
      border: 1px solid #f26a7e;
      cursor: pointer;
      background: ${(props) => (props.uploaded ? "#f26a7e" : "#ffffff")};

      display: flex;
      align-items: center;
      gap: 0.7rem;
      svg {
        color: #a9accb;
        height: 1.3rem;
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
