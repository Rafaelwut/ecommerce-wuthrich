import React from 'react'
import { useCartContext } from '../context/cartContext'
import '../Cart/cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cartList, vaciarCarrito, deleteItem, cantidadItem,precioTotal } = useCartContext ()

    return (
        
        <div>
            {cartList.length === 0 ? (
                <div className='cart'>
                    <h3>Su Carrito esta vacio</h3>
                    <Link to= "/">
                        <button className='buttonCart btn btn-outline-primary btn-block'>Ir a comprar</button>
                    </Link>
                </div>
            ) : (
                <div className='contenedorCart'>
                    {cartList.map(prod => <li className='cart' key={prod.id}><img className='imgCart' src={prod.image} alt={prod.nombre}/>{prod.nombre} | cantidad: {prod.cantidad}  | precio x unidad: ${prod.precio} <button className='btn btn-outline-primary btn-block' onClick={()=> deleteItem(prod.id)}>X</button></li>)}
                    
                    <button className='buttonCart btn btn-outline-primary btn-block' onClick={vaciarCarrito}>Vaciar Carrito</button>
        
                    <div className='cart'>
                        <h3>Cantidad Total:  {cantidadItem()}</h3>
                        <h3>Precio Total:  ${precioTotal()}</h3>
                    </div>
    
                </div>
            )
        }

        </div>

    )
}

export default Cart
