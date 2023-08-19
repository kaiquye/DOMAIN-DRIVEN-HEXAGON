import styled from "styled-components";
import { Form } from "../../components/form/styles";

const Card = styled.div`
  width: 100%;
  height: 94vh;
  display: flex;
  justify-content: start;
  align-items: center;
  background-image: url("https://i.pinimg.com/originals/43/aa/cd/43aacde32c042de759707a2c9edc8734.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url("https://i.pinimg.com/originals/43/aa/cd/43aacde32c042de759707a2c9edc8734.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 90vh;
  }
`;

const Title = styled.div`
  width: 80%;
  padding-left: 5%;
  padding-bottom: 5%;
  color: #007bffc3;
  text-align: start;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  label {
    color: #494949;
    font-size: 10px;
  }
`;

const form = styled(Form)`
  width: 40%;
  height: 100%;
  text-align: start;
  color: #5151519f;
  font-size: 13px;

  label {
    width: 70%;
    text-align: start;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Menu = styled.div`
  background-color: white;
  width: 100%;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  a {
    cursor: pointer;
    padding-top: 10px;
    color: #007bff;
    font-size: 12px;
  }
  button {
    width: 80%;
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 8px 25px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: #0056b3;
    }
    &:active {
      background-color: #003080;
    }
  }
`;

export default {
  Card,
  Menu,
  form,
  Title,
};
