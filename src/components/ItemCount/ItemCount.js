import './ItemCount.css'
import React, { useState } from 'react';

function ItemCount() {

    const [count, setCount] = useState(0);

    let stock = 10

    const onAdd = () => {
        setCount(count + 1)
    }

    const onSub = () => {
        setCount(count - 1)
    }



    return (
        <div className='producto'>
            <p>Camisa</p>
            <div className='contador'>
                <button onClick={() => count > 0 && onSub()}>-</button>
                <p>{count}</p>
                <button onClick={() => count < stock && onAdd()}>+</button>
            </div>
            <button onClick={() => alert(`Agregaste ${count} cantidad`)}>Agregar al carrito</button>
        </div>
    )
}

export default ItemCount