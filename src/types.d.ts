type ProductProps = {
  id: number;
  name: string;
  offPrice: number;
  price: number;
  src: string;
  writer: string;
  qty?: number;
  find?: any;
};

type actionProps = {
  type: string;
  payload: object;
};

type CartProps = {
  cart?: Array;
  total: number;
};

type AddToCartProps = (product: ProductProps) => void;
