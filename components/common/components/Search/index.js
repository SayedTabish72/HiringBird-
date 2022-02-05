import React from "react";
import styled from "styled-components";
import { Button } from "../../styles/FilledBtn.styled";

function Search() {
  return (
    <Wrapper>
      <InputContainer>
        <svg viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.0413 13.5434L20.6901 19.1923C20.8886 19.391 21.0001 19.6604 21 19.9413C20.9999 20.2222 20.8882 20.4915 20.6895 20.6901C20.4909 20.8886 20.2214 21.0001 19.9406 21C19.6597 20.9999 19.3903 20.8882 19.1918 20.6895L13.543 15.0407C11.8544 16.3486 9.73097 16.9641 7.60466 16.7619C5.47835 16.5598 3.50891 15.5552 2.09699 13.9525C0.685069 12.3498 -0.0632754 10.2694 0.00419595 8.13448C0.0716673 5.9996 0.949886 3.9706 2.46019 2.46025C3.9705 0.949909 5.99944 0.0716691 8.13428 0.00419605C10.2691 -0.063277 12.3495 0.685086 13.9521 2.09704C15.5548 3.509 16.5594 5.47849 16.7615 7.60485C16.9637 9.73121 16.3482 11.8547 15.0403 13.5434H15.0413ZM8.40039 14.6994C10.0712 14.6994 11.6735 14.0357 12.855 12.8542C14.0364 11.6728 14.7001 10.0704 14.7001 8.39955C14.7001 6.72872 14.0364 5.12633 12.855 3.94487C11.6735 2.76342 10.0712 2.09969 8.40039 2.09969C6.7296 2.09969 5.12725 2.76342 3.94583 3.94487C2.7644 5.12633 2.10068 6.72872 2.10068 8.39955C2.10068 10.0704 2.7644 11.6728 3.94583 12.8542C5.12725 14.0357 6.7296 14.6994 8.40039 14.6994Z"
            fill="#F26A7E"
          />
        </svg>

        <input type="text" placeholder="e.g. UX Design or HB1234" />
        <input type="text" placeholder="city, state or zip code" />
      </InputContainer>
      <Button padding=" 15px 30px">Search</Button>
    </Wrapper>
  );
}

export default Search;

const Wrapper = styled.div`
  width: min(90%, 60rem);
  margin: 2rem auto;
  display: flex;
  gap: 1rem;
  @media (max-width: 620px) {
    margin: 1rem auto;
  }

  button {
    @media (max-width: 620px) {
      display: none;
    }
  }
`;
const InputContainer = styled.div`
  border: 1px solid #c9cbe2;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border-radius: 4px;
  flex: 1;

  @media (max-width: 620px) {
    border-radius: 8px;
  }

  svg {
    height: 1.2rem;
    padding: 0 0.5rem;
    @media (min-width: 620px) {
      display: none;
    }
  }

  input {
    padding: 0.5rem 1.5rem;
    outline: none;
    border: none;
    flex: 1;
    &:last-child {
      border-left: 1px solid #c9cbe2;
      @media (max-width: 620px) {
        display: none;
      }
    }
    @media (max-width: 620px) {
      padding: 0.7rem 0;
    }
  }
`;
