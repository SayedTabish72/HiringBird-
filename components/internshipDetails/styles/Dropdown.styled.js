import styled from "styled-components";

export const DropdownSelect = styled.ul`
  position: relative;
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
  justify-content: center;
`;

export const Option = styled.li`
  &:hover {
    color: #404366;
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

  #check {
    &:checked ~ label {
      border: none;
      background-color: #f26a7e;
    }
    &:checked ~ label::after {
      opacity: 1;
    }
  }

  .label {
    margin-left: -10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;

    color: #c9cbe2;
  }
  .check {
    margin-right: 5px;
    display: block;
    width: 19px;
    height: 19px;
    background-color: #fff;
    border-radius: 3.09091px;
    position: relative;
    border: 1.5px solid #c9cbe2;
    transition: all 0.2s ease-in-out;
    &:after {
      content: "";
      position: absolute;
      height: 10px;
      width: 5px;
      border-right: 2px solid #fff;
      border-bottom: 2px solid #fff;
      top: 40%;
      left: 50%;
      transition: all 0.2s ease-in-out;
      transform: translate(-50%, -50%) rotate(45deg);
      opacity: 0;
    }
  }
`;

export const Options = styled.div`
  top: -17px;
  background-color: #fff;
  position: absolute;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 10px;
  width: 190px;
  z-index: 10000;
`;

export const Checkbox = styled.input`
  display: inline-block;
  appearance: none;
  -webkit-appearance: none;
  > input {
    opacity: 0;
  }
  position: relative;
  padding-left: 25px;
  cursor: pointer;
  margin-top: -20px;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    top: 1px;
    width: 17px;
    height: 17px;
    background: #f26a7e;
    border-radius: 3px;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3);
  }
  &:after {
    content: "✔";
    position: absolute;
    top: -1px;
    left: 2px;
    font-size: 16px;
    color: #fff;
    transition: all 0.2s;
  }

  > input:not(:checked) + label {
    &:after {
      opacity: 0;
      transform: scale(0);
    }
  }
  > input:disabled:not(:checked) + label {
    &:before {
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:checked + label {
    &:after {
      opacity: 1;
      transform: scale(1);
    }
  }
  > input:disabled:checked + label {
    &:after {
      color: #999;
    }
  }
  > input:disabled + label {
    color: #aaa;
  }
  > input:checked:focus + label,
  input:not(:checked):focus + label {
    &:before {
      border: 1px dotted blue;
    }
  }
`;
