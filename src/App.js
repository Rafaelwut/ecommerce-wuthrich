import { BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './components/context/cartContext';



function App() {

  const greeting = 'Bienvenidos a Malvin desing'


  return (
    <CartContextProvider>

      <BrowserRouter>

        <NavBar />

        <Routes>

          <Route exact path='/' element={ <ItemListContainer   greeting={ greeting } /> }/>
          <Route exact path='/categoria/:idCategoria' element={ <ItemListContainer   greeting={ greeting } /> }/>
          <Route exact path='/detalle/:idDetalle' element={ <ItemDetailContainer /> }/>
          <Route exact path='/cart' element={ <Cart /> }/>
    
        </Routes> 

      </BrowserRouter>

    </CartContextProvider>
    


  );
}

export default App;
