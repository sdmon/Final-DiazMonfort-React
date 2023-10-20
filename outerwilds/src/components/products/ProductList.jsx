import { CircularProgress, Typography, Grid } from "@mui/material";
import ProductDetail from "./ProductDetail";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const ProductList = () => {
    const [ loading, setLoading ] = useState(true)
    const [newProducts, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const database = getFirestore()
            const querySnapshot = await getDocs(collection(database, 'products'))
            const newData = querySnapshot.docs.map((doc) => (
                {id: doc.id , ...doc.data()}
            ))
            setProducts(newData)
            setLoading(false)
        }
        fetchData()
    }, [])
    
    if (loading) { return <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div> } 
    return (        
        <div className="container">                
                <Grid container spacing={2}>
                    {newProducts.map((product) => (
                        <ProductDetail key={product.id} product={product} />
                    ))}
                </Grid>
        </div>);
}
 
export default ProductList;