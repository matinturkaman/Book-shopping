import Cart from "../pages/cart";
import Explore from "../pages/explore";
import Home from "../pages/home";
import Location from "../pages/location";
import ProductDetail from "../pages/productDetail";

export const routes = [
  { path: "/book/:id?", component: ProductDetail },
  { path: "/explore", component: Explore },
  { path: "/cart", component: Cart },
  { path: "/location", component: Location },
  { path: "/", exact: true, component: Home },
];
