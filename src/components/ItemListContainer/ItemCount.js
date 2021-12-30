import React, { useState } from 'react'




const ItemCount = ({min, max}) => {

    const [counter, setCounter] = useState(min)

    const handleIncrement = () => {
        
        if (counter < max){
            setCounter(estadoPrevio => estadoPrevio + 1)                   //counter+1
        }
        else{
            alert('A superado el stock disponible')
        }
                         
    }

    const handleDecrement = () => {

        if (counter > min){
            setCounter(estadoPrevio => estadoPrevio - 1) //counter-1
            // counter < max && setCounter(estadoPrevio => estadoPrevio - 1)
            // counter < max ? setCounter(estadoPrevio => estadoPrevio - 1) : alert('Ingrese un número igual o mayor que 1')
        }
        else{
            alert('Ingrese un número igual o mayor que 1')
        }
        
    }

    return (
        <div>

            <h1> { counter } </h1>

            <button onClick={ handleDecrement }>-</button>

            <button onClick={ handleIncrement }>+</button>
            
        </div>
    )
}

export default ItemCount
