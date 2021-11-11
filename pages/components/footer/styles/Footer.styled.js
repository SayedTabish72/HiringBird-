import styled from "styled-components";

export const Container = styled.div`
  margin-inline: auto;
  width: 100%;
  padding-top: 3rem;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  margin-inline: auto;
  width: 95%;
  padding: 1rem 0;
  background: #f2f2f2;
  display: flex;
  @media (max-width: 967px) {
    display: none;
  }
`;
export const MobileContainer = styled.div`
  display: none;
  @media (max-width: 967px) {
    display: flex;
    margin-inline: auto;
    width: 95%;
    padding: 1rem 0;
    background: #f2f2f2;
    justify-content: space-evenly;
  }
  @media (max-width: 530px) {
    justify-content: space-between;
  }
`;
export const Left = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
`;
export const Right = styled.div`
  display: flex;
  width: 40%;
  flex-direction: column;
  align-items: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
`;
export const End = styled.div`
  display: flex;
  margin: 1rem 0;
  @media (max-width: 967px) {
    flex-direction: flex-start;
    flex-wrap: wrap;
  }
`;

export const Heading1 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  padding-bottom: 1.5rem;

  color: #404366;
`;

export const Span1 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  padding-bottom: 1rem;

  color: #404366;
`;

export const Span2 = styled.span`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 15px;
  margin-right: 1rem;

  color: #404366;
  @media (max-width: 967px) {
    margin-right: 1rem;
  }
`;

export const Top = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;

export const Div1 = styled.div``;
