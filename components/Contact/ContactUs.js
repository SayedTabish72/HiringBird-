import { Button } from "@/common/styles/FilledBtn.styled";
import { Container } from "components/Home/common/styles/Container.styled";
import React from "react";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <Container>
      <Split>
        <Box>
          <ImgWrap>
            <img src="/contact/earphone.svg" alt="earphone"></img>
          </ImgWrap>
        </Box>
        <Left>
          <h1>Contact us</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et dicta
            saepe, soluta quae eligendi, perspiciatis eos incidunt laborum
            numquam deserunt consequuntur quo. Reprehenderit aperiam assumenda
            eius suscipit voluptatem aspernatur voluptatum.
          </p>

          <Button padding="1.063em 2.1875em">Join Skilzen</Button>
        </Left>
        <Right>
          <img src="/about/aboutus/vector.png" alt="hello" />
        </Right>
      </Split>
    </Container>
  );
};

export default ContactUs;

const ImgWrap = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: #f26a7e;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  display:flex;
  align-items:flex-end;
  @media (max-width:861px){
    display:none;
  }
img{
  width: 33px;
  height: 33px;
}

  }
`;

const Split = styled.div`
  ${"" /* position: relative; */}
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
  gap: 2rem;
`;
const Left = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  gap: 5rem;

  h1 {
    font-weight: 900;
    font-size: clamp(1.8rem, 1.6083rem + 0.8519vw, 2.375rem);
    color: #404366;
    border-bottom: 4px solid #f26a7e;
    width: fit-content;
  }

  p {
    font-size: 18px;
    line-height: 27px;
    color: #18191f;
    margin-bottom: -2.5rem;
  }

  @media (max-width: 860px) {
    gap: 1.5rem;

    p {
      margin-bottom: -0.5rem;
    }
  }
`;
const Right = styled.div`
  flex-basis: 50%;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;
