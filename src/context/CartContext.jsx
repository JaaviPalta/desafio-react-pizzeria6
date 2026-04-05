import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (pizza) => {
    const pizzaEnCarrito = cart.find((item) => item.id === pizza.id);

    if (pizzaEnCarrito) {

      setCart(
        cart.map((item) =>
          item.id === pizza.id
            ? { ...item, count: item.count + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  const incrementarCantidad = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const disminuirCantidad = (id) => {
    const pizza = cart.find((item) => item.id === id);

    if (pizza.count === 1) {

      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
      );
    }
  };

  const calculateTotal = () => {
    return cart.reduce((total, pizza) => total + pizza.precio * pizza.count, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementarCantidad,
        disminuirCantidad,
        calculateTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
