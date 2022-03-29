import styled from "styled-components";
import React from "react";
import { keyframes } from "styled-components";

export default function Loader() {
  return (
    <Wrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Wrapper>
  );
}

// keyframe
const rotateKey = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Wrapper = styled.div`
  & {
    position: relative;
    width: 50px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 20px;
    height: 20px;
    margin: 2px;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: ${rotateKey} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  & div:nth-child(1) {
    animation-delay: -0.45s;
  }
  & div:nth-child(2) {
    animation-delay: -0.3s;
  }
  & div:nth-child(3) {
    animation-delay: -0.15s;
  }
`;
