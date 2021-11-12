import styled from "styled-components"

export const SearchContainer = styled.div`
    display: flex;
    margin: 50px auto;
    width: 74%;
`;

export const InputField = styled.input`
border: none;
width: 100%;
outline: none;
padding: 0 20px;
color: #404366;
&::placeholder {
    font-size:13px;
    font-weight: 500;
    color: #C9CBE2;
}
`;

export const InputContainer = styled.div`
    display: flex;
    width: 85%;
    margin: 0 auto;
    border: 1px solid #C9CBE2;
    border-radius: 2px;
`;

export const Img = styled.img`
    height: 82%;
    display: flex;
    align-items: center;
    padding-top: 6px;
`;