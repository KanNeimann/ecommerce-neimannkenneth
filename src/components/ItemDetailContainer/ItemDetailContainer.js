//Aca va el async moc => promesa xdxd

//import './ItemDetailContainer.css'
import { useState, useEffect } from 'react';
//import ItemCount from '../ItemCount/ItemCount'
import Spinner from '../Spinner/Spinner';

import ItemDetail from '../ItemDetail/ItemDetail';

const productos = [
    { title: 'CPU', description: "The CPU best for your computer", img: "https://http2.mlstatic.com/D_NQ_NP_679301-MLA45433787931_042021-O.webp", price: 500, id: 1 },
    { title: 'GPU', description: "The GPU best for your computer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxK_XTraO1CFhnAdyY5xXfel-r-ywyrKcXpw&usqp=CAU", price: 1000, id: 2 },
    { title: 'RAM', description: "The RAM best for your computer", img: "https://http2.mlstatic.com/D_NQ_NP_635049-MLA44337467037_122020-O.webp", price: 50, id: 3 },
    { title: 'SSD', description: "The SSD best for your computer", img: "https://http2.mlstatic.com/D_NQ_NP_617579-MLA40103563286_122019-O.webp", price: 100, id: 4 }

];

const getFetch = new Promise((resolve, reject) => {


    setTimeout(() => {
        resolve(productos)
    }, 2000)

    /* setTimeout(() => {
        reject('404 not found')
    }, 2000) */

})

const ItemDetailContainer = (props) => {

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

        <div div className="contenido" >
            {
                loading ?
                    <Spinner />
                    :
                    <ItemDetail {...products[1]} />

            }

        </div >
    )
}

export default ItemDetailContainer
