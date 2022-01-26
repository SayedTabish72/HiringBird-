import styled from "styled-components";

export const FilterContainer = styled.div`
  width: 74%;
  margin: 0 auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 962px) {
    display: none;
  }
  ${
    "" /* @media (max-width: 500px) {
    width: 86%;
  } */
  }
  width: 90%;
  @media (max-width: 677px) {
    width: 86%;
  }
`;

export const Img1 = styled.img`
  width: 25px;
  height: 15.72px;
  margin-right: 10px;
`;

export const Img2 = styled.img`
  width: 20px;
  height: 13.33px;
`;

export const FilterLeft = styled.div`
  flex: 1;
  @media (min-width: 962px) {
    display: none;
  }
`;

export const FilterRight = styled.div`
  @media (min-width: 962px) {
    display: none;
  }
`;
