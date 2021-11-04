import React from "react";
import {
  HeroContainer,
  HeroDiv,
  HeroSearch,
  HeroLeft,
  HeroRight,
  Heading,
  Button,
  Writer,
  Para,
  Image,
  Head,
  HeroSearchLeft,
  HeroSearchRight,
  Img,
  SearchIcon,
  SearchField,
  SearchButton,
  Search,
  ButtonSearch,
  SearchImg,
} from "./styles/Hero.styled";
import {TextField, Input} from "../parts/styles/CommonComponents/Textbox.styled"

function Hero() {
  return (
    <HeroContainer>
      <HeroDiv>
        <HeroLeft>
          <Heading>
            Find your dream <br />
            <Head>Internship</Head>
          </Heading>
          <Button>Get Started</Button>
          <Para>
            The only way to do great work is to love what you do. If you haven’t
            found it yet, keep looking. Don’t settle. As with all matters of the
            heart, you’ll know when you find it.”
          </Para>
          <Writer>-Steve Jobs</Writer>
        </HeroLeft>
        <HeroRight>
          <Image src="./home.png" />
        </HeroRight>
      </HeroDiv>
      <HeroSearch>
        <HeroSearchLeft>
          <Img src="./earbugs.svg" />
        </HeroSearchLeft>
        <HeroSearchRight>
          <Search>
            <SearchIcon>
              <SearchImg src="./search.svg" />
            </SearchIcon>
            <TextField>
              <Input placeholder="Search Internships here..."></Input>
            </TextField>
            <SearchButton>
              <ButtonSearch>Search</ButtonSearch>
            </SearchButton>
          </Search>
        </HeroSearchRight>
      </HeroSearch>
    </HeroContainer>
  );
}

export default Hero;
