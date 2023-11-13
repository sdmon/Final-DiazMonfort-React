import React, { useState } from 'react';
import { Modal, Typography } from "@mui/material";
import ItemCount from "../common/ItemCount";
import { useCartContext } from "../../context/CartContext";

const ProductInfo = ({ product, open, setOpen }) => {
  const { imageUrl, title, price, stock } = product;
  const { addToCart } = useCartContext();
  const [count, setCount] = useState(1);

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddToCart = () => {
    if (count > 0 && count <= stock) {
      addToCart({ ...product, quantity: count });
      setOpen(false);
    }
  };

  const handleItemCountChange = (newCount) => {
    setCount(newCount);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div className="modal-content">
        <Typography variant="h4">{title}</Typography>
        <img src={imageUrl} className="card-prod-img" alt={title} />
        <Typography variant="h6" color="primary">
          ${price.toFixed(2)}
        </Typography>
        <Typography>Stock: {stock}</Typography>
        <div className="modal-scroll-content">
          <ItemCount stock={stock} initial={1} count={count} onCountChange={handleItemCountChange} />
          <div>
            <button
              style={{ fontSize: '15px', width: '200px', height: '40px', marginTop: '10px' }}
              onClick={handleAddToCart}
              disabled={count === 0 || count > stock}
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProductInfo;

