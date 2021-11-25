import React from 'react'
import Item from '../Item/Item';
import './ItemList.css'

function ItemList({ prop }) {

    return (
        <div className="listaProductos">
            {prop.map(producto => <Item {...producto} key={producto.id} />)}
        </div>
    )
}

export default ItemList
