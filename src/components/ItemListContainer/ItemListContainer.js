import React from 'react'
import ItemList from './ItemList'


const ItemListContainer = ( {greeting} ) => {
    // const {greeting} = props





    return (
        <div>
            <h1> {greeting} </h1>

            <ItemList />
 
        </div>
    )
}

export default ItemListContainer
