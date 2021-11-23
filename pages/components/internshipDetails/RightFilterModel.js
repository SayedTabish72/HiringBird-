import React from "react";
import styled from "styled-components";

function RightFilterModel({ options }) {
  return (
    <>
      {options.map((option, index) => {
        return (
          <Option key={index}>
            <label>{option}</label>
            <input type="checkbox" id="check" checked={option.check} hidden />
            <label htmlFor="check" className="check"></label>
          </Option>
        );
      })}
    </>
  );
}

export default RightFilterModel;

const Option = styled.li`
  &:hover {
    color: #404366;
  }

  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #c9cbe2;
  display: flex;
  align-items: center;
  justify-content: space-between;

  #check {
    &:checked ~ label {
      border: none;
      background-color: #f26a7e;
    }
    &:checked ~ label::after {
      opacity: 1;
    }
  }

  .label {
    margin-left: -10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #c9cbe2;
  }
  .check {
    margin-right: 5px;
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
