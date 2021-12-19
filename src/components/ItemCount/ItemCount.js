import './ItemCount.css'
//import { useState } from 'react'

function ItemCount({ stock, initial, ButtonCount, handleInter, count, setCount, onAdd }) {

    const handlerAdd = () => {
        if (count < stock) {
            setCount(count + 1)
        }

    }

    const handlerRm = () => {

        if (count > initial) {
            setCount(count - 1)
        }
    }

    return (
        <div className='productoCantidad'>
            <div className='contador'>
                <button onClick={handlerRm}>-</button><br />
                <p>{count}</p>
                <button onClick={handlerAdd}>+</button>
            </div>
            <ButtonCount handleInter={handleInter} />
        </div>
    )
}

export default ItemCount