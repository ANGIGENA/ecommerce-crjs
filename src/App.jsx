import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path="/" element={<ItemListContainer greeting={''}/>}/>
          <Route path="/category/:idCategory" element={<ItemListContainer greeting={''}/>}/>
          <Route path="/detail/:idProduct" element={<ItemDetailContainer/>}/>

          <Route path="*" element={"Error pagina no encontrada"}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
