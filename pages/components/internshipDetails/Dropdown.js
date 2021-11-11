import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  Checkbox,
} from "./styles/Dropdown.styled";

const Dropdown = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const handleClick = (e) => {
    if(checked.includes(e.target.value)) {
      const index = checked.indexOf(e.target.value);
      checked.splice(index, 1);
    } else {
      checked.push(e.target.value);
    }
  }

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
            {
              options.map((option, index) => {
                return(
                  <Option key={index}>
                    <label>{option.value}</label>
                    <input type="checkbox" checked={option.check}/>
                  </Option>
                )
              })
            }
          
          </Options>
        </>
      )}
    </DropdownSelect>
  );
};

export default Dropdown;

