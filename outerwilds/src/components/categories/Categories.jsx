
import { Card, CardContent, CircularProgress, Typography } from "@mui/material"
import './Categories.css'
import useAsyncMock from "../../hooks/useAsyncMock";
import categories from "../../mocks/categories.json"
import { Link } from "react-router-dom";


const Categories = () => {
    
    const { data, loading } = useAsyncMock(categories)

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