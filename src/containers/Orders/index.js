import React, { useState, useEffect } from "react";
import { Container, H1, Image, Button, ContainerItens, Order } from "./styles";
import axios from "axios";
import Balde from "../../assets/balde.png";
import Trash from "../../assets/trash.svg";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()
 

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await axios.get("http://localhost:3001/order");
        setOrders(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    }
    fetchOrders();
  }, []);

  async function deleteOrder(orderId) {
    try {
      await axios.delete(`http://localhost:3001/order/${orderId}`);
      setOrders(orders.filter(order => order.id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  }


  function goBackPage(){
    navigate(-1)
  }

  return (
    <Container>
      <Image alt="Homer" src={Balde} />
      <ContainerItens>
        <H1>Pedidos!</H1>
        <ul>
          {orders.map(order => (
            <Order key={order.id}>
              <p className="Pedido">{order.order}</p>
              <button onClick={() => deleteOrder(order.id)}><img src={Trash} alt="Trash" /></button>
              <p className="Name">{order.clientName}</p>
            </Order>
          ))}
        </ul>
        <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
}

export default Orders;