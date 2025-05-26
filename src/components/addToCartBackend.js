import { useDispatch } from "react-redux";
import { addToCartBackend } from "../features/cart/cart"; 

const handleAddToCart = () => {
  dispatch(addToCartBackend({
    productId: product.id,
    quantity: 1
  }));
};
