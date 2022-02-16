import styled from "styled-components";

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: start;

  width: min(90%, 50rem);
  margin-inline: auto;
  overflow-y: auto;

  h1 {
    color: #ec1f28;
    font-weight: 600;
    font-size: 38px;
    margin-bottom: 0.3em;
    @media (max-width: 511px) {
      font-size: 30px;
    }
  }
  h2 {
    color: #404366;
    font-size: 27px;
    margin-bottom: 0.3em;
    font-weight: 600;
    @media (max-width: 511px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 13px;
    color: #ec1f28;
    margin-bottom: 6em;
  }

  h4 {
    font-size: 14px;
    margin: 1.5em 0;
    color: #f26a7e;
    align-self: center;
  }
`;

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #404366;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 0.76489px solid #cddbea;
    padding: 0.5rem 0.1em;

    /* placeholder color */
    ::-webkit-input-placeholder {
      font-size: 14px;
      color: #cddbea;
    }
  }
`;

export const DotsContainer = styled.div`
  align-self: center;
  display: flex;
  gap: 0.5rem;

  svg {
    cursor: pointer;
  }
`;
