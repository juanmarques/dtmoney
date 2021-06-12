import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);//3 colunas 1fr de tamanhos iguais
  gap: 2rem; //espacamento entre os elementos
  margin-top: -10rem;

  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);  

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;//para pegar o valor do margin top/por padrao o strong vem com display inline
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #FFF;
    }
  }
`;