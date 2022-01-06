import React from 'react'

const ItemDetail = ( {producto} ) => {
    return (
        
        <div className='col-md-6'>
            <h5>DETALLES DEL PRODUCTO</h5>
            <div className='card w-100 mt-5'>
                <div className='card-header'>
                    {`${producto.nombre}`}
                </div>
                <div className='card-body'>
                    {`${producto.description}`}
                </div>
                <div className='card-footer'>
                    {` $ ${producto.precio}`}
                </div>
            </div> 

        </div>
     
    )
}

export default ItemDetail
