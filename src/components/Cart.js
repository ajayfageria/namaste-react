import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.item);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <h2>{item.price}</h2>
        </div>
      ))}
    </div>
  );
};
export default Cart;
