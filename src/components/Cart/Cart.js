import React from 'react'
import { useCartContext } from '../context/cartContext'



const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext ()

    return (
        <div>
            {cartList.map(prod => <li key={prod.id}>{prod.nombre} - cantidad: {prod.cantidad} - precio x unidad: ${prod.precio} </li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    )
}

export default Cart
