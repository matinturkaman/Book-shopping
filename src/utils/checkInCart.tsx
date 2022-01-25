import { dataInterface } from "./dataInterface";

export const CheckInCart = (cart: any, product: any) => {
  return cart.find((c: dataInterface) => c.id === product.id)
};
 
