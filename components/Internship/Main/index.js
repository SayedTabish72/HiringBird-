import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useMediaQuery from "../../../hooks/useMediaQuery";
import GridView from "./GridView";
import ListView from "./ListView";
import Sortby from "../Filter/Dropdown/Sortby";
import Dropdown from "../Filter/Dropdown";

function Main() {
  const isMobile = useMediaQuery("(max-width: 1122px)");

  const [bindIndex, setBindIndex] = useState(1);

  useEffect(() => {
    isMobile && setBindIndex(1);
  }, [isMobile]);

  return (
    <Wrapper>
      <Head>
        <h3>120 internships for UI/UX Design</h3>
        <Tabs>
          <Wrap>
            <Dropdown title="Sort By" component={<Sortby />} />
          </Wrap>
          <TabItem
            active={bindIndex === 0}
            viewBox="0 0 25 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBindIndex(0)}
          >
            <path
              d="M23.8057 22.0661H7.798C7.13825 22.0661 6.60352 21.3926 6.60352 20.5616C6.60352 19.7306 7.13825 19.0571 7.798 19.0571H23.8053C24.465 19.0571 24.9998 19.7306 24.9998 20.5616C24.9998 21.3926 24.4654 22.0661 23.8057 22.0661Z"
              fill=""
            />
            <path
              d="M23.8057 13.0388H7.798C7.13825 13.0388 6.60352 12.3652 6.60352 11.5343C6.60352 10.7033 7.13825 10.0298 7.798 10.0298H23.8053C24.465 10.0298 24.9998 10.7033 24.9998 11.5343C25.0002 12.3652 24.4654 13.0388 23.8057 13.0388Z"
              fill=""
            />
            <path
              d="M23.8057 3.51089H7.798C7.13825 3.51089 6.60352 2.83739 6.60352 2.00642C6.60352 1.17545 7.13825 0.501953 7.798 0.501953H23.8053C24.465 0.501953 24.9998 1.17545 24.9998 2.00642C24.9998 2.83739 24.4654 3.51089 23.8057 3.51089Z"
              fill=""
            />
            <path
              d="M1.90045 4.04105C2.95004 4.04105 3.8009 3.13643 3.8009 2.02052C3.8009 0.904619 2.95004 0 1.90045 0C0.850861 0 0 0.904619 0 2.02052C0 3.13643 0.850861 4.04105 1.90045 4.04105Z"
              fill=""
            />
            <path
              d="M1.90045 13.3682C2.95004 13.3682 3.8009 12.4636 3.8009 11.3477C3.8009 10.2318 2.95004 9.32715 1.90045 9.32715C0.850861 9.32715 0 10.2318 0 11.3477C0 12.4636 0.850861 13.3682 1.90045 13.3682Z"
              fill=""
            />
            <path
              d="M1.90045 22.6963C2.95004 22.6963 3.8009 21.7917 3.8009 20.6758C3.8009 19.5599 2.95004 18.6553 1.90045 18.6553C0.850861 18.6553 0 19.5599 0 20.6758C0 21.7917 0.850861 22.6963 1.90045 22.6963Z"
              fill=""
            />
          </TabItem>

          <TabItem
            active={bindIndex === 1}
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => setBindIndex(1)}
          >
            <path
              d="M9.16152 0H2.13413C0.957373 0 0 0.957373 0 2.13413V9.16152C0 10.3383 0.957373 11.2957 2.13413 11.2957H9.16152C10.3383 11.2957 11.2957 10.3383 11.2957 9.16152V2.13413C11.2957 0.957373 10.3383 0 9.16152 0Z"
              fill=""
            />
            <path
              d="M22.8659 0H15.8385C14.6617 0 13.7043 0.957373 13.7043 2.13413V9.16152C13.7043 10.3383 14.6617 11.2957 15.8385 11.2957H22.8659C24.0426 11.2957 25 10.3383 25 9.16152V2.13413C25 0.957373 24.0426 0 22.8659 0Z"
              fill=""
            />
            <path
              d="M9.16152 13.7043H2.13413C0.957373 13.7043 0 14.6617 0 15.8385V22.8659C0 24.0426 0.957373 25 2.13413 25H9.16152C10.3383 25 11.2957 24.0426 11.2957 22.8659V15.8385C11.2957 14.6617 10.3383 13.7043 9.16152 13.7043Z"
              fill=""
            />
            <path
              d="M22.8659 13.7043H15.8385C14.6617 13.7043 13.7043 14.6617 13.7043 15.8385V22.8659C13.7043 24.0426 14.6617 25 15.8385 25H22.8659C24.0426 25 25 24.0426 25 22.8659V15.8385C25 14.6617 24.0426 13.7043 22.8659 13.7043Z"
              fill=""
            />
          </TabItem>
        </Tabs>
      </Head>

      {bindIndex === 0 && <ListView />}
      {bindIndex === 1 && <GridView />}
    </Wrapper>
  );
}

export default Main;

const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  h3 {
    font-weight: 500;
    font-size: 22px;
    color: #404366;
  }
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  user-select: none;

  svg {
    cursor: pointer;
    &:active {
      transform: scale(0.9);
    }
  }
  @media (max-width: 1122px) {
    display: none;
  }
`;

const TabItem = styled.svg`
  height: 1.5rem;
  fill: ${(props) => (props.active ? "#F26A7E" : "#C9CBE2")};
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: min(90%, 90rem);
`;

const Wrap = styled.div`
  margin-right: 20px;
`;
