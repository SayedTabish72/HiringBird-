import React from "react";
import styled from "styled-components";

function Sortby() {
  return (
    <Wrapper>
      <h4>Date Posted</h4>
      <div className="checkbox-container">
        <label htmlFor="1-checkbox">Recent</label>
        <input type="checkbox" id="1-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="password-checkbox">Old</label>
        <input type="checkbox" id="password-checkbox" />
      </div>

      <h4>No. of applicants</h4>
      <div className="checkbox-container">
        <label htmlFor="3-checkbox">3-4 month</label>
        <input type="checkbox" id="3-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="4-checkbox">4-6 month</label>
        <input type="checkbox" id="4-checkbox" />
      </div>

      <h4>No. of Views</h4>
      <div className="checkbox-container">
        <label htmlFor="5-checkbox">6 month</label>
        <input type="checkbox" id="5-checkbox" />
      </div>

      <div className="checkbox-container">
        <label htmlFor="6-checkbox">6 above</label>
        <input type="checkbox" id="6-checkbox" />
      </div>
    </Wrapper>
  );
}

export default Sortby;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;

  h4 {
    margin-bottom: -0.3rem;
    font-weight: 500;
    font-size: 16px;
    color: #404366;
  }

  .checkbox-container {
    display: flex;
    align-items: center;
    user-select: none;
    justify-content: space-between;
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
      cursor: pointer;
    }
  }
`;
