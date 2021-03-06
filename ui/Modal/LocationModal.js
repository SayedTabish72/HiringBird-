import React from "react";
import styled from "styled-components";

function LocationModal({ setShow }) {
  const locations = [
    "Mumbai",
    "Pune",
    "Bangalore",
    "Chennai",
    "Hyderabad",
    "Delhi",
    "Mumbai",
    "Pune",
    "Bangalore",
  ];
  return (
    <Wrapper>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          alignSelf: "end",
          marginBottom: "1.2em",
          cursor: "pointer",
        }}
        onClick={() => setShow(false)}
      >
        <path
          d="M15 1L1 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 1L15 14.3258"
          stroke="#C9CBE2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <Head>
        <svg
          width="9"
          height="16"
          viewBox="0 0 9 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 15L8 8L0.999999 1"
            stroke="#F26A7E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3>location</h3>
      </Head>

      <Search>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.8926 11.6086L17.7343 16.4505C17.9045 16.6208 18.0001 16.8518 18 17.0925C17.9999 17.3333 17.9042 17.5641 17.7339 17.7343C17.5636 17.9045 17.3327 18.0001 17.0919 18C16.8511 17.9999 16.6203 17.9042 16.4501 17.7339L11.6083 12.892C10.1609 14.0131 8.34083 14.5406 6.51828 14.3674C4.69573 14.1941 3.00764 13.333 1.79742 11.9593C0.587202 10.5855 -0.054236 8.80231 0.00359653 6.97241C0.0614291 5.14251 0.814188 3.40337 2.10874 2.10879C3.40329 0.814208 5.14238 0.0614306 6.97224 0.00359662C8.80209 -0.0542374 10.5853 0.587216 11.959 1.79746C13.3327 3.00771 14.1937 4.69585 14.367 6.51844C14.5403 8.34104 14.0127 10.1612 12.8917 11.6086H12.8926ZM7.20033 12.5995C8.63244 12.5995 10.0059 12.0306 11.0185 11.0179C12.0312 10.0052 12.6001 8.63175 12.6001 7.19961C12.6001 5.76748 12.0312 4.39399 11.0185 3.38132C10.0059 2.36865 8.63244 1.79973 7.20033 1.79973C5.76823 1.79973 4.39479 2.36865 3.38214 3.38132C2.36949 4.39399 1.80059 5.76748 1.80059 7.19961C1.80059 8.63175 2.36949 10.0052 3.38214 11.0179C4.39479 12.0306 5.76823 12.5995 7.20033 12.5995Z"
            fill="#F26A7E"
          />
        </svg>

        <input type="text" placeholder="eg Pune" />
      </Search>

      <Cities>
        <h4>Top Cities</h4>
        <Grid>
          {locations.map((l, i) => (
            <GridItem key={i}>
              <h5>{l}</h5>
            </GridItem>
          ))}
        </Grid>
      </Cities>
    </Wrapper>
  );
}

export default LocationModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  padding: 1.5rem;
`;
const Head = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  h3 {
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    color: #f26a7e;
  }
`;
const Search = styled.div`
  background: #ffffff;
  border: 1px solid #c9cbe2;
  border-radius: 8px;
  padding: 0.5rem;
  margin: 0.4rem 0;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  input {
    border: none;
    outline: none;
  }
`;
const Cities = styled.div`
  h4 {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 0.7rem;
    color: #404366;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
`;
const GridItem = styled.div`
  h5 {
    font-size: 14px;
    line-height: 17px;
    font-weight: 500;
    color: #a9accb;
  }
`;
