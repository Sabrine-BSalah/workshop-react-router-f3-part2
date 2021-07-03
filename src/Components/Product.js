import React, { useState, useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { listProducts } from '../Data'

const Product = ({ match, location, history }) => {
    {/* Method 1 : match */ }
    const [product, setProduct] = useState({});
    useEffect(() => {
        setProduct(listProducts.find(product => product.id === +match.params.id))
    }, [match.params.id]);


    // console.log(typeof match.params.id)
    // console.log(location.state.description)
    {/* Method 2 : location */ }
    // const product = location.state



    return (
        <div className="productDetails">
            <h2 className="prodName">{product.name}</h2>
            <h3>{product.description}</h3>
            <img src={product.img} className="productImg" alt={product.name} />
            <Button variant="secondary" onClick={() => history.goBack()}>Go Back</Button>
        </div>
    )
}

export default Product
