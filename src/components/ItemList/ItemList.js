import React from 'react'
import Item from '../Item/Item';

function ItemList({ prop }) {

    console.log();
    return (
        <div>
            {prop.map(producto => <Item {...producto} key={producto.id} />)}
        </div>
    )
}

export default ItemList
