import { doc, getDoc, getFirestore } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import { getFetch } from '../Helpers/mock'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true)

    const [producto, setproducto] = useState({})

    const {idDetalle} = useParams()

    useEffect(()=>{

        const db = getFirestore()
        const queryProd = doc(db, 'items', idDetalle)
        getDoc(queryProd)
        .then((resp)=> {setproducto({id: resp.id, ...resp.data()})});


        setLoading(false);

        // getFetch
        // .then(resp => setproducto(resp.find(prod => prod.id === idDetalle)))
    }, [idDetalle])

    // console.dir(producto)

    return (
        <div>

            {loading ? <h1>Cargando...</h1> :  <ItemDetail key={producto.id} producto = {producto}/>}  
            
        </div>
    )
}

export default ItemDetailContainer
