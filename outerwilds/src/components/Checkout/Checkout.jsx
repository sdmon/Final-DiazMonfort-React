import React, { useState } from 'react';
import {
  Paper,
  Button,
  TextField,
  Typography,
  Container,
  Grid,
  Table,
  TableBody,
  Box,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
} from '@mui/material';
import { useCartContext } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Checkout = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const { cart, resetCart } = useCartContext();
  const navigate = useNavigate();

  const priceTotal = () => {
    return cart.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }; 

  const handleCheckout = async () => {
    try {
      const db = getFirestore();
      const ordersCollection = collection(db, 'orders');

      if (!ordersCollection) {
        throw new Error('Error');
      }

      const sendOrder = {
        buyer: { name, email, phone,},
        items: cart.items,
        total: priceTotal(),
        dateCreated: serverTimestamp(),
      };

      const docRef = await addDoc(ordersCollection, sendOrder);
      resetCart();
      navigate(`/cart/checkout/${docRef.id}`);
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  return (
    <Paper style={{ display:'flex', justifyContent:'center', margin: '0 auto', alignItems: 'center', maxWidth: '1440px', padding:'20px', backgroundColor: "#FFB43B"}}>
      <Typography
          variant="h6"
          component="div"
          align="center"
          sx={{
            p: 2,
            backgroundColor: "#FFB43B",
            fontFamily: "Montserrat",
            fontSize: "20px",
            fontWeight: "100",
          }}
        >
          Checkout
        </Typography>
    <Container>
      <Grid container spacing={2}>
        
        <Grid item xs={6}>
          <form>
            <TextField label="Nombre" fullWidth value={name} onChange={(e) => setName(e.target.value)} />
            <TextField label="Email" fullWidth type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <TextField label="Phone" fullWidth value={phone} onChange={(e) => setPhone(e.target.value)} />

            <Button
              variant="contained"
              sx={{ backgroundColor: 'transparent',border: '3px solid black', color: 'black',marginTop: '10px'}}
              onClick={() => handleCheckout(name, email, phone)}
            >
              Comprar
            </Button>
            <Typography sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>
            Total de la Compra: ${priceTotal()}
          </Typography>            
          </form>          
        </Grid>

        <Grid item xs={6}>
          <TableContainer component={Paper} sx={{ backgroundColor: "#FFB43B", border: '3px solid black' }}>
            <Table>
              <TableHead >
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "50" }}>Item</TableCell>
                  <TableCell sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "50" }}>Cantidad</TableCell>
                  <TableCell sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "50" }}>Precio</TableCell>
                  <TableCell sx={{ fontFamily: "Montserrat", fontSize: "20px", fontWeight: "50" }}>Total</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.items.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>
                      <img style={{ width: '100%', height: '20%' }} src={item.imageUrl} alt={item.title} />
                    </TableCell>
                    <TableCell>
                      <Typography sx={{fontFamily: 'Montserrat',fontSize: '18px',fontWeight: '100'}}
                      >                        
                        {item.title}                        
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography sx={{fontFamily: 'Montserrat',fontSize: '18px',fontWeight: '100'}}
                      >
                        {item.quantity}                        
                      </Typography>
                    </TableCell>
                    <TableCell sx={{fontFamily: 'Montserrat',fontSize: '18px',fontWeight: '100'}}>${item.price}</TableCell>
                    <TableCell sx={{fontFamily: 'Montserrat',fontSize: '18px',fontWeight: '100'}}>${item.quantity * item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
    </Paper>
  );
};

export default Checkout;
