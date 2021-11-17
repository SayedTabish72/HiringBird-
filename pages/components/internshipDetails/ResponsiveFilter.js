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
            { value: "Delhi NCR", check: true },
            { value: "Mumbai", check: false },
            { value: "Bangalore", check: true },
            { value: "Hyderabad", check: false },
            { value: "Kolkata", check: false },
            { value: "Chennai", check: false },
            { value: "Chandigarh", check: false },
          ]}
        />
      </FilterRight>
    </FilterContainer>
  );
}

export default ResponsiveFilter;
