import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import { getFetch } from '../Helpers/mock'
import { useParams } from 'react-router-dom'
import "./miCss.css"

const ItemListContainer = ( {greeting} ) => {
    // const {greeting} = props

    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()
    
    useEffect(() => {

        // Simulacro de Api

        if(idCategoria){

            getFetch
            .then(resp => setproductos(resp.filter(prod => prod.categoria === idCategoria)))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

        } else{
            
            getFetch
            .then(resp => setproductos(resp))
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))

        }

    }, [idCategoria])



    return (
        <div className='bienvenida'>
            <h2> {greeting} </h2>

            { loading ? <h3>Cargando....</h3> : 
            
            <ItemList productos = { productos }/>
        
            }
  
        </div>
    )
}

export default ItemListContainer
