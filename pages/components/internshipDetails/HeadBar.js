import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { InternshipContext } from "../../../context/internship.context";
import {
  HeadContainer,
  HeadLeft,
  HeadTitle,
  HeadRight,
  HeadIcon,
  HeaderIcons,
  DropdownWrap,
} from "./styles/Headbar.styled";
import CardGrid from "./CardGrid";
import ListView from "./ListView";
import Dropdown2 from "./Dropdown2";

function HeadBar() {
  const [gridShowToggle, setGridShowToggle] = useState(true);
  const eventHandler = () => {
    setGridShowToggle(!gridShowToggle);
  };
  const { internships, getInternship } = useContext(InternshipContext);

  useEffect(() => {
    getInternship();
  }, []);

  // const [internships, setInternships] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8800/internship?page=1&limit=18")
  //     .then((response) => {
  //       console.log(response.data.data);
  //       setInternships(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  console.log(internships);
  return (
    <>
      <HeadContainer>
        <HeadLeft>
          <HeadTitle>Internships</HeadTitle>
        </HeadLeft>
        <HeadRight>
          <DropdownWrap>
            <Dropdown2
              title="SORT BY"
              options={[
                { title1: "Date Posted", value1: "Recent", value2: "Old" },
                {
                  title1: "No. of applicants",
                  value1: "High",
                  value2: "Low",
                },
                { title1: "No. of views", value1: "High", value2: "Low" },
              ]}
            />
          </DropdownWrap>
          <HeaderIcons>
            {!gridShowToggle ? (
              <>
                <HeadIcon
                  src="/list-view-pink.svg"
                  onClick={eventHandler}
                ></HeadIcon>{" "}
                <HeadIcon
                  src="/card-view.svg"
                  onClick={eventHandler}
                  style={{ marginLeft: "30px" }}
                ></HeadIcon>
              </>
            ) : (
              <>
                {" "}
                <HeadIcon
                  src="/list-view.svg"
                  onClick={eventHandler}
                ></HeadIcon>{" "}
                <HeadIcon
                  src="/card-view-pink.svg"
                  onClick={eventHandler}
                  style={{ marginLeft: "30px" }}
                ></HeadIcon>{" "}
              </>
            )}
          </HeaderIcons>
        </HeadRight>
      </HeadContainer>
      {gridShowToggle ? (
        <CardGrid internships={internships} />
      ) : (
        <ListView internships={internships} />
      )}
    </>
  );
}

export default HeadBar;
