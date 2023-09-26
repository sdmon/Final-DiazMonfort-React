import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    
    const [count, setCount] = useState(initial);

    const handleIncrement = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };
    
    const handleAddToCart = () => {
        if (count > 0) {
            onAdd(count);
        }
    };

    return (<>
        <div >
            <button style={{width:'30px', height:'30px', backgroundColor:"black", color: 'white'}} onClick={handleDecrement} disabled={count <= initial}> - </button>
            <span style={{marginLeft:'5px', marginRight:"5px"}}>  {count}  </span>
            <button  style={{width:'30px', height:'30px', backgroundColor:"black", color: 'white'}} onClick={handleIncrement} disabled={count >= stock}> + </button>
            <div><button  style={{fontSize:'15px', width:'200px', height:'40px', marginTop: '10px'}} onClick={handleAddToCart} disabled={count === 0}> Agregar al carrito </button></div>
        </div> </>
    );
}

export default ItemCount;