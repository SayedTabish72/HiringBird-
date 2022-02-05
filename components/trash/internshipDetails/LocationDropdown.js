import React, { useState, useContext, useRef, useEffect } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionSearch,
} from "./styles/LocationDropdown.styled";
import { InternshipContext } from "../../context/internship.context";

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
  const [activeLocation, setActiveLocation] = useState([]);
  const { setLocationModel } = useContext(InternshipContext);

  const handleDropdownTitleClick = () => {
    setShow(!show);
    setActiveLocation([]);
  };

  let domNode = useClickOutside(() => {
    setShow(false);
  });

  return (
    <>
      <DropdownSelect ref={domNode}>
        <span onClick={handleDropdownTitleClick}>{title}</span>
        <Img onClick={() => setShow(!show)} src="/down-arrow.svg" />
        {!show ? (
          " "
        ) : (
          <>
            <Options>
              {options.map((option, index) => {
                return (
                  <Option key={index}>
                    <label onClick={() => setActiveLocation([option.value])}>
                      {option.value}
                    </label>
                    <Img
                      style={{
                        display:
                          option.value === activeLocation[0] ? "" : "none",
                      }}
                      src="/green-tick.svg"
                    />
                  </Option>
                );
              })}
              <OptionSearch onClick={() => setLocationModel()}>
                <label>Search More</label>
              </OptionSearch>
            </Options>
          </>
        )}
      </DropdownSelect>
    </>
  );
};

export default Dropdown;
