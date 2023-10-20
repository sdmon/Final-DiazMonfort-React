import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
const CartWidget = () => {
    const { cart } = useCartContext();
    const cartCount = cart.items.length;
    
    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <AddShoppingCartIcon style={{ fontSize:'25px'}}/>
            <Typography style={{ fontSize:'25px'}}>{cartCount}</Typography>
        </div>
    );
}

export default CartWidget;






