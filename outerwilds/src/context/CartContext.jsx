import { createContext, useContext, useState } from "react";

export const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({ items: [], total: 0 });

  const addToCart = (product) => {
    setCart((prev) => {
      const duplicate = prev.items.find((item) => item.id === product.id);

      if (duplicate) {
        const updCount = Math.min(duplicate.quantity + product.quantity, duplicate.stock);

        const update = prev.items.map((item) =>
          item.id === duplicate.id ? { ...duplicate, quantity: updCount } : item
        );

        return { items: update, total: prev.total + product.price * (updCount - duplicate.quantity), };
      } else {
        const addItem = { ...product };
        if (addItem.quantity <= addItem.stock) {
          return { items: [...prev.items, addItem], total: prev.total + product.price * product.quantity, };
        } else {
          return prev;
        }
      }
    });
  };


  const removeFromCart = (productId) => {
    setCart((prev) => {
      const update = prev.items.filter((item) => item.id !== productId);
      const updTotal = update.reduce((total, item) => total + item.price * item.quantity, 0);
      return { items: update, total: updTotal };
    });
  };

  const resetCart = () => {
    setCart({ items: [], total: 0 });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;