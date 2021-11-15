import React, { useState } from "react";
import { DropdownSelect, Option, Img, Options } from "./styles/Dropdown.styled";

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
            <Option>
              {title}{" "}
              {!show ? (
                <Img onClick={() => setShow(!show)} src="/down-arrow.svg" />
              ) : (
                <Img onClick={() => setShow(!show)} src="/up-arrow.svg" />
              )}
            </Option>
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
