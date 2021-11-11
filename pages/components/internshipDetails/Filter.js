import React, {useState} from "react";
import { FilterContainer, Img, Wrap } from "./styles/Filter.styled";
import OutlineButton from "./OutlineButton";
import Dropdown from "./Dropdown";

function Filter() {

  const [options, setOptions] = useState([
    { value: "2k-4k", check: false },
    { value: "4k-6k", check: false },
    { value: "6k-8k", check: false },
    { value: "8k&above", check: false },
  ]);

  return (
    <FilterContainer>
      <Wrap>
        <Dropdown
          title="CATEGORY"
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
          title="DURATION"
          options={options}
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
            { value: "2k-4k", check: false },
            { value: "4k-6k", check: false },
            { value: "6k-8k", check: false },
            { value: "8k&above", check: false },
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
