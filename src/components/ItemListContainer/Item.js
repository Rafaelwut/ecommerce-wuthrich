import React from 'react'


const Item = ({prod}) => {
   
    return (
        <div className='col-md-4'>
            <div className='card w-100 mt-5'>
                <div className='card-header'>
                    {`${prod.nombre}`}
                </div>
                <div className='card-body'>
                    {`${prod.description}`}
                </div>
                <div className='card-footer'>
                    {`${prod.precio}`}
                </div>
            </div> 
        </div> 
    )
}

export default Item
