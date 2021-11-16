import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
} from "./styles/LocationDropdown.styled";

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);

  return (
    <DropdownSelect>
      {title}{" "}
      {!show ? (
        <Img onClick={() => setShow(!show)} src="/down-arrow.svg" />
      ) : (
        <Img onClick={() => setShow(!show)} src="/up-arrow.svg" />
      )}
      {!show ? (
        " "
      ) : (
        <>
          <Options>
            <OptionTitle>
              <span
                onClick={() => setShow(!show)}
                style={{ color: show ? "#404366" : "#C9CBE2" }}
              >
                {title}
              </span>
              {!show ? (
                <Img onClick={() => setShow(!show)} src="/down-arrow.svg" />
              ) : (
                <Img onClick={() => setShow(!show)} src="/up-arrow.svg" />
              )}
            </OptionTitle>
            {options.map((option, index) => {
              return (
                <Option key={index}>
                  <label>{option.value}</label>
                </Option>
              );
            })}
          </Options>
        </>
      )}
    </DropdownSelect>
  );
};

export default Dropdown;
