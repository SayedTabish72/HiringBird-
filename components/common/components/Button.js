import React from "react";
import styled from "styled-components";

const Button = ({ title, padding }) => {
  return <Wrapper padding={padding}>{title}</Wrapper>;
};

export default Button;

const Wrapper = styled.div``;
