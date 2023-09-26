import useAsyncMock from '../../hooks/useAsyncMock';
import './ItemListContainer.css'

const ItemListContainer = ({bienvenidos}) => {

    
    return ( 
        <>
            <div className="div-item">
                <h1 style={{color: '#FFB43B', justifyContent:'center'}}>{bienvenidos}</h1>
            </div>    
        </> );
}
 
export default ItemListContainer;