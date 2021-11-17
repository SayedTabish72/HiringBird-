import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
  OptionSearch,
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
                  <Img src="/green-tick.svg" />
                </Option>
              );
            })}
            <OptionSearch>
              <label>Search More</label>
            </OptionSearch>
          </Options>
        </>
      )}
    </DropdownSelect>
  );
};

export default Dropdown;
