import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer saludo={"Holaa"} />
    </div>
  );
}

export default App;
