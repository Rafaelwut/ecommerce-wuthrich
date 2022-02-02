import React from 'react';
import { Link } from 'react-router-dom';

function Resumen({ idOrden }) {
  return <div >

    <div className='contenedorDetalle'>
        <h5> Muchas gracias por su compra, su número de orden es: {idOrden}</h5>
        <Link to="/"><button className='btn btn-outline-primary btn-block'>Volver a Comprar</button></Link> 
       
    </div>

  </div>;
}

export default Resumen;
