import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getFetch } from '../Helpers/mock'
import ItemCount from '../ItemListContainer/ItemCount'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=>{

        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
    }, [idDetalle])

    // console.dir(producto)

    return (
        <div>
            
            <ItemDetail key={producto.id} producto = {producto}/>
           
            <ItemCount min={1} max={15} />
            
        </div>
    )
}

export default ItemDetailContainer
