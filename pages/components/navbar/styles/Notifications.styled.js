import styled from "styled-components";

export const DropdownSelect = styled.ul`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a9accb;
  transition: all 0.3 ease-in-out;
`;

export const Img = styled.img`
  width: 17px;
  margin-left: 10px;
  cursor: pointer;
`;

export const OptionTitle = styled.div`
  .up-show {
    margin-top: -17px;
  }
  span {
    cursor: pointer;
  }
  .option-title {
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;
  }
  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #404366;
  display: flex;
  align-items: center;
`;

export const Option = styled.li`
  &:hover {
    color: #404366;
  }
  span {
    font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 24px;
display: flex;
align-items: center;
color: #9092A9;
 display: flex; 
 align-items: flex-start; 
 margin-top:0;
  }
 
  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #c9cbe2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: flex-start;
  }

  .label {
     margin-left: -10px; 
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    font-family: Inter;
    color: #a9accb;
    flex:1;
  }
  
`;

export const Options = styled.div`
  top: 20px;
  background-color: #fff;
  right: -50px;
  position: absolute;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px;
  width: 240px;
  z-index: 10000;
`;
