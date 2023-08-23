import styled from 'styled-components';

const ModalOverlay = styled.section`
    width: 100%;
    height: 100%;
    position: fixed;
    background-color: #2f2f2f82;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Modal = styled.div`
    width: 500px;
    min-height: 50%;
    padding: 10px 50px 50px 50px;
    background-color: #ffffff;
    box-shadow: #000000af 1px 1px 20px 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;

    label {
        color: #414141;
    }

    button {
        padding: 10px 30px 10px 30px;
    }
`;

const Input = styled.input`
    border: none;
    outline: none;
    font-size: 16px;
    padding: 10px 10px;
    border-bottom: 1px solid #222;
    cursor: pointer;
    color: #577db6;
    font-weight: 600;
    text-align: center;
    font-size: 14px;
`;

const Menu = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

const Title = styled.h1`
    color: #577db6;
    margin-bottom: 40px;
    font-size: 25px;
`;

const icon = styled.div`
    width: 100px;
    height: 100px;
    background-image: url('https://th.bing.com/th/id/OIP.2h5fM92dCAi7uOkeV_9TiwAAAA?pid=ImgDet&w=400&h=400&rs=1');
    background-position: center;
    background-size: 70%;
    background-repeat: no-repeat;
`;
export default {
    icon,
    Title,
    ModalOverlay,
    Modal,
    Input,
    Menu,
};
