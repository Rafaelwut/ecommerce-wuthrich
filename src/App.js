// import logo from './logo.svg';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';



function App() {

  const greeting = 'Bienvenidos a Malvin desing'


  return (
    
    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route exact path='/' element={ <ItemListContainer   greeting={ greeting } /> }/>
        <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer   greeting={ greeting } /> }/>
        <Route exact path='/detalle/:idDetalle' element={ <ItemDetailContainer /> }/>
        <Route exact path='/cart' element={ <Cart /> }/>
        
      </Routes> 

    </BrowserRouter>

  );
}

export default App;
