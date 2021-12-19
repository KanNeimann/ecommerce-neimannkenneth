import { useState, useEffect } from 'react';
import Spinner from '../Spinner/Spinner';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../service/getFirestore';
import './ItemDetailContainer.css'


const ItemDetailContainer = (props) => {

    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const { itemId } = useParams()

    useEffect(() => {

        const dbQuery = getFirestore()

        if (itemId) {
            dbQuery.collection('items').doc(itemId).get()
                .then(resp => setProduct({ id: resp.id, ...resp.data() }))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [itemId])

    return (

        <div className="contenido" >

            {

                loading ?
                    <Spinner />
                    :
                    <ItemDetail product={product} />
            }

        </div >
    )
}

export default ItemDetailContainer
