import "./Item.css";
import { Link } from 'react-router-dom'

function Item({ title, img, category, price, id }) {


    return (
        <div key={id} className="producto">

            <Link to={`/item/${id}`}>
                <img src={img} alt={title} className="productoImagen"></img>
                <h2>{title}</h2>
                <p>Precio: ${price}</p>
            </Link>
        </div >
    )
}

export default Item
