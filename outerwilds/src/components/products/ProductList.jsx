import { CircularProgress, Typography, Grid } from "@mui/material";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from "../../mocks/products.json"
import ProductDetail from "./ProductDetail";

const ProductList = () => {
    const { data , loading } = useAsyncMock(products)
    if (loading) { return <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div> } 
    return (        
        <div className="container">                
                <Grid container spacing={2}>
                    {
                        data.map((product) => {
                            return(
                                <ProductDetail key={product.id} product={product} />
                            )
                        })
                    }
                </Grid>
        </div>);
}
 
export default ProductList;