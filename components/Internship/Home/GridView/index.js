import { AnimateSharedLayout, motion } from "framer-motion";
import React from "react";
import Skeleton from "react-loading-skeleton";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Card from "./Card";

function GridView() {
  // redux
  const internships = useSelector((state) => state.internship.internships);
  const isLoading = useSelector((state) => state.internship.isLoading);

  return (
    <AnimateSharedLayout>
      <Wrapper layout>
        {isLoading ? (
          <SkeletonContainer>
            <div className="head">
              <div
                style={{ display: "flex", alignItems: "center", gap: ".3rem" }}
              >
                <Skeleton circle={true} height={20} width={20} />
                <Skeleton height={10} width={80} />
              </div>

              <div className="icons">
                <Skeleton circle={true} height={30} width={30} />
                <Skeleton circle={true} height={30} width={30} />
                <Skeleton circle={true} height={30} width={30} />
              </div>
            </div>

            <div className="body">
              <Skeleton circle={true} height={40} width={40} />
              <Skeleton height={10} width={80} />
              <Skeleton height={10} width="90%" />
              <Skeleton height={10} width="60%" />
              <Skeleton height={10} width="40%" />
              <Skeleton height={10} width="60%" />
            </div>
          </SkeletonContainer>
        ) : (
          <>
            {internships.map((i) => (
              <Card
                key={i.id}
                id={i.id}
                title={i.jobName}
                internshipType={i.internshipType}
                company={i.companyName}
                skills={i.skills}
                createdAt={i.createdAt}
                applicantsCount={i.numberOfApplicants}
              />
            ))}
          </>
        )}
      </Wrapper>
    </AnimateSharedLayout>
  );
}

export default GridView;

const Wrapper = styled(motion.div)`
  padding: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 1.5rem;

  @media (max-width: 1170px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 830px) {
    padding: 1rem 0;
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const SkeletonContainer = styled.div`
  border: 1px solid #c9cbe2;
  border-radius: 0.5rem;
  padding: 1rem;
  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .icons {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  .body {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
  }
`;
