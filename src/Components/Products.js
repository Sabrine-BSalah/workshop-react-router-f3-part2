import React from 'react'
import { listProducts } from '../Data'
import ProductCard from './ProductCard'

const Products = () => {


    return (
        <div className="productsContent">
            <h2>This is the page Products</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, fugiat necessitatibus modi in vitae iusto neque sit impedit facilis commodi eligendi dicta molestiae a quas esse nemo incidunt accusamus autem omnis numquam deleniti facere debitis natus quasi! Iste est quae dolor voluptas nemo dolores, accusamus pariatur mollitia non voluptatum facilis commodi. Quasi, incidunt voluptatibus! Odio velit error nam voluptatibus! Modi in qui quibusdam, consectetur nemo vel, enim, praesentium ea voluptatibus sint porro itaque sequi voluptas illo excepturi! Error odit fugiat perspiciatis corporis. Id, tenetur quos. Sapiente at sunt autem facilis esse, velit illum aliquam ex animi totam nesciunt cupiditate? Officia.</p>
            <hr />
            <div className="listProducts">

                {
                    listProducts.map(product =>
                        <ProductCard key={product.id} product={product} />
                    )
                }
            </div>

        </div>
    )
}

export default Products
