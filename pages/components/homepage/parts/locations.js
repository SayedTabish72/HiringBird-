import React from "react";
import {
  HeroSearch,
  HeroSearchLeft,
  HeroSearchRight,
  SearchIcon,
  SearchField,
  SearchButton,
  Search,
  ButtonSearch,
  Img,
  Input,
  SearchImg,
} from "./styles/Hero.styled";
import {
  Container,
  Divstart,
  Innerdiv1,
  Innerdiv2,
  Span50,
  Spanright,
  Spanright2,
  Lowerdiv,
  Categorycard,
  Button,
  Categorycard1,
  Span1,
} from "./styles/Locations.styled";
import Image from "next/image";
import ncr from "../../../../public/delhincr.svg";
import bengaluru from "../../../../public/bengaluru.svg";
import chennai from "../../../../public/chennai.svg";
import hyderabad from "../../../../public/hyderabad.svg";
import kolkata from "../../../../public/kolkata.svg";
import mumbai from "../../../../public/mumbai.svg";
import pune from "../../../../public/pune.svg";
import wfh from "../../../../public/wfh.svg";

function Locations() {
  return (
    <>
      <Container>
        <Divstart>
          <Innerdiv1>
            <Span1>Locations</Span1>
          </Innerdiv1>
          <Innerdiv2>
            <Spanright>
              We are currently encouraging Work From Home Internships for the
              safety for all our loved ones. Find the best internship
              opportunities here to launch your professional career.
            </Spanright>
            <br />
          </Innerdiv2>
        </Divstart>

        <Lowerdiv>
          <Categorycard1>
            <Image src={ncr} alt="engg" />
            <span>New Delhi NCR</span>
          </Categorycard1>
          <Categorycard>
            <Image src={mumbai} alt="engg" />
            <span>Mumbai</span>
          </Categorycard>
          <Categorycard>
            <Image src={pune} alt="engg" />
            <span>Pune</span>
          </Categorycard>
          <Categorycard>
            <Image src={kolkata} alt="engg" />
            <span>Kolkata</span>
          </Categorycard>
          <Categorycard>
            <Image src={chennai} alt="engg" />
            <span>Chennai</span>
          </Categorycard>
          <Categorycard>
            <Image src={bengaluru} alt="engg" />
            <span>Bengaluru</span>
          </Categorycard>
          <Categorycard>
            <Image src={hyderabad} alt="engg" />
            <span>Hyderabad</span>
          </Categorycard>
          <Categorycard>
            <Image src={wfh} alt="engg" />
            <span>Work From Home</span>
          </Categorycard>
        </Lowerdiv>
      </Container>
      <HeroSearch>
        <HeroSearchLeft>
          <Img src="./earbugs.svg" />
        </HeroSearchLeft>
        <HeroSearchRight>
          <Search>
            <SearchIcon>
              <SearchImg src="./search.svg" />
            </SearchIcon>
            <SearchField>
              <Input placeholder="Search Location here..."></Input>
            </SearchField>
            <SearchButton>
              <ButtonSearch>Search</ButtonSearch>
            </SearchButton>
          </Search>
        </HeroSearchRight>
      </HeroSearch>
    </>
  );
}

export default Locations;
