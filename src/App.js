import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <Outlet />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
