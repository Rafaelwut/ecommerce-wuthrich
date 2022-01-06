import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getFetch } from '../Helpers/mock'

const ItemListContainer = ( {greeting} ) => {
    // const {greeting} = props

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
            <h2> {greeting} </h2>

            { loading ? <h3>Cargando....</h3> : 
            
            <ItemList productos = { productos }/>
        
            }
  
        </div>
    )
}

export default ItemListContainer
