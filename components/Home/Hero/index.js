import styled from "styled-components";
import { Button } from "../../common/styles/FilledBtn.styled";
import { Container } from "../common/styles/Container.styled";

function Hero() {
  return (
    <Container>
      <TopSplit>
        <Left>
          <h1 data-testid="heading">Find your dream Internship</h1>
          <div className="bottom">
            <Button padding="17px 35px">Get Started</Button>
            <p>
              The only way to do great work is to love what you do. If you
              haven’t found it yet, keep looking. Don’t settle. As with all
              matters of the heart, you’ll know when you find it.” <br />{" "}
              <span>-Steve Jobs</span>
            </p>
          </div>
        </Left>
        <Right>
          <img src="./home/hero/hero.svg" alt="adobe illutstration" />
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
  @media (max-width: 836px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  h1 {
    font-weight: 800;
    font-size: clamp(2rem, 1.5rem + 2.2222vw, 3.5rem);
    color: #404366;
  }
  .bottom {
    p {
      font-style: italic;
      margin-top: 0.7rem;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: #404366;

      span {
        font-weight: 800;
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
    margin-left: 0.4rem;
    margin-right: 0.2rem;
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

export const HeroDiv = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 866px) {
    flex-direction: column;
  }
`;

export const HeroContainer = styled.div`
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  background-color: #f5f5f5;

  // @media (max-width: 783px) {
  //   padding-left: 25px;
  //   padding-right: 25px;
  // }
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-top: 40px;
  }
`;

export const HeroLeft = styled.div`
  ${"" /* height: 65vh; */}
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  ${"" /* align-items: center; */}
  ${"" /* text-align: center; */}
    margin-left: 130px;
  @media (max-width: 783px) {
    height: 350px;
  }
  @media (max-width: 1129px) {
    margin-left: 50px;
  }
  @media (max-width: 903px) {
    margin-left: 30px;
  }
`;

export const HeroRight = styled.div`
  height: 400px;

  @media (max-width: 783px) {
    text-align: center;
    margin-top: -30px;
    margin-bottom: -30px;
    height: min-content;
  }
`;

export const Image = styled.img`
  width: 538px;
  height: 100%;
  @media (max-width: 1129px) {
    width: 439px;
  }
  @media (max-width: 783px) {
    width: 365px;
    height: 354px;
  }
  @media (max-width: 392px) {
    width: 265px;
    height: 254px;
  }
  @media (max-width: 954px) {
    width: 390px;
  }
`;

export const Para = styled.p`
  width: 420px;
  color: #404366;
  line-height: 25px;
  font-style: italic;
  font-weight: 500;
  padding: 15px 0;
  @media (max-width: 783px) {
    width: 332px;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
  }
  @media (max-width: 392px) {
    width: 300px;
  }
  @media (max-width: 341px) {
    width: 280px;
  }
`;

export const Writer = styled.span`
  font-weight: 500;
`;

export const Heading = styled.h1`
  font-size: 45px;
  color: #404366;
  margin-bottom: 50px;

  @media (max-width: 783px) {
    font-size: 36px;
    margin-bottom: 13px;
    margin-top: 0;
  }
  @media (max-width: 404px) {
    font-size: 30px;
  }
`;

export const Head = styled.span`
  font-size: 51px;
  font-weight: bold;

  @media (max-width: 783px) {
    font-size: 44px;
  }
  @media (max-width: 404px) {
    font-size: 36px;
  }
`;

export const HeroSearch = styled.div`
  display: flex;
  margin-left: 40px;
  margin-right: 170px;
  margin-bottom: 40px;
  @media (max-width: 783px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const HeroSearchLeft = styled.div`
  background-color: #f9bfc2;
  padding: 10px 9px;
  border-radius: 50%;
  margin-right: 60px;
  @media (max-width: 783px) {
    margin-right: 0px;
    position: absolute;
    right: 10px;
    top: 50%;
    box-shadow: rgba(242, 106, 126, 0.25) 0px 54px 55px,
      rgba(242, 106, 126, 0.12) 0px -12px 30px,
      rgba(242, 106, 126, 0.12) 0px 4px 6px,
      rgba(242, 106, 126, 0.17) 0px 9px 13px,
      rgba(242, 106, 126, 0.09) 0px -3px 5px;
  }
`;

export const HeroSearchRight = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 4px;
  height: 45px;
  margin-top: 5px;
  flex: 1;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  background-color: #fff;
  border-radius: 4px;
  @media (max-width: 589px) {
    max-width: 1000px;
    min-width: 780px;
    margin-left: 30px;
  }
`;

export const Img = styled.img`
  width: 34px;
  height: 25px;
`;

export const SearchImg = styled.img`
  width: 34px;
  height: 25px;
  @media (max-width: 783px) {
    width: 24px;
    height: 16px;
    color: #f26a7e;
  }
`;

export const SearchIcon = styled.div`
  margin-left: 40px;
  margin-right: 40px;
  background-color: #fff;
  @media (max-width: 783px) {
    margin-left: 0;
    margin-right: 5px;
  }
`;

export const SearchField = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 10px 0;
  color: #404366;
  font-size: 16px;
  font-weight: 400;
  &::placeholder {
    color: #c9cbe2;
    font-size: 16px;
    font-weight: 400;
  }
  @media (max-width: 783px) {
    &::placeholder {
      font-size: 13px;
    }
  }
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  background-color: #404366;
  margin-right: 20px;
  color: #fff;
  font-size: 16px;
  width: 100%;
  border: none;
  padding: 13px 38px;
  border-radius: 4px;
  &:hover {
    background-color: #404355;
    transition: all 0.3s ease;
  }
  @media (max-width: 783px) {
    margin-right: 0;
    font-size: 14px;
    padding: 14px 30px;
  }
`;

export const SearchButton = styled.div``;
