import { Grid, Card, CardContent, Typography } from "@mui/material";
import ProductInfo from "./ProductInfo";
import './ProductDetail.css'
import { useState } from "react";

const ProductDetail = ({product, children}) => {
    const {id, imageUrl, title, price, stock} = product
    const [ isSelected, setIsSelected] = useState(false);

    const handleClick = () => {
        setIsSelected((prev) => !prev)        
    }   

    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={3} >
                <Card className="card-prod-container" sx={{backgroundColor: '#FFB43B' }} onClick={handleClick}>
                    <img src={imageUrl} className="card-prod-img" />
                    <CardContent>
                        <Typography variant='h5' align="center">{title}</Typography>
                        <Typography variant='h5' align="center">$ {price.toFixed(2)}</Typography>
                        <Typography variant='h5' align="center">Stock disponible: {stock}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            {
                isSelected &&
                <ProductInfo product={product} open={isSelected} setOpen={setIsSelected} />
            }
        </>
    );
}
 
export default ProductDetail;