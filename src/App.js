import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';
import Footer from './components/Footer'

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, rgb(201, 116, 47) 0%, rgb(201, 116, 47) 100%, rgb(228, 163, 163) 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  margin-bottom: 6rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor:pointer;
    background-size: 400px;
  }
`;

function App() {

  //state de frases
  const [frase, saveFrase] = useState({});

  const consultarAPI = async () => {
    const api =  await fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist');
    const frase = await api.json();
    saveFrase(frase)
  }
  

  //Cargar una frase
  useEffect( () => {
    consultarAPI()
  }, []);
  
  return (
    <Contenedor>
      <Frase 
        frase={frase}
      />
      <Boton
        onClick={consultarAPI}
      >
        Get a Joke!
      </Boton>
      <Footer 
        onMouseEnter={test}
      />   
    </Contenedor>
  );
}

export default App;
