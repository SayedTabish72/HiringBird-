import styled, { keyframes } from "styled-components";

export const Menus = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  @media (max-width: 835px) {
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
  width: min(90%, 90rem);
  margin-inline: auto;
  padding: 0.5rem 0;
`;
export const Left = styled.div`
  flex: 1;
  display: flex;
  img {
    height: 50px;
    object-fit: contain;

    @media (max-width: 40em) {
      height: 40px;
    }
  }
`;
export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  @media (max-width: 835px) {
    display: none;
  }

  a {
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
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

const FadeIn = keyframes`
  0% {
    transform: translateY(10px);
  
  }
  100% {
    transform: translateY(0px);
  
  }
`;
const FadeOut = keyframes`
  0% {
   
    transform: translateY(0px);
  }
  100% {
 
    transform: translateY(10px);
  
  }
`;
export const HamBurger = styled.div`
  position: relative;
  user-select: none;
  display: flex;
  flex-direction: column;
  align-items: end;
  .icon {
    cursor: pointer;
    .bar1,
    .bar2,
    .bar3 {
      width: 30px;
      height: 3px;
      background-color: #333;
      margin: 4px 0;
      border-radius: 5px;
      transition: 0.4s;
    }
    .bar1 {
      transform: ${({ show }) =>
        show ? "rotate(45deg) translate(5px, 6px)" : "rotate(0)"};
    }
    .bar2 {
      opacity: ${({ show }) => (show ? "0" : "1")};
    }
    .bar3 {
      transform: ${({ show }) =>
        show ? "rotate(-45deg) translate(5px, -6px)" : "rotate(0)"};
    }
  }
  .dropdown {
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
    position: absolute;
    right: 0.5rem;
    top: 2.3rem;
    z-index: 99;
    background: #fff;
    width: 13.5rem;
    ul {
      padding: 1.2rem 1.5rem;
      list-style: none;
      * {
        margin-bottom: 1.2em;
      }
      .special {
        font-weight: 600;
        font-size: 17px;
        color: #395185;
      }
      li {
        cursor: pointer;
        font-weight: 500;
        font-size: 16px;
        color: #a9accb;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        &:active {
          transform: scale(1.03);
        }
      }
    }
  }
  @media (min-width: 835px) {
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
