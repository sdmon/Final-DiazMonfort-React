import React from "react";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Button,
} from "@mui/material";
import { useCartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, removeFromCart } = useCartContext();

    const handleRemoveFromCart = (product) => {
        removeFromCart(product);
    };

    return (
        <div className="container">
            <Paper elevation={3}>
                <Typography variant="h6" component="div" align="center" sx={{ p: 2, backgroundColor: '#FFB43B',fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>
                    Carrito
                </Typography>
                {cart.items.length === 0 ? (
                    <Typography variant="body2" align="center" sx={{ p: 2, backgroundColor: '#FFB43B',fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100' }}>
                        Todavia no se agrego ningun item
                    </Typography>
                ) : (
                    <TableContainer sx={{ backgroundColor: '#FFB43B' }} >
                        <Table >
                            <TableHead>
                                <TableRow >
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Imagen</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Producto</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Cantidad</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Precio</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Total</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}></TableCell>
                                    
                                </TableRow>
                            </TableHead>
                            <TableBody>                                
                                {cart.items.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><img style={{ width: "20%", height: "20%" }} src={item.imageUrl} alt={item.title} /></TableCell>
                                        <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>{item.title}</TableCell>
                                        <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>{item.quantity}</TableCell>
                                        <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>${item.price}</TableCell>
                                        <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>${item.price * item.quantity}</TableCell>
                                        <TableCell >
                                            <Button sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100', border: '3px solid black'}}
                                                onClick={() => handleRemoveFromCart(item.id)}
                                                variant="outlined"
                                                color="error"
                                            >
                                                Eliminar
                                            </Button>
                                        </TableCell>
                                        
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell colSpan={3} sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>Total:</TableCell>
                                    <TableCell sx={{fontFamily: 'Montserrat', fontSize: '20px', fontWeight: '100'}}>${cart.total.toFixed(2)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </Paper>
        </div>
    );
};

export default Cart;