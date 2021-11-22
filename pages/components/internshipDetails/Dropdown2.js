import React, { useState } from "react";
import { Option, Options, OptionTitle } from "./styles/Dropdown.styled";
import { Img, DropdownSelect, Span } from "./styles/Dropdown2.styled";

const Dropdown2 = ({ title, options }) => {
  const [show, setShow] = useState(false);
  const [showNested1, setNested1Show] = useState(false);
  const [showNested2, setNested2Show] = useState(false);
  const [showNested3, setNested3Show] = useState(false);

  return (
    <DropdownSelect>
      <span onClick={() => setShow(!show)}>
        {title}
        {!show ? <Img src="/down-arrow.svg" /> : <Img src="/up-arrow.svg" />}
      </span>
      {!show ? (
        " "
      ) : (
        <>
          <Options>
            <OptionTitle onClick={() => setShow(!show)}>
              <span
                style={{ color: show ? "#404366" : "#C9CBE2" }}
                className="option-title"
              >
                {title}
              </span>
              {!show ? (
                <Img src="/down-arrow.svg" />
              ) : (
                <Img className="up-show" src="/up-arrow.svg" />
              )}
            </OptionTitle>

            <DropdownSelect>
              <Span style={{ color: showNested1 ? "#404366" : "#C9CBE2" }}>
                {options[0].title1}
              </Span>
              {!showNested1 ? (
                <Img
                  onClick={() => setNested1Show(!showNested1)}
                  src="/down-arrow.svg"
                />
              ) : (
                <Img
                  onClick={() => setNested1Show(!showNested1)}
                  src="/up-arrow.svg"
                />
              )}

              {showNested1 ? (
                <>
                  <Option>
                    <label className="label">{options[0].value1}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                  <Option>
                    <label className="label">{options[0].value2}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                </>
              ) : (
                ""
              )}
            </DropdownSelect>
            <DropdownSelect>
              <Span
                style={{
                  color: showNested2 ? "#404366" : "#C9CBE2",
                }}
              >
                {options[1].title1}
              </Span>
              {!showNested2 ? (
                <Img
                  onClick={() => setNested2Show(!showNested2)}
                  src="/down-arrow.svg"
                />
              ) : (
                <Img
                  onClick={() => setNested2Show(!showNested2)}
                  src="/up-arrow.svg"
                />
              )}

              {showNested2 ? (
                <>
                  <Option>
                    <label className="label">{options[1].value1}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                  <Option>
                    <label className="label">{options[1].value2}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                </>
              ) : (
                ""
              )}
            </DropdownSelect>
            <DropdownSelect>
              <Span
                style={{
                  color: showNested3 ? "#404366" : "#C9CBE2",
                }}
              >
                {options[2].title1}
              </Span>
              {!showNested3 ? (
                <Img
                  onClick={() => setNested3Show(!showNested3)}
                  src="/down-arrow.svg"
                />
              ) : (
                <Img
                  onClick={() => setNested3Show(!showNested3)}
                  src="/up-arrow.svg"
                />
              )}

              {showNested3 ? (
                <>
                  <Option>
                    <label className="label">{options[2].value1}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                  <Option>
                    <label className="label">{options[2].value2}</label>
                    <input type="checkbox" id="check" hidden />
                    <label htmlFor="check" className="check"></label>
                  </Option>
                </>
              ) : (
                ""
              )}
            </DropdownSelect>
          </Options>
        </>
      )}
    </DropdownSelect>
  );
};

export default Dropdown2;
