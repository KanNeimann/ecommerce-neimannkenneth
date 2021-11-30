import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import { getFirestore } from '../../service/getFirestore'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router';


const ItemListContainer = (props) => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)


    const { catId } = useParams()

    useEffect(() => {

        const dbQuery = getFirestore() // coneccion con firestore

        if (catId) {
            dbQuery.collection('items').where('categoryId', '==', catId).get()
                .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            dbQuery.collection('items').get()
                .then(data => setProducts(data.docs.map(product => ({ id: product.id, ...product.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }
    }, [catId])


    return (
        <div className="contenido">
            {loading ?
                <Spinner />
                :

                < ItemList prop={products} />
            }

        </div>
    )
}

export default ItemListContainer
