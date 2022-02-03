export const CheckInCart = (cart: ProductProps, product: ProductProps) => {
  return cart.find((c: ProductProps) => c.id === product.id);
};
