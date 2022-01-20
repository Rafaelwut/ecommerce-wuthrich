// Creamos el contexto
import { useState, useContext, createContext } from "react"

const cartContext = createContext([])


// función que me evita importar el useContext en todos los archivos
export function useCartContext(){
    return useContext(cartContext)
}



// Creamos el componente que maneja el contexto

export const CartContextProvider = ({children}) => {
    // Estados y funciones globales
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(items){
        // -1 si no lo encuentra
        const indice= cartList.findIndex(i => i.id === items.id)

        if(indice > -1){
            const qtyVieja = cartList[indice].cantidad

            let cantidadNueva = qtyVieja + items.cantidad

            cartList[indice].cantidad = cantidadNueva

            let arrayAuxiliar = [...cartList]
            setCartList(arrayAuxiliar)  
        }else{
            setCartList([...cartList, items])
        }
        
    }

    function vaciarCarrito(){
        setCartList([])
    }


    const precioTotal = () =>{
        return cartList.reduce((acum, valor) => (acum +(valor.cantidad * valor.precio)),0)
    }

    const cantidadItem = () => {
        return cartList.reduce((acum, item) => acum = acum + item.cantidad, 0)
    }

    return(
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            vaciarCarrito,
            precioTotal,
            cantidadItem
            
        }}>
            {children}
        </cartContext.Provider>
    )
}

