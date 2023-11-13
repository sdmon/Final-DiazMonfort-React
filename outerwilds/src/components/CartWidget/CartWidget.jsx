import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Typography } from '@mui/material';
import { useCartContext } from '../../context/CartContext';
const CartWidget = () => {
    const { cart } = useCartContext();
    const totalCount = cart.items ? cart.items.reduce((total, item) => total + item.quantity, 0) : 0;

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <AddShoppingCartIcon style={{ fontSize: '25px' }} />
            <Typography style={{ fontSize: '25px' }}>{totalCount}</Typography>
        </div>
    );
}

export default CartWidget;






