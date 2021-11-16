import Header from './components/Header/Header'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/'>
            <ItemListContainer />
          </Route>
          <Route exact path='/category/:catId'>
            <ItemListContainer />
          </Route>
          <Route exact path='/item/:itemId'>
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;


/* const getFetch = async () => {
  const getPokesJson = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const pokeJsonParse = await getPokesJson.json();
  setPokes(pokeJsonParse.results);
};  cargar una api desde ecmaScript 16 en vez del fetch con los .then */