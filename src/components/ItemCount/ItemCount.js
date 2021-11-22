import './ItemCount.css'
//import { useState } from 'react'

function ItemCount({ stock, ButtonCount, handleInter, count, onAdd, onSub }) {

    return (
        <div className='producto'>
            <div className='contador'>
                <button onClick={() => count > 0 && onSub()}>-</button>
                <p>{count}</p>
                <button onClick={() => count < stock && onAdd()}>+</button>
            </div>
            <ButtonCount handleInter={handleInter} />
        </div>
    )
}

export default ItemCount