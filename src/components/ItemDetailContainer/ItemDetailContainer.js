import React, { useEffect, useState } from 'react'
import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setproducto] = useState({})

    useEffect(()=>{

        getFetch
        .then(resp => setproducto(resp.find(prod => prod.id === '1')))
    }, [])

    // console.dir(producto)

    return (
        <div>
            
            <ItemDetail producto = {producto}/>
            
        </div>
    )
}

export default ItemDetailContainer
