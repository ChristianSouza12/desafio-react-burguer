import React, { useState, useRef  } from "react";
import { Container, H1, Image, Input, InputLabel, Button, ContainerItens} from "./styles";
import axios from "axios";
import Homer from "../../assets/homer.png";
import { useNavigate } from "react-router-dom";



function App() {
  const [orders, setOrders] = useState([]);
  const inputName = useRef(null);
  const inputOrder = useRef(null);
  const navigate = useNavigate()


  async function addNewOrder() {
    if (!inputName.current.value || !inputOrder.current.value) {
      alert("Por favor, preencha ambos os campos antes de adicionar um novo pedido.");
      return;
    }
    const {data : newUser} = await axios.post("http://localhost:3001/order", { order: inputOrder.current.value, clientName: inputName.current.value })

   
    
    // const newOrder = { id: Math.random(), clientName: inputName.current.value, order: inputOrder.current.value };
    setOrders([...orders, newUser]);
   // Limpando os campos de entrada após adicionar um novo pedido
    inputName.current.value = "";
    inputOrder.current.value = "";


    
 
    navigate("/orders")
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

        <Button onClick={addNewOrder}>Novo Pedido </Button>

        

        
      </ContainerItens>
    </Container>
  );
}

export default App;