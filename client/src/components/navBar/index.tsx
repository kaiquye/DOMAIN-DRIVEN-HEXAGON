import React from "react";
import { Container } from "../container.styles";
import { Outlet } from "react-router-dom";
import S from "./styles";
import { FaCaretRight } from "react-icons/fa";
import { GiHamburgerMenu } from 'react-icons/gi';

export function NavBarComponent() {
  const [isActive, setIsActive] = React.useState(false);
  document.addEventListener('keydown', ()=> setIsActive(false));

  return (
    <Container>
      <S.navBar>
        <S.logo>
          <h1>ContaAzul</h1>
        </S.logo>
        {isActive ? (
          <S.menu isActive={isActive}>
            <S.Label>
              <FaCaretRight />
              Conta
            </S.Label>
            <S.Label>
              <FaCaretRight />
              Extrato
            </S.Label>
            <S.Label>
              <FaCaretRight />
              Cadastrar conta
            </S.Label>
            `
          </S.menu>
        ) : (
          <S.menu isActive={isActive}>
            <S.Label>
              Conta
            </S.Label>
            <S.Label>
              Extrato
            </S.Label>
            <S.Label>
              Cadastrar conta
            </S.Label>
            `
          </S.menu>
        )}
        <S.info>
          <label>Sair</label>
        </S.info>
        <S.hamburgerButton>
          <button onClick={() => setIsActive(true)}>
           <GiHamburgerMenu  size="22px" />
          </button>
        </S.hamburgerButton>
      </S.navBar>
      <Outlet />
    </Container>
  );
}
