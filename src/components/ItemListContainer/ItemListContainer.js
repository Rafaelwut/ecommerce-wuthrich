
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
// import { getFetch } from '../Helpers/mock'
import { useParams } from 'react-router-dom'
import "./miCss.css"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

const ItemListContainer = ( {greeting} ) => {
    // const {greeting} = props

    const [productos, setproductos] = useState([])
    const [loading, setLoading] = useState(true)

    const {idCategoria} = useParams()
    
    useEffect(() => {
        if(idCategoria){
            const db = getFirestore();
            const queryCollection = query(collection(db, 'items'),
                where('categoria', '==', idCategoria)
            )
            getDocs(queryCollection)
            .then(res => setproductos (res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally(()=> setLoading(false))


        }else{
            const db = getFirestore()
            const queryCollection = query(collection(db, 'items'))
            getDocs(queryCollection)
            .then(res => setproductos (res.docs.map(prod => ({ id: prod.id, ...prod.data() }))))
            .catch(err => err)
            .finally(()=> setLoading(false))

        }

        // Simulacro de Api
        // if(idCategoria){
        //     getFetch
        //     .then(resp => setproductos(resp.filter(prod => prod.categoria === idCategoria)))
        //     .catch(err => console.log(err))
        //     .finally(()=> setLoading(false))
        // } else{          
        //     getFetch
        //     .then(resp => setproductos(resp))
        //     .catch(err => console.log(err))
        //     .finally(()=> setLoading(false))
        // }

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
