import { Modal, Typography } from "@mui/material";
import ItemCount from "../common/ItemCount"
import { useState } from "react";
const ProductInfo = ({ product, open, setOpen }) => {
    const { imageUrl, title, price, stock } = product
    const [quantityInCart, setQuantityInCart] = useState(0);


    const handleClose = () => {
        setOpen(prev => !prev)
    }
    
    const handleAddToCart = (count) => {
        setQuantityInCart(count);        
    };

    return (<>
        <Modal open={true} onClose={handleClose}>
            <div className="modal-content">
                <Typography variant="h4">{title}</Typography>
                <img src={imageUrl} className="card-prod-img" />
                <Typography variant="h6" color="primary"> ${price.toFixed(2)}</Typography>
                <Typography>Stock: {stock}</Typography>
                <div className="modal-scroll-content"> 
                    <ItemCount stock={stock} initial={quantityInCart} onAdd={handleAddToCart} />
                </div>
            </div>
        </Modal>
    </>);
}

export default ProductInfo;