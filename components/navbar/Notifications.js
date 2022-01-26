import React, { useState } from "react";
import {
  DropdownSelect,
  Option,
  Img,
  Options,
  OptionTitle,
} from "./styles/Notifications.styled";

function Notifications({ options }) {
  const [show, setShow] = useState(true);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <DropdownSelect>
      <Options>
        <OptionTitle>
          <span className="option-title" onClick={() => handleShow()}>
            Notifications
          </span>
          {show ? (
            <Img
              className="up-show"
              onClick={() => handleShow()}
              src="/up-arrow.svg"
            />
          ) : (
            <Img
              className="up-show"
              onClick={() => handleShow()}
              src="/down-arrow.svg"
            />
          )}
        </OptionTitle>
        {show ? (
          <>
            {options.map((option, index) => {
              return (
                <Option key={index}>
                  <label>{option.value}</label>
                  <span>{option.time}</span>
                </Option>
              );
            })}
          </>
        ) : (
          ""
        )}
      </Options>
    </DropdownSelect>
  );
}

export default Notifications;
