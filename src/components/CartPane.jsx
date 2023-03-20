import { CartItemList } from "./CartItemList";

export const CartPane = () => {
  return (
    <div style={{ padding: "12px" }}>
      <h2>Your shopping cart</h2>
      <CartItemList />
    </div>
  );
};
