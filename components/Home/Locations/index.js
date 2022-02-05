import styled from "styled-components";
import { Container } from "../common/styles/Container.styled";

function Locations() {
  return (
    <Container>
      <Top>
        <Left>
          <h1 data-testid="heading">Location</h1>
        </Left>
        <Right>
          <p>
            We are currently encouraging Work From Home Internships for the
            safety for all our loved ones. Find the best internship
            opportunities here to launch your professional career.
          </p>
        </Right>
      </Top>
      <Bottom>
        <Wrap>
          <img src="/delhincr.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>

        <Wrap>
          <img src="/bengaluru.svg" alt="" />
          <h5>Bengaluru</h5>
        </Wrap>

        <Wrap>
          <img src="/chennai.svg" alt="" />
          <h5>Chennai</h5>
        </Wrap>

        <Wrap>
          <img src="/hyderabad.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>

        <Wrap>
          <img src="/kolkata.svg" alt="" />
          <h5>New Delhi NCR</h5>
        </Wrap>
      </Bottom>
    </Container>
  );
}

export default Locations;

const Top = styled.div`
  display: flex;
  * {
    flex-basis: 100%;
  }
  margin-bottom: 5%;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  h1 {
    font-weight: 800;
    font-size: clamp(2rem, 1.5rem + 2.2222vw, 3.5rem);
    color: #404366;
    @media (max-width: 600px) {
      font-size: 44px;
    }
  }
`;
const Right = styled.div`
  p {
    font-weight: normal;
    font-size: 20px;
    line-height: 32px;
    color: #18191f;
    @media (max-width: 600px) {
      line-height: 27px;
      font-size: 18px;
    }
  }
`;
const Bottom = styled.div`
  display: flex;
  margin-inline: auto;
  max-width: min(100%, 60rem);
  flex-flow: row wrap;
  gap: 20px;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgrey;
  border-radius: 4px;
  height: 200px;
  flex-basis: 23%;
  transition: all 0.2s;
  }
  &:hover {
    background: #fff8f8;
  }

  img {
    object-fit: cover;
    margin-bottom: 10px;
  }
  @media (max-width: 900px) {
    flex-basis: 31%;
  }
  @media (max-width: 600px) {
    flex-basis: 47%;
  }
`;

export const Divstart = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 80%;
  @media (max-width: 589px) {
    flex-direction: column;
  }
`;

export const Innerdiv1 = styled.div`
  display: "flex";
  flex-wrap: wrap;
`;
export const Innerdiv2 = styled.div`
  display: "flex";
  width: 50%;
  flex-wrap: wrap;
`;

export const Span50 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;

  @media (max-width: 589px) {
    display: none;
  }
`;
export const Span1 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 800;
  font-size: 72px;
  line-height: 98px;
  font-feature-settings: "salt" on, "liga" off;
  color: #404366;

  @media (max-width: 589px) {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
    width: 50%;
  }
`;

export const Spanright = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
  @media (max-width: 589px) {
    font-size: 14px;
    line-height: 21px;
    width: 370px;
    font-feature-settings: "salt" on, "liga" off;
    margin-top: 5%;
  }
`;

export const Spanright2 = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;
  width: fit-content;
  margin-top: 6%;
  border-bottom: 1.76px solid #18191f;

  @media (max-width: 589px) {
    font-size: 17px;
    line-height: 24px;
    width: 170px;
  }
`;

export const Lowerdiv = styled.div`
  display: flex;
  height: 70%;
  width: 80%;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-top: 4%;

  @media (max-width: 381px) {
    width: 100%;
    align-items: center;
    margin-left: 35px;
  }
`;

export const Categorycard = styled.div`
  width: 174px;
  height: 13em;
  border: 1px solid rgba(75, 75, 75, 0.3);
  border-radius: 8px;
  flex: 0 0 14em;
  margin-top: 2%;
  box-sizing: border-box;
  margin-right: 10px;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 8px 24px rgba(216, 216, 216, 0.3);
    backdrop-filter: blur(40px);
  }

  @media (max-width: 589px) {
    width: 140px;
    height: 140px;
    flex: 0 0 140px;
  }
`;

export const Categorycard1 = styled.div`
  width: 174px;
  background-color: #fff8f8;
  height: 13em;
  border: 1px solid rgba(75, 75, 75, 0.3);
  border-radius: 8px;
  flex: 0 0 14em;
  margin-top: 2%;
  box-sizing: border-box;
  margin-right: 10px;
  margin-left: 10px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  &:hover {
    box-shadow: 0px 8px 24px rgba(216, 216, 216, 0.3);
    backdrop-filter: blur(40px);
  }

  @media (max-width: 589px) {
    width: 140px;
    height: 140px;
    flex: 0 0 140px;
  }
`;

export const Logo = styled.img`
  width: 30px;
  height: 30px;
`;

export const Button = styled.button`
  border: 1px solid #f26a7e;
  background: none;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;

  color: #404366;
  padding: 10px;

  margin: 0px 10px;
  border-radius: 4px;

  &:hover {
    background: #f26a7e;
  }
`;
