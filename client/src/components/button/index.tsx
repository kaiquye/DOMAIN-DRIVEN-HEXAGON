import React from 'react';

interface IProps {
    load: boolean;
}

export const Btn: React.FC<IProps> = ({ children, ...props }) => {
    return (
        <>
            {props.load === true ? (
                <button style={{ backgroundColor: '#468c4b' }} disabled>
                    aguarde...
                </button>
            ) : (
                <button>{children}</button>
            )}
        </>
    );
};
