import styled from "styled-components";

export const Main = styled.div`
  margin: 20px auto;
  font-style: italic;
  width: fit-content;
`;

export const Title = styled.h1``;

export const Container = styled.div`
  color: #676767;
  background-color: #e6e6e6;
  padding: 15px;
  gap: 10px;
`;

export const Subtitle = styled.h2`
  margin: 10px 0px;
`;

export const InputsWrapper = styled.div`
  gap: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const Label = styled.label`
  align-self: flex-start;
  font-style: normal;
`;

export const Input = styled.input`
  outline: none;
  box-shadow: none !important;
  border: none;
  border-top: 2px solid #ccc;
  padding: 3px;
  border-radius: 3px;
`;

export const SearchButton = styled.button`
  align-self: flex-end;
  outline: none;
  cursor: pointer;
  padding: 6px 10px;
  background-color: var(--primary-color);
  color: #fff;
  border: none;
  border-bottom: 2px solid #638c38;
  border-radius: 3px;

  &:hover {
    filter: brightness(85%);
  }
`;
