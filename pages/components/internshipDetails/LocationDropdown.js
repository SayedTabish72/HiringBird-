import React, { useState, useContext } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionSearch,
} from "./styles/LocationDropdown.styled";
import { InternshipContext } from "../../../context/internship.context";

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const [activeLocation, setActiveLocation] = useState([]);
  const { setLocationModel } = useContext(InternshipContext);

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