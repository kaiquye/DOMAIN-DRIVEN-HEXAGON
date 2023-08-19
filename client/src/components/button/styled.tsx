import styled from 'styled-components';

export const BtnDefault = styled.button`
    background-color: ${(props) => (props.color ? '#00457c' : 'transparent')};
    color: ${(props) => (props.color ? '#ffffff' : '#00457c')};
    border: 2px solid #00457c;
    border-radius: 4px;
    padding: 5px 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #00457c;
        color: white;
    }

    &:focus {
        outline: none;
    }
`;
