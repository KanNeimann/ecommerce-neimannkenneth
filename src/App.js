import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;


/* const getFetch = async () => {
  const getPokesJson = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokeJsonParse = await getPokesJson.json();
  setPokes(pokeJsonParse.results);
};  cargar una api desde ecmaScript 16 en vez del fetch con los .then */