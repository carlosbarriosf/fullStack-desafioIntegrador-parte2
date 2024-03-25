

import CartProvider from "./Context/CartProvider";
import RoutesApp from "./router/RoutesApp";


function App() {
  return (
    <div>
      <CartProvider>
        <RoutesApp />
      </CartProvider>
    </div>
  );
}

export default App;
