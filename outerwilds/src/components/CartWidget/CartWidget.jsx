import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './CartWidget.css'

const CartWidget = () => {
    return (
        <>
            <AddShoppingCartIcon sx={{ marginLeft: '7px', fontSize: '40px'}} /><span style={{fontSize:'20px'}}>1</span>
        </>)
}
 
export default CartWidget;

