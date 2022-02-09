import React, { useState, useEffect, useRef } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
} from "./styles/Dropdown.styled";

const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);
    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  let domNode = useClickOutside(() => {
    setShow(false);
  });

  return (
    <DropdownSelect ref={domNode}>
      <span onClick={() => handleShow()}>
        {title}{" "}
        {!show ? (
          <svg
            width="18"
            height="10"
            viewBox="0 0 18 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 1.44482L9 8.42895L1 1.44482"
              stroke="#A9ACCB"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="20"
            height="11"
            viewBox="0 0 20 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 10L10 1L1 10"
              stroke="#404366"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
      {!show ? (
        " "
      ) : (
        <>
          <Options>
            <OptionTitle onClick={() => handleShow()}>
              <span
                style={{ color: show ? "#404366" : "#C9CBE2" }}
                className="option-title"
              >
                {title}
              </span>
              {!show ? (
                <svg
                  width="18"
                  height="10"
                  viewBox="0 0 18 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 1.44482L9 8.42895L1 1.44482"
                    stroke="#A9ACCB"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="20"
                  height="11"
                  viewBox="0 0 20 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 10L10 1L1 10"
                    stroke="#404366"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
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
