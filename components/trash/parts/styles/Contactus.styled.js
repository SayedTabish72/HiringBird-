import styled from "styled-components";

export const Container = styled.div``;

export const Container1 = styled.div`
  display: flex;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

export const Leftdiv = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Rightdiv = styled.div`
  flex-basis: 50%;
  margin-left: 3rem;
  @media (max-width: 1000px) {
    margin-left: 1rem;
  }
  img {
    display: block;
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const Heading = styled.div`
  margin: 1.5rem 0 4rem 0;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 60px;
  /* identical to box height, or 245% */

  font-feature-settings: "salt" on, "liga" off;
  border-bottom: 5px solid #f26a7e;
  border-radius: 4px;
  color: #404366;

  @media (max-width: 600px) {
    font-weight: 500;
    font-size: 22px;
    margin-bottom: 2rem;
  }
`;
export const Text = styled.div`
  margin-bottom: 2rem;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
  /* or 160% */

  font-feature-settings: "salt" on, "liga" off;

  color: #18191f;

  @media (max-width: 600px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

export const Logo = styled.div``;
export const Button = styled.button`
  padding: 17px 35px;
  background: #f26a7e;
  border-radius: 6px;
  color: #fff;
  border: none;
  cursor: pointer;
`;
export const Button1 = styled.button``;
