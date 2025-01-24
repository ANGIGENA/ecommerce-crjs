import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./components/Checkout/Checkout";
import Cart from "./components/Cart/Cart";
import { CartProvider } from "./context/CartContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <CartProvider>

        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={''}/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={''}/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element= {<Cart />}/>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="*" element={"Error pagina no encontrada"}/>
        </Routes>
      </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
