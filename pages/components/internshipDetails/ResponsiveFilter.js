import React from "react";
import {
  FilterContainer,
  FilterLeft,
  FilterRight,
  Img1,
  Img2,
} from "./styles/ResponsiveFilter.styled";
import LocationDropdown from "./LocationDropdown";

function ResponsiveFilter() {
  return (
    <FilterContainer>
      <FilterLeft>
        <Img1 src="/up-down-arrow.svg" />
        <Img2 src="/top-bottom.svg" />
      </FilterLeft>
      <FilterRight>
        <LocationDropdown
          title="LOCATION"
          options={[
            { value: "2k-4k", check: true },
            { value: "4k-6k", check: false },
            { value: "6k-8k", check: true },
            { value: "8k & above", check: false },
          ]}
        />
      </FilterRight>
    </FilterContainer>
  );
}

export default ResponsiveFilter;
