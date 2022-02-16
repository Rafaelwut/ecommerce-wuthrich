import React from 'react'
import Item from './Item'
import './miCss.css'

const ItemList = ( {productos} ) => {


    return (
        <div className='contenedor'> 
            {productos.map(prod =>(
                <Item key={prod.id} prod={prod}/>
            ) ) }     
        </div>
    )
}

export default ItemList
