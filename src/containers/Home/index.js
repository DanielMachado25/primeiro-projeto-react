import React, { useState, useRef, } from "react";

import axios from "axios"
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import Button from "../../components/Button";
import ContainerItens from "../../components/containerItens";
import { H1 } from "../../components/Title/styles";

import { Container, Image, InputLabel, Input,} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef()
  const inputAge = useRef()


  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3002/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUser)

    setUsers([...users, newUser]);

  }
 

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItens>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

    
      </ContainerItens>
    </Container>
  );
}

export default App;