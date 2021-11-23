import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './components/context/CartContext';



function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path='/' element={<ItemListContainer />} />

            <Route exact path='/category/:catId' element={<ItemListContainer />} />

            <Route exact path='/item/:itemId' element={<ItemDetailContainer />} />

            <Route exact path="/cart" element={<Cart />} />

          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;


/* const getFetch = async () => {
  const getPokesJson = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokeJsonParse = await getPokesJson.json();
  setPokes(pokeJsonParse.results);
};  cargar una api desde ecmaScript 16 en vez del fetch con los .then */