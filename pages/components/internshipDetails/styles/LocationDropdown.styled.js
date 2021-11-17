import styled from "styled-components";

export const DropdownSelect = styled.ul`
  ${"" /* position: relative; */}
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a9accb;
  transition: all 0.3 ease-in-out;
  margin-right: 30px;
  @media (max-width: 1060px) {
    margin-right: 5px;
  }
`;

export const Img = styled.img`
  width: 17px;
  margin-left: 10px;
`;

export const OptionSearch = styled.li`
  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #f26a7e;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Option = styled.li`

  &:hover {
    color: #404366;
  }
 
  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #c9cbe2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.4px solid #C9CBE2;


  .label {
    margin-left: -10px;
    font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 19px;

color: #C9CBE2;

  }
  

  }
`;

export const Options = styled.div`
  top: 235px;
  background-color: #fff;
  position: absolute;
  right: 30px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px;
  padding-bottom: 5px;
  z-index: 10;
  @media (max-width: 600px) {
    top: 190px;
  }
`;
