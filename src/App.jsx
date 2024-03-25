

import CartProvider from "./Context/CartProvider";
import ProductsProvider from "./Context/ProductsProvider";
import RoutesApp from "./router/RoutesApp";


function App() {
  return (
    <div>
      <ProductsProvider>
        <CartProvider>
          <RoutesApp />
        </CartProvider>
      </ProductsProvider>
    </div>
  );
}

export default App;
