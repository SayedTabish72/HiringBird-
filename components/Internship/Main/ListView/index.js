import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Main from "../../Detail/Main";
import Card from "./Card";

function ListView() {
  // redux
  const internships = useSelector((state) => state.internship.internships);
  const isLoading = useSelector((state) => state.internship.isLoading);

  const [active, setActive] = useState(internships[0].id);

  console.log(active);

  return (
    <Wrapper>
      <Left>
        {internships.map((i, index) => (
          <div key={i.id} onClick={() => setActive(i.id)}>
            <Card
              active={active}
              id={i.id}
              title={i.jobName}
              internshipType={i.internshipType}
              company={i.companyName}
              skills={i.skills}
              createdAt={i.createdAt}
              applicantsCount={i.numberOfApplicants}
            />
          </div>
        ))}
      </Left>
      <Right>
        <Main active={active} width={false} />
      </Right>
    </Wrapper>
  );
}

export default ListView;

const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: 30rem 1fr;
  gap: 2rem;
  position: relative;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  overflow-y: auto;
  height: 50rem;
  position: sticky;
  top: 1rem;
  &::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
    height: 12px;
  }
  &::-webkit-scrollbar-track {
    background: #fff; /* color of the tracking area */
    margin: 0.3rem 0;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgb(180, 180, 180); /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
    border: 2px solid #fff; /* creates padding around scroll thumb */
  }
`;
const Right = styled.div`
  @media (max-width: 1122px) {
    display: none;
  }
`;
