export const reducer = (state, action) => {
  switch (action.type) {
    case "[Cart] add product to cart": {
      const exists = state.cart.items.find((item) => item.sku === action.payload.sku);
      if (exists) { // update item
        return {
          ...state,
          cart: {
            items: state.cart.items.map((item) =>
              item.sku === action.payload.sku
              ? { ...item, quantity: item.quantity + 1, subTotal: item.unitPrice * (item.quantity + 1) }
              : item
            )
          },
        };
      }
      if (!exists) { // add item
        const {sku, title, unitPrice, thumbnail } = action.payload;
        const newCartItems = [...state.cart.items, { sku, title, unitPrice, quantity: 1, subTotal: unitPrice, thumbnail } ];
        const newGrandTotal = newCartItems.reduce((total, item) => total + item.unitPrice, 0);
        return {
          ...state,
          cart: {
            grandTotal: newGrandTotal,
            items: newCartItems
          },
        };
      }
    }
    case "[Cart] remove product from cart": {
      const existingItem = state.cart.items.find((item) => item.sku === action.payload.sku);
      if (!existingItem) {
        return state;
      }
      if (existingItem) {
        const newCartItems = state.cart.items.filter((item) => item !== existingItem);
        const newGrandTotal = newCartItems.reduce((total, item) => total + item.unitPrice, 0);
        return {
          ...state,
          cart: {
            grandTotal: newGrandTotal,
            items: newCartItems
          },
        };
      }
    }
    case "[Cart] increment product quantity": {
      const newCartItems = state.cart.items.map((item) => item.sku === action.payload.sku ? { ...item, quantity: item.quantity + 1, subTotal: item.unitPrice * (item.quantity + 1) } : item );
      const newGrandTotal = newCartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
      return {
        ...state,
        cart: {
          grandTotal: newGrandTotal,
          items: newCartItems
        },
      };
    }
    case "[Cart] decrement product quantity": {
      const newCartItems = state.cart.items
        .map((item) => item.sku === action.payload.sku ? { ...item, quantity: item.quantity - 1, subTotal: item.unitPrice * (item.quantity - 1) } : item )
        .filter((item) => item.subTotal > 0);
      const newGrandTotal = newCartItems.reduce((total, item) => total + (item.unitPrice * item.quantity), 0);
      return {
        ...state,
        cart: {
          grandTotal: newGrandTotal,
          items: newCartItems
        },
      };
    }
    default: {
      throw Error("Unknown action: " + action);
    }
  }
};
