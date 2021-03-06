const addToCart = (state: any, action: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  if (updatedItemIndex < 0) {
    updatedCart.push({ ...action.payload, qty: 1 });
  } else {
    const updatedItem = { ...updatedCart[updatedItemIndex] };
    updatedItem.qty++;
    updatedCart[updatedItemIndex] = updatedItem;
  }
  return {
    ...state,
    cart: updatedCart,
    total: state.total + action.payload.offPrice,
  };
};

const decProduct = (state: any, action: any) => {
  const updatedCart = [...state.cart];
  const updatedItemIndex = updatedCart.findIndex(
    (item) => item.id === action.payload.id
  );
  const updatedItem = { ...updatedCart[updatedItemIndex] };
  if (updatedItem.qty === 1) {
    const filteredProduct = updatedCart.filter(
      (item) => item.id !== action.payload.id
    );
    return {
      ...state,
      cart: filteredProduct,
      total: state.total - action.payload.offPrice,
    };
  } else {
    updatedItem.qty--;
    updatedCart[updatedItemIndex] = updatedItem;
    return {
      ...state,
      cart: updatedCart,
      total: state.total - action.payload.offPrice,
    };
  }
};

const removeProduct = (state: any, action: any) => {
  const updatedCart = [...state.cart];
  const filteredProduct = updatedCart.filter(
    (item) => item.id !== action.payload.id
  );
  return {
    ...state,
    cart: filteredProduct,
    total: state.total - action.payload.offPrice,
  };
};

const CartReducer = (state: ProductProps, action: actionProps) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return addToCart(state, action);
    case "DEC_PRODUCT":
      return decProduct(state, action);
    case "REMOVE_PRODUCT":
      return removeProduct(state, action);
    default:
      return state;
  }
};

export default CartReducer;
