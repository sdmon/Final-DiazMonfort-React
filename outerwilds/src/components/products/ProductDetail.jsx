import React, { useState, useEffect } from 'react';
import { Grid, Card, CardContent, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import './ProductDetail.css';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { useCartContext } from "../../context/CartContext"

const useProductData = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const database = getFirestore();
      const q = collection(database, 'products');
      const querySnapshot = await getDocs(q);

      if (querySnapshot.size > 0) {
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      }
    };

    fetchProducts();
  }, []);

  return products;
};

const ProductDetail = ({ product }) => {
  const { imageUrl, title, price, stock } = product;
  const [isSelected, setIsSelected] = useState(false);
  const { addToCart } = useCartContext();  

  const handleAddToCart = () => {
    addToCart(product);
  };

  const handleClick = () => {
    setIsSelected(prev => !prev);
  };

  return (
    <Grid item xs={12} sm={12} md={4} lg={3}>
      <Card className="card-prod-container" sx={{ backgroundColor: '#FFB43B' }} onClick={handleClick}>
        <img src={imageUrl} className="card-prod-img" alt={title} />
        <CardContent>
          <Typography variant='h5' align="center">{title}</Typography>
          <Typography variant='h5' align="center">$ {price.toFixed(2)}</Typography>
          <Typography variant='h5' align="center">Stock disponible: {stock}</Typography>
        </CardContent>
      </Card>
      {isSelected && <ProductInfo product={product} open={isSelected} setOpen={setIsSelected} />}
    </Grid>
  );
};

export default ProductDetail;