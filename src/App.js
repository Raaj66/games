import "./App.css";
import Games from "./games/Games";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Games />
      </CartProvider>
    </div>
  );
}

export default App;
