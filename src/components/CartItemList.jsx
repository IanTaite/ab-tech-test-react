import { useContext } from "react";
import { StateContext, ActionsContext } from "../contexts/StateProvider";
import { ProductTitleWithThumb } from "./ProductTitleWithThumb";
import { formatAmountAsPrice } from "../helpers/formatAmountAsPrice";

export const CartItemList = () => {
  const { locale, currency, cart } = useContext(StateContext);
  const { grandTotal, items } = cart;

  const {
    removeProductFromCart,
    incrementItemQuantity,
    decrementItemQuantity,
  } = useContext(ActionsContext);

  const imageStyles = { width: "64px", height: "64px" };
  const priceStyles = { textAlign: "right" };

  const formatPrice = (price) => formatAmountAsPrice(locale, currency, price);

  if (items.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Sku</th>
            <th>Title</th>
            <th>Quantity</th>
            <th style={priceStyles}>Price</th>
            <th style={priceStyles}>Sub-total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            const { sku, title, quantity, unitPrice, subTotal, thumbnail } =
              item;
            return (
              <tr key={sku}>
                <td>{sku}</td>
                <td>
                  <ProductTitleWithThumb title={title} thumbnail={thumbnail} />
                </td>
                <td>
                  <button onClick={() => decrementItemQuantity(item)}>-</button>
                  <span style={{margin: "0 6px"}}>{quantity}</span>
                  <button onClick={() => incrementItemQuantity(item)}>+</button>
                </td>
                <td style={priceStyles}>{formatPrice(unitPrice)}</td>
                <td style={priceStyles}>{formatPrice(subTotal)}</td>
                <td>
                  <button onClick={() => removeProductFromCart(item)}>
                    Remove from Cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>Grand Total</td>
            <td style={priceStyles}>{formatPrice(grandTotal)}</td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td><button>Checkout</button></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    );
  }
  if (items.length === 0) {
    return (
      <p>
        Your cart is empty, please add a product from the list on the left.
      </p>
    );
  }
};
