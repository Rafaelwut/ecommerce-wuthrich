import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail/ItemDetail'
import "../ItemListContainer/miCss.css"

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    const [producto, setproducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=>{

        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then((resp)=> {setproducto({id: resp.id, ...resp.data()})})
        .catch(err => err)
        .finally(() => setLoading(false))

    }, [idDetalle])


    return (
        <div>

            {loading ? <h3 className='bienvenida'>Cargando...</h3> :  <ItemDetail key={producto.id} producto = {producto}/>}  
            
        </div>
    )
}

export default ItemDetailContainer
