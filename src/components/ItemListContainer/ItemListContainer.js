import './ItemListContainer.css'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = (props) => {
    return (
        <div className="contenido">
            <ItemCount stock="10" />
        </div>
    )
}

export default ItemListContainer
