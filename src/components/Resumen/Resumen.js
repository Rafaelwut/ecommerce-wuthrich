import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/cartContext'
import '../Resumen/resumen.css'

function Resumen({ idOrden }) {

  const {  vaciarCarrito } = useCartContext ()



  return <div >

    <div className='contenedorResumen'>
        <h5> Muchas gracias por su compra, su número de orden es: {idOrden}</h5>
        <Link to="/"><button className='btn btn-outline-primary btn-block' onClick={ vaciarCarrito }>Volver a Comprar</button></Link> 
       
    </div>

  </div>;
}

export default Resumen;
