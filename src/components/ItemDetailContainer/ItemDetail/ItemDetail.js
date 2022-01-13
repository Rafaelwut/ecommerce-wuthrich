import React from 'react'

const ItemDetail = ( {producto} ) => {
    return (
        
        <div className='col-md-4'>
            <h5>DETALLES DEL PRODUCTO</h5>
            <div className='card w-100 mt-5'>
                <div className='card-header'>
                    {`${producto.nombre}`}
                </div>
                <div className="card-body">
                    <img src={ `${producto.image}`} alt={producto.nombre} className='w-50'/>
                </div>
                <div className='card-body'>
                    {`${producto.description}`}
                </div>
                <div className='card-footer'>
                    {` $ ${producto.precio}`}
                </div>
                <div className='card-footer'>
                    {` stock: ${producto.stock}`}
                </div>
            </div> 

        </div>

    )
}

export default ItemDetail
