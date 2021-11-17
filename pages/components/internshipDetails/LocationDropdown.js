import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionSearch,
} from "./styles/LocationDropdown.styled";

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const [activeLocation, setActiveLocation] = useState([]);
  console.log(activeLocation);

  const handleDropdownTitleClick = () => {
    setShow(!show);
    setActiveLocation([]);
  };

  return (
    <>
      <DropdownSelect>
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
              <OptionSearch>
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
