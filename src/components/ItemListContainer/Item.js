import React from 'react'
import { Link } from 'react-router-dom'
import './miCss.css'


const Item = ({prod}) => {
   
    return (

        <div className='card'>
            <h5>{prod.nombre}</h5>
            <h6>Precio: ${prod.precio}</h6>
            <img src={prod.image} alt={prod.nombre}/>

            <Link to={`/detalle/${prod.id}`}>
                <button className='btn btn-outline-primary btn-block'>
                    Detalle del producto
                </button>
            </Link>
        </div>
    )
}

export default Item
