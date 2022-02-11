import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  align-items: center;
  @media (max-height: 700px) {
    margin-top: 60px;
  }
`;

export const Blob1 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  z-index: 1;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Blob2 = styled.div`
  img {
    height: 100%;
    width: 100%;
  }
  position: absolute;
  top: 0;
  right: 0;
`;

export const OuterContainer = styled.div`
  height: 100vh;
  background-color: #e5e5e5;
  display: grid;
  place-items: center;
  position: relative;
`;

export const Split = styled.div`
  display: flex;
  height: 80%;
  width: min(88%, 80rem);
  background-color: #fff;
  margin-inline: auto;
  border-radius: 20px;
  overflow: hidden;
  z-index: 99;
  @media (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
`;

export const Image1 = styled.img`
  position: absolute;
  right: 4.17%;
  width: 251px;
  height: 245px;
  z-index: -1;
  @media (max-width: 1138px) {
    right: 2%;
  }
`;

export const Image2 = styled.img`
  position: absolute;
  bottom: -125px;
  left: 0;
  z-index: -1;
  width: 449px;
  height: 439px;

  @media (max-width: 478px) {
    width: 300px;
    bottom: -280px;
  }
  @media (max-width: 295px) {
    width: 170px;
  }
`;

export const MiniContainer = styled.div`
  width: 77.5%;
  background-color: #fff;
  display: flex;
  border-radius: 20px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  position: relative;
  @media (max-width: 1138px) {
    width: 85%;
  }
  @media (max-width: 446px) {
    margin: 30px auto;
  }
`;

export const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.2em 0 2.3em 0;
  height: 100%;
  background-color: #fff8f8;
  width: 31.5rem;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const RightDiv = styled.div`
  padding: 45px 80px;
  width: 50%;
  overflow-y: scroll;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
  }
  @media (max-width: 1025px) {
    width: 100%;
  }
  @media (max-width: 622px) {
    padding: 25px 30px;
  }
`;

export const Text = styled.p`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #c9cbe2;
  width: 380px;
  span {
    color: #404366;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-top: 60px;
  .customFileInput {
    margin-top: -30px;
    button {
      border-radius: 6px;
      padding: 12px 30px;
      font-weight: 600;
      font-size: 16px;
      color: #404366;
      border: 1px solid #f26a7e;
      cursor: pointer;
      background: ${(props) => (props.uploaded ? "#f26a7e" : "#ffffff")};

      display: flex;
      align-items: center;
      gap: 0.7rem;
      svg {
        color: #a9accb;
        height: 1.3rem;
      }
    }
  }
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const SubBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Cross = styled.img`
  position: absolute;
  right: 20px;
  top: 20px;
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const SignupImg = styled.img`
  display: block;
  width: 100%;
  height: 90%;
  margin-inline: auto;
  padding: 0 3em;
`;

export const SignupImg1 = styled.img`
  display: block;
  width: 100%;
  height: 80%;
  margin-inline: auto;
  padding: 0 3em;
`;

export const Logo = styled.img`
  margin-left: 1em;
`;

export const Heading = styled.h1`
  color: #ec1f28;
  font-weight: 600;
  font-size: 38px;
  line-height: 40.83px;
  margin-right: -35px;
  margin-bottom: 30px;
  @media (max-width: 511px) {
    font-size: 30px;
  }
`;

export const SubHeading = styled.h3`
  color: #404366;
  font-size: 27px;
  line-height: 30.73px;
  font-weight: 600;
  margin-top: 3.8%;
  margin-bottom: 3.8%;
  @media (max-width: 511px) {
    font-size: 20px;
  }
`;

export const IconsDiv = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
  margin-bottom: 26px;
  @media (max-width: 511px) {
    width: 150px;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
  @media (max-width: 511px) {
    width: 30px;
    height: 30px;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  ${"" /* width: 400px; */}
  width: 100%;
  margin-top: 16px;
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  ${"" /* border: 1px solid green; */}
  width: 80%;
  margin-right: 20px;
`;

export const InputSeperate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

export const InputName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #404366;
`;

export const Star = styled.span`
  font-size: 12px;
  color: #ff5f66;
`;

export const InputField = styled.input`
  border: none;
  border-bottom: 0.76489px solid #a9accb;
  outline: none;
  padding-top: 10px;
  padding-bottom: 4px;
  ${"" /* border:1px solid red; */}
  width: 100%;
  &::placeholder {
    color: #c9cbe2;
    font-size: 14px;
    font-weight: 400;
    line-height: 16.83px;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: center;
`;

export const CheckboxField = styled.input`
  margin-right: 7px;
`;

export const CheckboxText = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #404366;
`;

export const SignupButton = styled.button`
  font-size: 14px;
  color: #404366;
  font-weight: 500;
  border: 1px solid #ff5f66;
  border-radius: 5px;
  padding: 10px 23px;
  background-color: #fff;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    background-color: #ff5f66;
    color: #fff;
  }
`;

export const SignupText = styled.p`
  font-size: 12px;
  color: #404366;
  margin-top: 8px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

export const Wrap1 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  position: absolute;
  bottom: 45px;
  left: 40%;
`;

export const Pink = styled.span`
  color: #ff5f66;
  cursor: pointer;
`;

export const Pink1 = styled.span`
  color: #ff5f66;
  cursor: pointer;
  border-bottom: 1px solid #ff5f66;
`;
