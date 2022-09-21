import { useSelector } from "react-redux";

export default function useInCart(id) {
  const cartItems = useSelector((store) => store.cart);
  const item = cartItems.find((item) => item.product.id === id);
  if (item) {
    return item.count;
  } else {
    return 0;
  }
}
