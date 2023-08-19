import styled from 'styled-components';

const navBar = styled.div`
    color: white;
    position: relative;
    width: 100vw;
    height: 6vh;

    display: grid;
    grid-template-columns: 20% 60% 10%;
    gap: 20px;
    text-align: center;

    background-color: #0088ff;

    @media (max-width: 600px) {
        grid-template-columns: 60% 10%;
        height: 10vh;
    }

    button {
        background-color: #0088ff;
        border: none;
    }
`;
const logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: 700;
    font-size: 69%;
`;
const menu = styled.div`
    gap: 25px;
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 89%;
    label {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    @media (max-width: 600px) {
        display: ${(props) => (props.isActive ? 'flex' : 'none')};
        position: absolute;
        right: 0%;
        height: 100vh;
        flex-direction: column;
        background-color: red;

        padding: 50px;
    }
`;

const Label = styled.label`
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        width: 100%;
        font-family: 'Courier New', Courier, monospace;
        border-bottom: 2px solid #979797b7;
    }
`;

const info = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    font-size: 89%;
    label {
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    @media (max-width: 600px) {
        display: none;
    }
`;

const hamburgerButton = styled.div`
    display: none;
    @media (max-width: 600px) {
        display: flex;
        justify-content: end;
        display: flex;
    }
    :focus {
        /* Remover a borda ao clicar no botão */
        outline: none;
    }
`;

export default {
    navBar,
    logo,
    menu,
    info,
    hamburgerButton,
    Label,
};
