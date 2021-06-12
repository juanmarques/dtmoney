//nao precisa ser um arquivo tsx pq n vai ter html

import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{ 
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem; //4px
    height: 3rem; //48px 16*3
    transition: filter 0.2s;

    &:hover{
      filter: brightness(0.9)//escurecendo a cor do btn
    }
  }
`;