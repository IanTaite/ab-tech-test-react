import { useReducer, createContext } from "react";

import { reducer } from '../store/reducer';
import { initialState } from '../store/initialState';

export const StateContext = createContext(null);
export const ActionsContext = createContext(null);

export const StateProvider = ({ children }) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const actionMap = {
    addProductToCart: (item) =>
      dispatch({ type: "[Cart] add product to cart", payload: item }),
    removeProductFromCart: (item) =>
      dispatch({ type: "[Cart] remove product from cart", payload: item }),
    incrementItemQuantity: (item) =>
      dispatch({ type: "[Cart] increment product quantity", payload: item }),
    decrementItemQuantity: (item) =>
      dispatch({ type: "[Cart] decrement product quantity", payload: item }),
  };

  return (
    <StateContext.Provider value={state}>
      <ActionsContext.Provider value={actionMap}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
};
