import React from "react";
import styled from "styled-components";

function Skills() {
  return (
    <Wrapper>
      <div className="checkbox-container">
        <label htmlFor="1-checkbox">UI/UX Designer</label>
        <input type="checkbox" id="1-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="password-checkbox">UI/UX Designer</label>
        <input type="checkbox" id="password-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="3-checkbox">UI/UX Designer</label>
        <input type="checkbox" id="3-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="4-checkbox">UI/UX Designer</label>
        <input type="checkbox" id="4-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="5-checkbox">UI/UX Designer</label>
        <input type="checkbox" id="5-checkbox" />
      </div>
    </Wrapper>
  );
}

export default Skills;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  .checkbox-container {
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: space-between;
    gap: 1rem;
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
`;
