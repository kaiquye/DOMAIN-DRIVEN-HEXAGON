import styled from 'styled-components';

const Container = styled.div`
    padding-top: 20px;
    gap: 20px;
    display: grid;
    grid-template-rows: 11% 10% 10% 10%;
    position: absolute;
    width: ${(props) => (props.isActive ? ' 5% ' : '15%')};
    height: 94vh;
    flex-direction: column;
    background-color: white;

    button {
        padding-top: 20px;
        padding-bottom: 20px;
        cursor: pointer;
        background-color: white;
        border: none;
        color: #1674aa;
        font-weight: 600;
    }
    button:hover {
        background-color: #c0efff54;
    }
`;

const btnLogo = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
    text-align: center;

    color: #1674aa;
    cursor: pointer;
`;

export default {
    Container,
    btnLogo,
};
