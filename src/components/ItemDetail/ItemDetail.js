import ItemCount from '../ItemCount/ItemCount';

function ItemDetail(product) {
    const { title, img, price, description, id, stock } = product


    return (
        <div key={id} className="producto">
            <h1>{title}</h1>
            <img src={img} alt={title} className="productoImagen"></img>
            <p>Precio: ${price}</p>
            <h2>{description}</h2>
            <h3>Stock: {stock}</h3>

            <ItemCount stock={stock} />

        </div>
    )
}


export default ItemDetail
