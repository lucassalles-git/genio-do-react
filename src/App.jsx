import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body{
  height: 100vh;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;

  @media(min-width: 320px) and (max-width: 399px){
    background-size: 270% 100%;
  }

  @media(min-width: 400px) and (max-width: 626px){
  height: 100vh;
  background-size: 280% 100%;
  }

  @media(min-width: 627px) and (max-width: 1441px){
    background-size: 180% 100%;
  }
}
`;

const Principal = styled.main`
  height: 100vh;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  section{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Titulo = styled.h1`
  color: #FFFFFF;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-size: 62px;

  @media(min-width: 320px) and (max-width: 399px){
    text-align: center;
    font-size: 23px;
  }

  @media(min-width: 400px) and (max-width: 626px){
    margin-bottom: 5em;
    text-align: center;
    font-size: 25px;
  }

  @media(min-width: 627px) and (max-width: 1441px){
    text-align: center;
    font-size: 40px;
  }
`;

const Imagem = styled.img`
  width: 741px;
  height: 691px;

  @media(min-width: 320px) and (max-width: 399px){
    width: 300px;
    height: 300px;
  }

  @media(min-width: 400px) and (max-width: 626px){
    padding: 0 0.5em;
    width: 400px;
    height: 400px;
  }

  @media(min-width: 627px) and (max-width: 1441px){
    width: 600px;
    height: 600px;
  }
`;

const Botao = styled.button`
  width: 400px;
  height: 71px;
  border: none; 
  border-radius: 50px;
  background-color: #007BFF;
  color: #FFFFFF;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-size: 40px;

  @media(min-width: 320px) and (max-width: 399px){
    width: 180px;
    height: 55px;
    font-size: 19px;
  }

  @media(min-width: 400px) and (max-width: 626px){
    width: 200px;
    height: 65px;
    font-size: 20px;
  }

  @media(min-width: 627px) and (max-width: 1441px){
    width: 300px;
    height: 68px;
    font-size: 35px;
  }
`;

export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Principal>
      <GlobalStyle />

      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>

      <section>
        <Imagem
          src={
            lampada
              ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
              : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
          }
          alt="Lâmpada Mágica"
        />
        <Botao onClick={trocarLampada}>Clique Aqui</Botao>
      </section>
    </Principal>
  );
}
