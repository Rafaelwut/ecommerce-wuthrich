// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';




function App() {

  const greeting = 'Bienvenidos a Malvin desing'


  return (
    <div className="App">
      <NavBar />
      <ItemListContainer   greeting={greeting} />
    
      <h2>Nuestros Productos</h2>      
    </div>
  );
}

export default App;
