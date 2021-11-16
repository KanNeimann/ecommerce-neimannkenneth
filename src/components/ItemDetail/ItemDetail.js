//import "./Item.css";

function ItemDetail(product) {
    const { title, img, price, description, id } = product

    return (
        <div key={id} className="producto">
            <h1>{title}</h1>
            <img src={img} alt={title} className="productoImagen"></img>
            <p>Precio: ${price}</p>
            <h2>{description}</h2>

        </div>
    )
}


export default ItemDetail
