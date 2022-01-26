import { Button } from "./styles/Hero.styled";
import styled from "styled-components";
import { Container } from "./styles/CommonComponents/Container.styled";

function Hero() {
  return (
    <Container>
      <TopSplit>
        <Left>
          <h1 data-testid="heading">Find your dream Internship</h1>
          <div className="bottom">
            <Button>Get started</Button>
            <p>
              The only way to do great work is to love what you do. If you
              haven’t found it yet, keep looking. Don’t settle. As with all
              matters of the heart, you’ll know when you find it.” -Steve Jobs
            </p>
          </div>
        </Left>
        <Right>
          <img src="./home.png" alt="adobe illutstration" />
        </Right>
      </TopSplit>

      <BottomSplit>
        <img src="./search.svg" alt="" />
        <input type="text" placeholder="Search for interships" />
        <button>Search</button>
      </BottomSplit>
    </Container>
  );
}

export default Hero;

const TopSplit = styled.div`
  display: flex;
  * {
    flex-basis: 100%;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    color: #404366;
    margin-bottom: 1.5rem;
    @media (max-width: 600px) {
      font-size: 44px;
    }
  }
  .bottom {
    p {
      font-style: italic;
      font-weight: 500;
      font-size: 20px;
      line-height: 30px;
      color: #404366;
      @media (max-width: 600px) {
        line-height: 27px;
        font-size: 18px;
      }
    }
  }
`;
const Right = styled.div`
  img {
    display: block;
    max-width: 100%;
    margin-inline: auto;
  }
`;
const BottomSplit = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  padding: 4px;
  width: 90%;
  border: 1px solid #c9cbe2;
  position: relative;
  border-radius: 4px;
  @media (max-width: 600px) {
    width: 100%;
  }
  margin-inline: auto;
  img {
    height: 1.6rem;
    margin-left: 0.5em;
  }
  input {
    flex: 1;
    padding: 0.7rem 0;

    margin: 0 0.5rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }
  button {
    position: absolute;
    background: #404366;
    right: 0;
    border-radius: 4px;
    padding: 0 40px;
    height: 100%;
    color: #fff;
    cursor: pointer;
    border: none;
  }
`;
