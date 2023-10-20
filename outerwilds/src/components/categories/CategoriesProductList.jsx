import { useParams } from "react-router-dom";
import useAsyncMock from "../../hooks/useAsyncMock";
import products from '../../mocks/products.json'
import { CircularProgress, Grid } from "@mui/material";
import ProductDetail from "../products/ProductDetail"
import { query, collection, where , getDocs, getFirestore } from 'firebase/firestore';
import { useEffect, useState } from "react";


const CategoriesProductList = () => {
    const {categoryId} = useParams();
    const [ loading, setLoading ] = useState(true)
    const [data, setData] = useState([])  
    
    useEffect(()=>{
        const database = getFirestore()
        const fetchData = async() => {
            const querySnapshot = await query(collection(database, 'products'), where('category', '==', `${categoryId}`))
            getDocs(querySnapshot).then((snapshot) => {
                if ( snapshot.size === 0) {
                    console.log('No hay resultados')
                }
                setData(snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()})))                
                setLoading(false)
            })
        }
        fetchData()
    })    

    if (loading) { return <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div> } 

    return (<div className="container">
        <Grid container spacing={3} sx={{justifyContent:'center'}}>
            {data.map((product) => {
                return <ProductDetail key={product.id} product={product} />
            })}
        </Grid>
    </div>);
}
 
export default CategoriesProductList;