import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link, Route } from 'react-router-dom'

function ItemDetail({ product, count, setCount, onAdd, onSub }) {
    const { title, img, price, description, id, stock } = product

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        setInputType('input')
    }

    const InputCount = () => {
        return <Link to="/cart"><button onClick={() => <Route exact path="/cart"></Route>} >Ir al Cart o Terminar compra</button></Link>
    }

    const ButtonCount = ({ handleInter }) => {
        return <button onClick={handleInter}>Agregar Al carrito</button>
    }

    return (
        <div key={id} className="producto">
            <h1>{title}</h1>
            <img src={img} alt={title} className="productoImagen"></img>
            <p>Precio: ${price}</p>
            <h2>{description}</h2>
            <h3>Stock: {stock}</h3>


            {
                inputType === 'button' ?
                    <ItemCount stock={stock} handleInter={handleInter} ButtonCount={ButtonCount} count={count} onAdd={onAdd} onSub={onSub} />
                    :
                    < InputCount />
            }


        </div>
    )
}


export default ItemDetail
