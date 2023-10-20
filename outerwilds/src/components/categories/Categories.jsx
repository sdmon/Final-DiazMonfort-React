
import { Card, CardContent, CircularProgress, Typography } from "@mui/material"
import './Categories.css'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore } from 'firebase/firestore';


const Categories = () => {
    
    const [ data, setData ] = useState([]) 
    const [ loading, setLoading ] = useState(true)   

    useEffect(() => {
        const fetchData = async () => {
            const database = getFirestore()
            const querySnapshot = await getDocs(collection(database, 'categories'))
            const newData = querySnapshot.docs.map((doc) => (
                {id: doc.id , ...doc.data()}
            ))
            setData(newData)
            setLoading(false)
        }
        fetchData()
    }, [])

    if (loading) { return <div style={{display: 'flex', justifyContent: 'center'}}><CircularProgress /></div> }

    return (
         <div className="container" style={{marginBottom: '10px'}}>            
            { data.map((category) => {
                return(
                    <Card className="container-category-card" sx={{backgroundColor:'#FFB43B'}} key={category.id} component={Link} to={`/categories/${category.category}`}>
                        <CardContent>
                            <Typography variant="h5"> {category.category} </Typography>
                        </CardContent>
                    </Card>            
                    )
                })
            }             
        </div>
    );    
}
 
export default Categories;