// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemCount';
import ItemList from './components/ItemListContainer/ItemList';




function App() {

  const greeting = 'Bienvenidos a Malvin desing'


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer   greeting={greeting} />
      <ItemCount  min={1} max={15} />
    
      <h2>Nuestros Productos</h2>      
    </div>
  );
}

export default App;
