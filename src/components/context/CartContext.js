import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [cantItems, setCantItems] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)

    const actualizarPrecioTotal = (cartListLocal) => {
        let precio = 0;
        cartListLocal.map((producto) => precio = producto.price * producto.cantidad)
        setPrecioTotal(precio);
    }

    const actualizarContadorItems = (cantidad, operador) => {
        const cantParseada = parseInt(cantidad)
        if (operador === '+') {
            setCantItems(cantItems + cantParseada)
        } else {
            setCantItems(cantItems - cantParseada)
        }

    }

    const agregarCarrito = (item) => {
        var cartListLocal = cartList;
        if (isInCart(item.id)) {
            const posicion = cartList.findIndex((product) => product.id === item.id);
            cartList[posicion].cantidad += item.cantidad;
        } else {
            cartListLocal = [...cartList, item]
            setCartList([...cartList, item]);
        }

        actualizarContadorItems(item.cantidad, '+');
        actualizarPrecioTotal(cartListLocal);
    }

    const isInCart = (id) => {
        if (cartList.find((product) => product.id === id)) {

            return true
        }
        return false
    }

    const clear = () => {
        setCartList([])
        setCantItems(0)
        setPrecioTotal(0)
    }
    const removeItem = (id) => {
        if (isInCart(id)) {
            const producto = cartList.filter((product) => product.id === id)
            actualizarContadorItems(producto[0].cantidad, '-')

            const updatedList = cartList.filter((product) => product.id !== id);
            setCartList(updatedList);
            actualizarPrecioTotal(updatedList);

        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            cantItems,
            precioTotal,
            agregarCarrito,
            clear,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

