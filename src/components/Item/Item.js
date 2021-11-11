import "./Item.css";

function Item({ title, img, category, price, id }) {


    return (
        <div key={id} className="producto">
            <img src={img} alt={title} className="productoImagen"></img>
            <h2>{title}</h2>
            <p>Precio: ${price}</p>

        </div>
    )
}

export default Item
