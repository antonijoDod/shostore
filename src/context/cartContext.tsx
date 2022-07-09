import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartIsOpen, setCartIsOpen] = useState<boolean>(false);
    return (
        <CartContext.Provider value={{ cartIsOpen }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;

const CartConsumer = CartContext.Consumer;
export { CartContext, CartConsumer };
