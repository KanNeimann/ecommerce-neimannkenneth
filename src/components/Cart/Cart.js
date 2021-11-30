import { useCartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import './Cart.css'

const Cart = () => {
    const { cartList, clear, removeItem, precioTotal } = useCartContext()
    return (
        <div className="carrito">

            {
                (cartList.length === 0) ?
                    <>
                        <p className="carritoVacio">No hay elementos en el carrito</p>
                        <Link to="/" className="botonTienda">Volver a la tienda</Link>
                    </>
                    :
                    <>

                        <table className="tabla">
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Precio</th>
                                    <th>Thumbnail</th>
                                    <th>Cantidad</th>
                                </tr>
                            </thead>
                            {cartList.map((prop) =>


                                <tbody key={prop.id}>
                                    <tr>
                                        <td>{prop.title}</td>
                                        <td>{prop.price}</td>
                                        <td><img alt={prop.title} src={prop.urlImage} style={{ maxWidth: 50 }} /></td>
                                        <td>{prop.cantidad}</td>
                                        <td><button onClick={() => removeItem(prop.id)}>eliminar</button></td>
                                    </tr>

                                </tbody>

                            )}

                        </table>


                        <button onClick={clear}> Borrar carrito</button>

                        <p>Precio total: {precioTotal}</p>
                    </>
            }
        </div>
    )
}
export default Cart