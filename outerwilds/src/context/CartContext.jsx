import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total: 0 })

    const addToCart = (product) => {
        if (cart.items.length > 0) {
            setCart((prevCart) => ({
                items: [...prevCart.items, product],
                total: prevCart.total + product.price * product.quantity
            }))
        } else {
             setCart({ items: [product], total: product.price * product.quantity })
        }
    }
    const removeFromCart = (product) => {
        setCart((prevCart) => {
            const newItems = prevCart.items.filter(item => item.id !== product);
            const newTotal = newItems.reduce((total, item) => total + item.price * item.quantity, 0);
            return { items: newItems, total: newTotal };
        });
    };

    return (
        <CartContext.Provider value={{ cart, addToCart,removeFromCart }}>
            {children}
        </CartContext.Provider>
    )


}
export default CartProvider;