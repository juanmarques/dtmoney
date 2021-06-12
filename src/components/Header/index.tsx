import React from 'react';
import logoImg  from '../../assets/logo.svg'; //logoImg e uma variavel
import { Container, Content } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void; //void=vazio, entao o retorno dessa funcao e vazio
}

export function Header({onOpenNewTransactionModal}: HeaderProps){ //a props e o tipo dela
  return (
    <Container>
      <Content>
      <img src={logoImg} alt="dt money"/>
      <button type="button" onClick={onOpenNewTransactionModal}>
        Nova transação
      </button>
      </Content>
    </Container>
  )
}