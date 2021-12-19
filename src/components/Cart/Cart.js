import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getFirestore } from '../../service/getFirestore'
import firebase from "firebase"
import 'firebase/firestore'
import './Cart.css'

const Cart = () => {
    const { cartList, clear, removeItem, precioTotal } = useCartContext()
    const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: ''
    })

    const generarOrden = (e) => {

        e.preventDefault()
        const orden = {}

        orden.date = firebase.firestore.Timestamp.fromDate(new Date());

        orden.buyer = { nombre: 'Kan', email: 'kan@hotmail.com', tel: '3434543' }
        orden.total = precioTotal

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id
            const nombre = cartItem.title
            const precio = cartItem.price
            const cantidad = cartItem.cantidad


            return { id, nombre, precio, cantidad }
        })

        const dbQuery = getFirestore()
        dbQuery.collection('orders').add(orden)

            .then(resp => setIdOrder(resp.id))

            .catch(err => console.log(err))

        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i => i.id)
        )

        const batch = dbQuery.batch();

        itemsToUpdate.get()

            .then(collection => {
                collection.docs.forEach(docSnapshot => {
                    batch.update(docSnapshot.ref, {
                        stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                    })
                })
                batch.commit().then(res => {
                    console.log('se actualizo')
                })
            })
        console.log(orden)

        let inputs = document.getElementsByClassName('inputs')
        console.log(inputs);

        inputs[0].value = ''
        inputs[1].value = ''
        inputs[2].value = ''
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
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
                                        <td>$ {prop.price}</td>
                                        <td><img alt={prop.title} src={prop.urlImage} style={{ maxWidth: 50 }} /></td>
                                        <td>{prop.cantidad}</td>
                                        <td><button onClick={() => removeItem(prop.id)}>eliminar</button></td>
                                    </tr>

                                </tbody>

                            )}

                        </table>


                        <button onClick={clear}> Borrar carrito</button>

                        <p>Precio total: $ {precioTotal}</p>

                        <form
                            onSubmit={generarOrden}
                            onChange={handleChange}
                            className="formulario"
                            id='form'
                        >
                            <label> Nombre y apellido:</label>
                            <input className="inputs" type='text' name='name' placeholder='name' defaultValue={formData.name} required />
                            <label> Telefono:</label>
                            <input className="inputs" type='text' name='phone' placeholder='tel' defaultValue={formData.phone} required />
                            <label> Email:</label>
                            <input className="inputs" type='email' name='email' placeholder='email' defaultValue={formData.email} required />
                            <button>  enviar</button>

                        </form>
                        {idOrder !== '' ? <h3>Tu codigo de compra es: {idOrder}</h3> : undefined}

                    </>
            }
        </div>
    )
}
export default Cart