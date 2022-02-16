import React, { useState } from 'react'
import "./miCss.css"



const ItemCount = ({stock, onAdd}) => {

    const inicial = 0

    const [contador, mueveContador] = useState(inicial)

    const sumaContador = () => {
        contador < stock ? mueveContador(prev => prev +1) : alert ("stock máximo disponible")                    
    };

    const restaContador = () => {
        contador > inicial && mueveContador(prev => prev -1)

    }

    return (
        <div className='contador'>

            <h1> { contador } </h1>

            <button onClick={ restaContador }> - </button>
            
            <button onClick={()=> onAdd(contador)} disabled={contador < 1 && 'disabled'} >Agregar al Carrito</button>

            <button onClick={ sumaContador }> + </button>
            
        </div>
    )
}

export default ItemCount
