import React, { useState } from 'react'
import { useCartContext } from '../context/cartContext'
import '../Cart/cart.css'
import { Link } from 'react-router-dom'
import { addDoc, collection, documentId, getDocs, getFirestore, query, where, writeBatch } from 'firebase/firestore'
import Resumen from '../Resumen/Resumen'



const Cart = () => {

    const { cartList, vaciarCarrito, deleteItem, cantidadItem, precioTotal } = useCartContext ()

    const [condicional, setCondicional] = useState(false);

    const  [idOrden, setIdOrden] = useState('');

    const  [dataForm, setDataForm] = useState({
        email:'',
        name:'',
        phone:''
    });

    const realizarCompra = async (e) => {

        e.preventDefault()
        // Nuevo objeto de órdenes
        let orden= {}
        
        orden.buyer = dataForm
        orden.total = precioTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const cantidad = cartItem.cantidad;
            const precio = cartItem.precio * cartItem.cantidad

            return{id, nombre, precio, cantidad}
        })

        // guardar la orden en firestobe

        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        await addDoc(orderCollection, orden)
        .then(resp => setIdOrden(resp.id))
        .catch(err => console.log(err))
       

        // actualizar stock
        const queryCollection = collection(db, 'items')

        const queryActualizarStock = query(
            queryCollection, where( documentId(), 'in', cartList.map(it => it.id))
        )

        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
        ))
        .catch(err => console.log(err))
     
        
        batch.commit()

        setCondicional(true)
    }

    function handleChange(e){
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }

    return (
        
        <div>

            {
                condicional ?
                    <Resumen idOrden={idOrden}/>               
                :
                <div>
                {cartList.length === 0 ? (
                    <div className='cart'>
                        <h3>Su Carrito esta vacio</h3>
                        <Link to= "/">
                            <button className='buttonCart btn btn-outline-primary btn-block'>Ir a comprar</button>
                        </Link>
                    </div>
                ) : (
                    <div className='contenedorCart'>
                        {cartList.map(prod => <li className='cart' key={prod.id}><img className='imgCart' src={prod.image} alt={prod.nombre}/>{prod.nombre} | cantidad: {prod.cantidad}  | precio x unidad: ${prod.precio} <button className='btn btn-outline-primary btn-block' onClick={()=> deleteItem(prod.id)}>X</button></li>)}


                        <div className='cart'>
                            <h3>Cantidad Total:  {cantidadItem()}</h3>
                            <h3>Precio Total:  ${precioTotal()}</h3>
                        </div>

                        
                        <button className='buttonCart btn btn-outline-primary btn-block' onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <Link to="/"><button className='btn btn-outline-primary btn-block'>Seguir Comprando</button></Link> 
                        
                        
                        <form className='form' onSubmit={realizarCompra}>
                            <input className='formInput' type='text'  name='name' placeholder='name' onChange={handleChange} value={dataForm.name} ></input>
                            <br/>
                            <input className='formInput' type='number'  name='phone' placeholder='phone' onChange={handleChange} value={dataForm.phone} ></input>
                            <br/>
                            <input className='formInput' type='email' name='email' placeholder='email' onChange={handleChange} value={dataForm.email} ></input>
                            <br/>
                            <button className='buttonCart btn btn-outline-primary btn-block' onClick={realizarCompra}>Generar Orden</button>
                        </form>

                    </div>
                )
                }

            </div>
            }

           





        </div>

    )
}

export default Cart
