import styled, { keyframes } from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 94vh;

    text-align: center;
    background-color: #e8e8e8;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const loadingAnimation = keyframes`
    0% {
        opacity: 0.6;
    }
    50% {
        opacity: 0.4;
    }
    100% {
        opacity: 0.6;
    }
`;

export const SkeletonContainer = styled.section`
    width: ${(props) => props.width || '10px'};
    height: ${(props) => props.height || '12px'};
    background-color: #cbcbcb;
    border-radius: 4px;
    animation: ${loadingAnimation} 1s infinite;
`;

export const Skeleton = styled.section`
    background-color: #cbcbcb;
    width: ${(props) => props.width || '10px'};
    height: ${(props) => props.height || '12px'};
    animation: ${loadingAnimation} 1s infinite;
`;
