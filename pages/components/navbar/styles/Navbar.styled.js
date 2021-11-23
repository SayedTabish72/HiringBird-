import styled from "styled-components";

export const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 720px) {
    gap: 1rem;
  }
  @media (max-width: 666px) {
    display: none;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #404366;
    text-decoration: none;
    @media (max-width: 720px) {
      font-size: 14px;
    }
  }
  .secondary_btn {
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: #404366;
    cursor: pointer;
    background: none;
    border: none;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:active {
      transform: scale(0.95);
    }
    @media (max-width: 720px) {
      font-size: 16px;
    }
  }
  .primary_btn {
    background: #f26a7e;
    border-radius: 4px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    padding: 10px 26px;
    border: none;
    cursor: pointer;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:active {
      transform: scale(0.95);
    }
    @media (max-width: 720px) {
      font-size: 12px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: min(98%, 90rem);
  margin-inline: auto;
  font-family: "Inter", sans-serif;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  .icon {
    margin-right: 1rem;
  }
  @media (max-width: 736px) {
    /* display: none; */
    a {
      margin-right: 1em;
      font-size: 14px;
    }
    button {
      margin-right: 1.2em;
      font-size: 13px;
    }
  }
  @media (max-width: 666px) {
    display: none;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  svg {
    cursor: pointer;
    /* margin-right: 1rem; */
  }
`;
export const SLink = styled.a`
  margin-right: 2em;
  font-weight: 500;
  font-size: 16px;
  color: #404366;
  text-decoration: none;
`;
export const SBtn = styled.button`
  margin-right: 1.6em;
  background-color: #f26a7e;
  padding: 10px 26px;
  color: #fff;
  border: none;
  font-weight: 600;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
`;

export const Avatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  padding: 6px;
  border: 2.5px solid #f37386;
  height: 2.5rem;
  width: 2.5rem;
  svg {
    &:last-child {
      margin-top: 1px;
    }
  }
`;

export const HamBurger = styled.div`
  @media (min-width: 666px) {
    display: none;
  }
  svg {
    height: 2rem;
    cursor: pointer;
  }
`;

export const DropdownSelect = styled.ul`
  position: relative;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #a9accb;
  transition: all 0.3 ease-in-out;
  @media (max-width: 1060px) {
    margin-right: 5px;
  }
`;

export const Img = styled.img`
  width: 17px;
  margin-left: 10px;
  cursor: pointer;
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

  .label {
    margin-left: -10px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    color: #c9cbe2;
  }
`;

export const Options = styled.div`
  top: 10px;
  background-color: #fff;
  position: absolute;
  right: -50px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 15px;
  width: 210px;
  z-index: 10000;
`;

export const SigninOptions = styled.div`
  top: 10px;
  background-color: #fff;
  position: absolute;
  right: -520px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  padding: 15px;
  width: 210px;
  z-index: 10000;
`;

export const OptionTitle = styled.div`
  .up-show {
    margin-top: -8px;
  }
  span {
    cursor: pointer;
    font-size: 18px;
  }
  .option-title {
    margin-bottom: 10px;
  }
  list-style-type: none;
  padding: 5px 10px;
  font-style: normal;
  font-weight: 500;

  line-height: 19px;
  color: #c9cbe2;
  display: flex;
  align-items: center;
  justify-content: center;
`;
