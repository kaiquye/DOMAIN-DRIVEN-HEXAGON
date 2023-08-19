import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  text-align: start;

  label {
    color: #636363;
    width: 70%;
  }
  @media (max-width: 600px) {
    label {
      min-width: 80%;
    }
  }

  input {
    width: 70%;
    background-color: #f2f2f2;
    color: #333;
    border: 2px solid #ccc;
    border-radius: 8px;
    padding: 8px;
    transition: border-color 0.2s ease-in-out;

    &:focus {
      outline: none;
      border-color: #666;
    }
    &:focus {
      outline: none;
    }
  }

  @media (max-width: 600px) {
    text-align: start;
    font-size: 14px;

    input {
      padding: 10px;
      width: 80%;
    }
  }
`;
