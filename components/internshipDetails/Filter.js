import React from "react";
import { FilterContainer, Wrap } from "./styles/Filter.styled";
import OutlineButton from "./OutlineButton";
import Dropdown from "./Dropdown";

function Filter() {
  return (
    <FilterContainer>
      <Wrap>
        <Dropdown
          title="CATEGORY"
          options={[
            { value: "2k-4k", check: true },
            { value: "4k-6k", check: false },
            { value: "6k-8k", check: true },
            { value: "8k & above", check: false },
          ]}
        />
      </Wrap>
      <Wrap>
        <Dropdown
          title="DURATION"
          options={[
            { value: "1 month", check: true },
            { value: "2 months", check: false },
            { value: "3-4 months", check: true },
            { value: "4-5 months", check: false },
            { value: "6 months", check: false },
            { value: "6 above", check: false },
          ]}
        />
      </Wrap>
      <Wrap>
        <Dropdown
          title="STIPEND RANGE"
          options={[
            { value: "2k-4k", check: false },
            { value: "4k-6k", check: false },
            { value: "6k-8k", check: false },
            { value: "8k&above", check: false },
          ]}
        />
      </Wrap>
      <Wrap>
        <Dropdown
          title="INTERNSHIP TYPE"
          options={[
            { value: "Part-time", check: false },
            { value: "Full-time", check: false },
            { value: "Internship", check: false },
            { value: "Remote", check: false },
          ]}
        />
      </Wrap>

      {/* <Dropdown
        title="SORT BY"
        option1="2 months"
        option2="3 months"
        option3="6 months"
        option4="8 months"
      /> */}

      <OutlineButton text="reset all" />
    </FilterContainer>
  );
}

export default Filter;
