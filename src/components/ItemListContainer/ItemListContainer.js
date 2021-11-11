import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import Spinner from '../Spinner/Spinner';

import ItemList from '../ItemList/ItemList';

const productos = [
    { title: 'CPU', img: "https://http2.mlstatic.com/D_NQ_NP_679301-MLA45433787931_042021-O.webp", category: "winter", price: 14, id: 1 },
    { title: 'GPU', img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxK_XTraO1CFhnAdyY5xXfel-r-ywyrKcXpw&usqp=CAU", category: "winter", price: 14, id: 2 },
    { title: 'RAM', img: "https://http2.mlstatic.com/D_NQ_NP_635049-MLA44337467037_122020-O.webp", category: "winter", price: 14, id: 3 },
    { title: 'SSD', img: "https://http2.mlstatic.com/D_NQ_NP_617579-MLA40103563286_122019-O.webp", category: "winter", price: 14, id: 4 }

];

const getFetch = new Promise((resolve, reject) => {
    //url


    setTimeout(() => {
        resolve(productos)
    }, 2000)

    /* setTimeout(() => {
        reject('404 not found')
    }, 2000) */

})

const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getFetch // Llamada a la api
            .then(res => {
                setProducts(res) // Array con productos
            })

            //.then().catch().finally()
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div className="contenido">
            {loading ?
                <Spinner />
                :
                <ItemList prop={products} />
            }
            <ItemCount stock="10" />
        </div>
    )
}

export default ItemListContainer
