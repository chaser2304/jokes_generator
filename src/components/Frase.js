import React from "react";
import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;

        &::before{
            content: open-quote;
            font-size: 5rem;
            color: black;
            left: -1rem;
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }
`;

const Frase = ({ frase }) => {
  return (
    <ContenedorFrase>
      <h1>{frase.setup}</h1>
      <p>- {frase.delivery}</p>
    </ContenedorFrase>
  );
};

export default Frase;
