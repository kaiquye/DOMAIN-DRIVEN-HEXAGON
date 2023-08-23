import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 60%;
    color: #777777;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-size: 24px;

    label {
        font-size: 14px;
    }
`;

const IconLoad = styled.div`
    width: 20px;
    height: 20px;
    background-position: center;
    background-size: 100%;
    background-image: url('https://th.bing.com/th/id/R.3067b8b90d71528b071583c0bb59d5e2?rik=YtkA4cf3SSbBnw&pid=ImgRaw&r=0');
    cursor: pointer;
`;

export default {
    Container,
    IconLoad,
};
