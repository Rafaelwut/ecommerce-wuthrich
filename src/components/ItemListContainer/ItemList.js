import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react'
import { getFetch } from '../Helpers/mock'

const ItemList = () => {

    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        // Simulacro de Api
        getFetch
        .then(resp => setproductos(resp))
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
    }, [])
    return (
        <div>
            
            { loading ? <h3>Cargando....</h3> :
            productos.map(prod => <Item/>
            ) }     
        </div>
    )
}

export default ItemList
