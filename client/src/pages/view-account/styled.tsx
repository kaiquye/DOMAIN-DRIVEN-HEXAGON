import styled, { keyframes } from 'styled-components';

const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-rows: 30% 70%;
    font-family: Arial, Helvetica, sans-serif;
`;

const Banner = styled.section`
    background-color: white;
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 50% 50%;
    font-size: 16px;
`;

const BannerUserInfo = styled.div`
    display: flex;
    justify-content: end;
    align-content: center;
    align-items: center;

    div {
        color: #5a5a5a;
        width: 70%;
        height: 60%;
        display: flex;
        flex-direction: column;
        align-items: start;
        text-align: start;
        justify-content: center;
        gap: 10px;
    }
`;

const BannerAppInfo = styled.div`
    display: flex;
    justify-content: start;
    align-content: center;
    align-items: center;
    color: white;
    text-align: center;
    div {
        width: 70%;
        height: 60%;
        background-color: #2387de;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 10px;
    }
`;

const Details = styled.div`
    display: grid;
    grid-template-columns: 75% 25%;

    width: 100%;
    height: 100%;
`;

const Payments = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    padding: 20px;
    gap: 10px;
`;

const PaymentsBalance = styled.div`
    width: 80%;
    height: 60%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 22px;

    gap: 20px;

    h3 {
        font-size: 25px;
        color: #5499e2;
        font-weight: 600;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }

    p {
        color: #5499e2;
        font-weight: 600;
        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
`;

const Amount = styled.div`
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
const Menu = styled.div`
    padding: 20px;
`;

const MenuDetails = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 20% 20% 20%;
    font-size: 10px;
    gap: 50px;
    justify-content: center;
    padding: 20px;

    label {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
`;

const Opts = styled.div`
    display: flex;
    width: 50%;
    gap: 20px;

    button {
        width: 50%;
    }
`;

export default {
    Container,
    Banner,
    BannerUserInfo,
    BannerAppInfo,
    Payments,
    Menu,
    Details,
    PaymentsBalance,
    Amount,
    Opts,
    MenuDetails,
};
