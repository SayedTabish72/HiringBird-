import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
} from "./styles/Dropdown.styled";

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  return (
    <DropdownSelect>
      {title}{" "}
      {!show ? (
        <Img onClick={() => handleShow()} src="/down-arrow.svg" />
      ) : (
        <Img src="/up-arrow.svg" />
      )}
      {!show ? (
        " "
      ) : (
        <>
          <Options>
            <OptionTitle>
              <span
                style={{ color: show ? "#404366" : "#C9CBE2" }}
                className="option-title"
                onClick={() => handleShow()}
              >
                {title}
              </span>
              {!show ? (
                <Img onClick={() => handleShow()} src="/down-arrow.svg" />
              ) : (
                <Img
                  className="up-show"
                  onClick={() => handleShow()}
                  src="/up-arrow.svg"
                />
              )}
            </OptionTitle>
            {options.map((option, index) => {
              return (
                <Option key={index}>
                  <label>{option.value}</label>
                  <input
                    type="checkbox"
                    id="check"
                    checked={option.check}
                    hidden
                  />
                  <label htmlFor="check" className="check"></label>
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
