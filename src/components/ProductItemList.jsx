import { useContext } from "react";
import { StateContext, ActionsContext } from "../contexts/StateProvider";
import { ProductTitleWithThumb } from "./ProductTitleWithThumb";
import { formatAmountAsPrice } from "../helpers/formatAmountAsPrice";

export const ProductItemList = () => {
  const { locale, currency, products } = useContext(StateContext);

  const { addProductToCart, removeProductFromCart } =
    useContext(ActionsContext);

  const priceStyles = { textAlign: "right" };

  const formatPrice = (price) => formatAmountAsPrice(locale, currency, price);

  if (products && products.length > 0) {
    return (
      <table>
        <thead>
          <tr>
            <th>Sku</th>
            <th>Title</th>
            <th style={priceStyles}>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            const { sku, title, unitPrice, thumbnail } = item;
            return (
              <tr key={sku}>
                <td>{sku}</td>
                <td>
                  <ProductTitleWithThumb title={title} thumbnail={thumbnail} />
                </td>
                <td style={priceStyles}>{formatPrice(unitPrice)}</td>
                <td>
                  <button onClick={() => addProductToCart(item)}>
                    Add to cart
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }

  return <div>There are no products.</div>;
};
