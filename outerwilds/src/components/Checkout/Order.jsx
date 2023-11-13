import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container } from '@mui/material';

const Order = () => {
  const { orderId } = useParams();

  return (
    <Container
      style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'transparent', color: 'white' }}>
      <Typography variant="h4">Confirmación de compra</Typography>
      <Typography>ID de orden de compra: {orderId}</Typography>
    </Container>
  );
};

export default Order;