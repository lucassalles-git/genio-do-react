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
}
`;

const Principal = styled.main`
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Titulo = styled.h1`
  color: #FFFFFF;
  font-family: "Sevillana", cursive;
  font-weight: 400;
  font-size: 62px;
`;

const Imagem = styled.img`
  width: 741px;
  height: 691px;
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

      <Imagem
        src={
          lampada
            ? "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada-com-mago.png"
            : "https://raw.githubusercontent.com/mariaccarolina/TurmaFDV/refs/heads/main/imagens/lampada.png"
        }
        alt="Lâmpada Mágica"
      />

      <Botao onClick={trocarLampada}>Clique Aqui</Botao>
    </Principal>
  );
}
