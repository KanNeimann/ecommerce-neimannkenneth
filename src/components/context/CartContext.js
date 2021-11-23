import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const useCartContext = () => {
    return useContext(CartContext)
}

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])

    const agregarCarrito = (item) => {
        if (isInCart(item.id)) {
            const posicion = cartList.findIndex((product) => product.id === item.id)
            cartList[posicion].cantidad += item.cantidad
        } else {
            setCartList([...cartList, item])
        }
    }

    const isInCart = (id) => {
        if (cartList.find((product) => product.id === id)) {
            return true
        }
        return false
    }

    const clear = () => {
        setCartList([])
    }
    const removeItem = (id) => {
        if (isInCart(id)) {
            const posicion = cartList.findIndex((product) => product.id === id)
            cartList.splice(posicion, 1)
            console.log('eliminado');
        }
    }

    return (
        <CartContext.Provider value={{
            cartList,
            agregarCarrito,
            clear,
            removeItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext

