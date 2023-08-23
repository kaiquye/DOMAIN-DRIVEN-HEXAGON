import styled from 'styled-components';

export const BtnDefault = styled.button`
    background-color: ${(props) => (props.color ? '#03ae00' : 'transparent')};
    color: ${(props) => (props.color ? '#ffffff' : '#00457c')};
    border: 2px solid ${(props) => (props.color ? '#13aa16' : `#00457c`)};
    border-radius: 4px;
    padding: 5px 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => (props.color ? '#71c672' : `#00457c`)};
        color: white;
    }

    &:focus {
        outline: none;
    }
`;
