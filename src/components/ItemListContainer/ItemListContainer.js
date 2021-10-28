import React from 'react'

const ItemListContainer = (props) => {
    let { saludo } = props
    return (
        <div>
            <h3>{saludo}</h3>
        </div>
    )
}

export default ItemListContainer
