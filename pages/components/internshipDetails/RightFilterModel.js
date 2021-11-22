import React from "react";
import { Option } from "./styles/Dropdown.styled";

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
