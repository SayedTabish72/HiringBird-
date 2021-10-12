import React from "react";
import Image from "next/image";
import { Bottom, Container, Top, Wrap } from "./styles/Section.styled";

const Section = () => {
  return (
    <Container>
      <Top>
        <div className="left">
          <h1>How does it work?</h1>
        </div>
        <div className="right">
          <h5>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed atque
            nihil labore repudiandae eligendi, animi accusamus facere.
            Perferendis et quaerat eos magni veritatis, itaque unde, quis quas a
            maiores facere.
          </h5>
          <button>Apply Now</button>
        </div>
      </Top>
      <Bottom>
        <Wrap>
          <Image src="/images/1.png" alt="universe" width={400} height={400} />
          <h3>Sign In</h3>
          <p>Create an account to get started</p>
        </Wrap>

        <Wrap>
          <Image src="/images/2.png" alt="universe" width={350} height={350} />
          <h3>Search for internships</h3>
          <p>Look thorugh our carefully handpicked bunch of internships</p>
        </Wrap>

        <Wrap>
          <Image src="/images/3.png" alt="universe" width={350} height={350} />
          <h3>Apply and follow procedure</h3>
          <p>Now sit back and wait for the call back and follow simple steps</p>
        </Wrap>
      </Bottom>
    </Container>
  );
};

export default Section;
