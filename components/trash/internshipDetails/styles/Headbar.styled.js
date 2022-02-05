import styled from "styled-components";

export const HeadContainer = styled.div`
  display: flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  margin: 0 48px;
  margin-top: 20px;
  margin-bottom: -50px;
  @media (max-width: 500px) {
    margin: 0 35px;
  }
  @media (max-width: 500px) {
    margin: 0 30px;
  }
  @media (max-width: 707px) {
    margin-bottom: -50px;
  }
  @media (max-width: 699px) {
    margin-bottom: -30px;
  }
  @media (max-width: 995px) {
    margin-top: -10px;
  }
  @media (max-width: 600px) {
    margin-top: -18px;
  }
`;

export const HeadLeft = styled.div`
  flex: 1;
`;

export const HeadTitle = styled.h4`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  display: flex;
  align-items: center;
  color: #404366;
`;

export const DropdownWrap = styled.div``;

export const HeadRight = styled.div`
  text-align: right;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 527px) {
    flex: 0;
  }
  @media (max-width: 673px) {
    display: none;
  }
`;

export const HeadIcon = styled.img`
  cursor: pointer;
  width: 25px;
  height: 25px;
`;

export const HeaderIcons = styled.div`
  margin-left: 20px;
`;
