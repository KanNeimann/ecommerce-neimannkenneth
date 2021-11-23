import { useCartContext } from '../context/CartContext'

const Cart = () => {
    const { cartList, clear, removeItem } = useCartContext()
    console.log(cartList);
    return (
        <div>
            {cartList.map((prop) => <li key={prop.id}>{prop.title} cant:{prop.cantidad}<button onClick={() => removeItem(prop.id)}>eliminar</button></li>)}
            <button onClick={clear}> Borrar carrito</button>
        </div>
    )
}
export default Cart