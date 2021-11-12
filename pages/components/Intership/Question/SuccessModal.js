import React, { useRef } from "react";
import styled, { keyframes } from "styled-components";

const SuccessModal = ({ show, setShowModal }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };
  return (
    <Wrapper ref={modalRef} onClick={closeModal} show={show}>
      <Container>
        <img
          className="celebrate"
          src="/intershipdetail/success-icon.png"
          alt=""
        />
        <h1>
          Hurray! Application
          <span> Succesfully Submitted</span>
        </h1>
        <h2>
          Congratulations on completing the application process. Good Luck for
          the internship! Continue browsing for more opportunities with Skilzen
        </h2>
        <div className="flex">
          <p>SKIP FOR NOW</p>
          <button>Find Internships</button>
        </div>

        <SkillzenLove>
          <p>With</p>
          <svg
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.194 17.243C12.1336 17.2972 12.0729 17.3517 12.012 17.4064C12.0113 17.4071 12.0105 17.4077 12.0098 17.4084L10.9798 18.3169L9.94973 17.4084C9.94899 17.4077 9.94825 17.4071 9.9475 17.4064C9.88663 17.3518 9.82602 17.2973 9.76568 17.2432C7.16481 14.9086 5.05971 13.019 3.58635 11.2482C2.08708 9.44621 1.32028 7.85697 1.32028 6.15568C1.32028 3.39616 3.48018 1.25485 6.31396 1.25485C7.91756 1.25485 9.43347 1.97752 10.4423 3.15024L10.9798 3.77501L11.5172 3.15022C12.526 1.97752 14.0418 1.25485 15.6455 1.25485C18.4793 1.25485 20.6392 3.39616 20.6392 6.15568C20.6392 7.85699 19.8724 9.44625 18.3731 11.2482C16.8998 13.019 14.7948 14.9085 12.194 17.243Z"
              fill="#EC1F28"
              stroke="#404366"
              strokeWidth="1.4179"
            />
          </svg>
          <img src="/intershipdetail/skilzen-logo.png" alt="" />
        </SkillzenLove>
      </Container>
    </Wrapper>
  );
};

export default SuccessModal;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform:translateY(-3rem);
  }

  to {
    opacity: 1;
    transform:translateY(0rem);

  }
`;

const fadeInWrapper = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ show }) => (show ? "flex" : "none")};
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 99;
  animation: ${fadeInWrapper} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`;

const Container = styled.div`
  background-color: #fff;
  margin-inline: auto;
  margin: 2.5rem;
  height: fit-content;
  box-shadow: -4.14084px 80.0563px 110.423px rgba(129, 129, 129, 0.24);
  border-radius: 13.8028px;
  display: flex;
  align-items: center;
  flex-direction: column;
  animation: ${fadeIn} 0.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  align-items: center;
  text-align: center;
  padding: 2.5em 3rem;
  .celebrate {
    margin-bottom: 2rem;
  }
  h1 {
    font-weight: 500;
    font-size: 30px;
    text-align: center;
    letter-spacing: 0.204384px;
    color: #404040;
    span {
      color: #69de5d;
    }
    margin-bottom: 0.7em;
  }
  h2 {
    max-width: 45rem;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 0.2 px;
    color: #404040;
  }

  .flex {
    display: flex;
    align-items: center;
    padding: 2rem 0;
    margin-bottom: 1em;
    * {
      margin-right: 1em;
    }
    button {
      border: 2px solid #f1a6b1;
      border-radius: 5px;
      align-items: center;
      width: fit-content;
      padding: 13px 14px;
      background-color: #fff;
      cursor: pointer;
    }
  }
`;

const SkillzenLove = styled.div`
  display: flex;
  align-items: center;
  p {
  }
  * {
    margin-right: 0.5em;
  }
`;
