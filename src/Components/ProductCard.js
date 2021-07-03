import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div className="productCard">
            <h2 className="prodName">
                {/* Method 1 : match */}
                {/* <Link to={`/product/${product.id}`}
                    className="productLink">{product.name}</Link> */}

                {/* Method 2 : location */}
                <Link to={{ pathname: `/product/${product.id}`, state: product }}
                    className="productLink">{product.name}</Link>
            </h2>
            <img src={product.img} alt={product.name} className="productImg" />
        </div>
    )
}

export default ProductCard
