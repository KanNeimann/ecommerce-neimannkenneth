import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useCartContext } from '../context/CartContext';
import './ItemDetail.css'

function ItemDetail(product) {
    const { title, urlImage, price, description, id, stock } = product.product

    const [count, setCount] = useState(1);
    const { agregarCarrito } = useCartContext()


    const onAdd = () => {
        agregarCarrito({ title, urlImage, price, description, id, stock, cantidad: count })
    }

    const [inputType, setInputType] = useState('button')

    const handleInter = () => {
        onAdd()
        setInputType('input')
    }

    const InputCount = () => {
        return <Link to="/cart"><button className='botonCarrito'>Terminar compra</button></Link>
    }

    const ButtonCount = ({ product, count }) => {
        return <button onClick={handleInter} > Agregar Al carrito</ button>
    }

    return (
        <div key={id} className="producto">
            <h1>{title}</h1>
            <img src={urlImage} alt={title} className="productoImagen"></img>
            <p>Precio: ${price}</p>
            <h2>{description}</h2>
            <h3>Stock: {stock}</h3>


            {
                inputType === 'button' ?
                    <ItemCount stock={stock} initial={0} handleInter={handleInter} ButtonCount={ButtonCount} count={count} setCount={setCount} onAdd={onAdd} />
                    :
                    < InputCount />
            }


        </div>
    )
}


export default ItemDetail
