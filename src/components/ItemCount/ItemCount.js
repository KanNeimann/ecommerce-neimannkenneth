import './ItemCount.css'
import { useState } from 'react'
import { Link, Route } from 'react-router-dom'


function ItemCount({ stock }) {

    const InputCount = () => {

        return <Link to="/cart"><button onClick={() => <Route exact path="/cart"></Route>} >Ir al Cart o Terminar compra</button></Link>
    }

    const ButtonCount = ({ handleInter }) => {
        return <button onClick={handleInter}>Agregar Al carrito</button>

    }

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    const [count, setCount] = useState(0);

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

            {
                inputType === 'button' ?
                    <ButtonCount handleInter={handleInter} />

                    :
                    <InputCount />
            }
        </div>
    )
}

export default ItemCount