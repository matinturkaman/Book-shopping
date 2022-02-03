import { createContext, ReactNode, useContext, useReducer } from "react";
import CartReducer from "./cartReducer";

const initialState = {
  cart: [],
  total: 0,
};

const CartContext = createContext<any | null>(null);
const CartContextDispatcher = createContext<any | null>(null);

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, dispatch] = useReducer(CartReducer, initialState);

  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => useContext<CartProps>(CartContext);
export const useCartAction = () => useContext(CartContextDispatcher);
