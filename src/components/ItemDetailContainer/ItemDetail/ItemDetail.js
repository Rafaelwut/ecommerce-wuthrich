import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ItemCount from '../../ItemListContainer/ItemCount'
import { useCartContext } from '../../context/cartContext'
import "../../ItemListContainer/miCss.css"


const ItemDetail = ( {producto} ) => {

    const  {agregarAlCarrito} = useCartContext()

    const [ show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito( {...producto, cantidad: contador} )
    }

    return (
        
        <div className=' contenedorDetalle' >
            <h3>DETALLES DEL PRODUCTO</h3>

            <div className='cardDetalle'>
                <h5>{producto.nombre}</h5>
                <img src={producto.image} alt={producto.nombre}/>
                <p>{producto.description}</p>
                <h6>Precio: ${producto.precio}</h6>
                <h6>Stock: {producto.stock}</h6>
            </div>

            {show ? <ItemCount stock={ producto.stock } onAdd={onAdd}/> :
            <div>
                <Link to="/cart"><button className='btn btn-outline-primary btn-block'>Finalizar la Compra</button></Link>
                <Link to="/"><button className='btn btn-outline-primary btn-block'>Seguir Comprando</button></Link>       
            </div>}

        </div>

    )
}

export default ItemDetail
