import { StateProvider } from "./contexts/StateProvider";
import { PageHeader } from "./components/PageHeader";
import { ProductPane } from "./components/ProductPane";
import { CartPane } from "./components/CartPane";

import "./App.css";

const paneStyles = {
  marginTop: "12px",
  marginBottom: "12px",
};

const leftPaneStyles = {
  ...paneStyles,
  marginLeft: "12px",
  marginRight: "6px",
};

const rightPaneStyles = {
  ...paneStyles,
  marginLeft: "6px",
  marginRight: "12px",
};

function App() {
  return (
    <div className="App">
      <StateProvider>
        <div className="wrapper">
          <div className="navbar">
            <PageHeader />
          </div>
          <div className="cart-pane" style={rightPaneStyles}>
            <CartPane />
          </div>
          <div className="product-pane" style={leftPaneStyles}>
            <ProductPane />
          </div>
        </div>
      </StateProvider>
    </div>
  );
}

export default App;
