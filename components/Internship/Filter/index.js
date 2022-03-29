import React, { useState } from "react";
import styled from "styled-components";
import Dropdown from "@/ui/Dropdown";
import Button from "@/ui/Button";
import useMediaQuery from "hooks/useMediaQuery";
import { AnimatePresence } from "framer-motion";
import useOutsideClick from "hooks/useOutsideClick";
import Location from "@/ui/Dropdown/Location";
import Modal from "@/ui/Modal";
import LocationModal from "@/ui/Modal/LocationModal";
import FilterModal from "@/ui/Modal/FilterModal";
import Duration from "./Dropdown/Duration";
import Skills from "./Dropdown/Skills";
import InternshipType from "./Dropdown/InternshipType";
import StipendRange from "./Dropdown/StipendRange";

function Filter() {
  const isMobile = useMediaQuery("(max-width: 962px)");
  const dropdownRef = React.useRef(null);

  const locations = [
    "Mumbai",
    "Pune",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Delhi",
  ];

  // states
  const [activeLocation, setActiveLocation] = useState("");
  const [showDropdown, setShowDropdown] = React.useState(false);

  const locModalRef = React.useRef(null);
  const [showLocModal, setShowLocModal] = useState(false);

  const filterModalRef = React.useRef(null);
  const [showFilterModal, setShowFilterModal] = useState(false);

  useOutsideClick(dropdownRef, () => {
    if (showDropdown) setShowDropdown(false);
  });

  useOutsideClick(filterModalRef, () => {
    if (showFilterModal) setShowFilterModal(false);
  });

  useOutsideClick(locModalRef, () => {
    if (showLocModal) setShowLocModal(false);
  });

  return (
    <>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showLocModal && (
          <Modal Ref={locModalRef} width="30rem">
            <LocationModal setShow={setShowLocModal} />
          </Modal>
        )}
      </AnimatePresence>
      <AnimatePresence
        initial={false}
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {showFilterModal && (
          <Modal Ref={filterModalRef} width="30rem">
            <FilterModal setShow={setShowFilterModal} />
          </Modal>
        )}
      </AnimatePresence>
      {isMobile ? (
        <Wrapper>
          <svg
            width="25"
            height="18"
            viewBox="0 0 25 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.4126 5.44873L7.86117 1.00016L12.3097 5.44873"
              stroke="#C9CBE2"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.86256 16.7239L7.86115 1.00017"
              stroke="#C9CBE2"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.689 12.2754L17.1375 16.724L21.5861 12.2754"
              stroke="#C9CBE2"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17.1389 1.00023L17.1375 16.7239"
              stroke="#C9CBE2"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            width="20"
            height="14"
            viewBox="0 0 20 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setShowFilterModal(true)}
          >
            <path
              d="M7.77778 12.2222C7.77778 12.8359 8.27524 13.3333 8.88889 13.3333H11.1111C11.7248 13.3333 12.2222 12.8359 12.2222 12.2222C12.2222 11.6086 11.7248 11.1111 11.1111 11.1111H8.88889C8.27524 11.1111 7.77778 11.6086 7.77778 12.2222ZM1.11111 0C0.497461 0 0 0.497461 0 1.11111C0 1.72476 0.497461 2.22222 1.11111 2.22222H18.8889C19.5025 2.22222 20 1.72476 20 1.11111C20 0.497461 19.5025 0 18.8889 0H1.11111ZM3.33333 6.66667C3.33333 7.28032 3.83079 7.77778 4.44444 7.77778H15.5556C16.1692 7.77778 16.6667 7.28032 16.6667 6.66667C16.6667 6.05302 16.1692 5.55556 15.5556 5.55556H4.44444C3.83079 5.55556 3.33333 6.05302 3.33333 6.66667Z"
              fill="#404366"
            />
          </svg>

          <div className="location-container">
            <h4 onClick={() => setShowDropdown(!showDropdown)}>LOCATION</h4>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => setShowDropdown(!showDropdown)}
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="#C9CBE2"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <AnimatePresence
              initial={false}
              exitBeforeEnter={true}
              onExitComplete={() => null}
            >
              {showDropdown && (
                <Location
                  Ref={dropdownRef}
                  component={
                    <ul
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                      }}
                    >
                      {locations.map((l, i) => (
                        <Item
                          key={i}
                          onClick={() => setActiveLocation(l)}
                          show={activeLocation === l}
                        >
                          <h3>{l}</h3>
                          <svg
                            width="18"
                            height="12"
                            viewBox="0 0 18 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M16.3482 1L6.15281 10.625L1.51855 6.25"
                              stroke="#7AD192"
                              strokeWidth="1.81818"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </Item>
                      ))}
                      <h3
                        style={{
                          fontSize: "16px",
                          color: "#F26A7E",
                        }}
                        onClick={() => setShowLocModal(true)}
                      >
                        Search more
                      </h3>
                    </ul>
                  }
                />
              )}
            </AnimatePresence>
          </div>
        </Wrapper>
      ) : (
        <FilterContainer>
          <Wrap>
            <Dropdown title="duration" component={<Duration />} />
          </Wrap>
          <Wrap>
            <Dropdown title="stipend range" component={<StipendRange />} />
          </Wrap>
          <Wrap>
            <Dropdown title="internship type" component={<InternshipType />} />
          </Wrap>
          <Wrap>
            {/* <Dropdown title="sort by" component={<Sortby />} /> */}
            <Dropdown title="skills" component={<Skills />} />
          </Wrap>
          <Button padding=".8em 3em">Reset</Button>
        </FilterContainer>
      )}
    </>
  );
}

export default Filter;

export const FilterContainer = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 12px;
  display: flex;
  gap: 0.5rem;
  width: min(90%, 85rem);
  margin: 3rem auto;
`;

export const Wrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: min(90%, 85rem);
  margin-inline: auto;

  & > svg + svg {
    margin-left: 0.5rem;
  }

  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;

  .location-container {
    cursor: pointer;
    user-select: none;
    position: relative;
    margin-left: auto;
    display: flex;
    align-items: center;
    -webkit-tap-highlight-color: transparent;
    gap: 0.5rem;

    h4 {
      font-weight: 500;
      font-size: 16px;
      text-transform: uppercase;
      color: #a9accb;
    }
  }
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h3 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) => (props.show ? "#404366" : "#A9ACCB")};
  }
  svg {
    display: ${(props) => (props.show ? "block" : "none")};
  }
`;
