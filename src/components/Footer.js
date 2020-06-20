import React from 'react';
import styled from '@emotion/styled';

const Foot = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 1rem;
    color: gray;
    align-items: center;
    border: 2px solid black;
    background-color: white;
    padding: 1rem;
`;

const Footer = () => {
    return ( 
        <Foot>
            By Wilmer Terrero
            <br />
            <b>Using API:</b> <a href='https://sv443.net/jokeapi/v2/' target="_blank" rel='noopener noreferrer'>JOKEAPI</a> 
        </Foot> 
    );
}
 
export default Footer;

