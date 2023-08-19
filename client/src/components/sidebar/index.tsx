import React from 'react';
import S from './styled';
import { AiFillBank, AiFillProject, AiFillPushpin } from 'react-icons/ai';
export function SideBar() {
    const [isActive, setIsActive] = React.useState<boolean>(true);

    const openOrClose = () => {
        if (isActive) {
            return setIsActive(false);
        }
        return setIsActive(true);
    };

    return (
        <S.Container isActive={isActive}>
            {isActive === true ? (
                <>
                    <S.btnLogo onClick={() => openOrClose()}>
                        <img
                            width="40"
                            src="https://images.vexels.com/media/users/3/142860/isolated/preview/3b874e1bacfab0d586c5534cc0c9b637-logotipo-quadrado-da-estrela-azul.png"
                        />
                    </S.btnLogo>
                    <button>
                        <AiFillBank />
                    </button>
                    <button>
                        <AiFillProject />
                    </button>
                    <button>
                        <AiFillPushpin />
                    </button>
                </>
            ) : (
                <>
                    <S.btnLogo onClick={() => openOrClose()}>
                        <img
                            width="40"
                            src="https://images.vexels.com/media/users/3/142860/isolated/preview/3b874e1bacfab0d586c5534cc0c9b637-logotipo-quadrado-da-estrela-azul.png"
                        />
                        Conta azul
                    </S.btnLogo>
                    <button>Home</button>
                    <button>Conta</button>
                    <button>Extrato</button>{' '}
                </>
            )}
        </S.Container>
    );
}
