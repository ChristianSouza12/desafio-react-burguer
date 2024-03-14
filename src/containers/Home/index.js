import React, { useState, useRef } from "react";
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens } from "./styles";
import axios from "axios";
import Homer from "../../assets/homer.png";
import { useNavigate } from "react-router-dom";

function App() {
  const [orders, setOrders] = useState([]);
  const inputName = useRef(null);
  const inputOrder = useRef(null);
  const navigate = useNavigate();
  const baseUrl = "https://desafio-node-hamburguer-j3hr.vercel.app"; // Corrigi a variável de base URL

  async function addNewOrder() {
    if (!inputName.current.value || !inputOrder.current.value) {
      alert("Por favor, preencha ambos os campos antes de adicionar um novo pedido.");
      return;
    }

    try {
      const { data: newUser } = await axios.post(`${baseUrl}/order`, {
        order: inputOrder.current.value,
        clientName: inputName.current.value
      });

      setOrders([...orders, newUser]);

      // Limpando os campos de entrada após adicionar um novo pedido
      inputName.current.value = "";
      inputOrder.current.value = "";

      navigate("/orders");
    } catch (error) {
      console.error("Erro ao adicionar novo pedido:", error);
      // Adicione aqui o tratamento de erros, como exibição de uma mensagem para o usuário
    }
  }

  return (
    <Container>
      <Image alt="Homer" src={Homer} />
      <ContainerItens>
        <H1>Faça já seu pedido!</H1>

        <InputLabel>Pedido</InputLabel>
        <Input ref={inputOrder} placeholder="Faça seu pedido" />

        <InputLabel>Nome do Cliente</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItens>
    </Container>
  );
}

export default App;