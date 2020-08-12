import React, { Component } from 'react'
import '../style/Products.css'
import { Link } from 'react-router-dom';
import '../data.json'

class Products extends Component{
    render(){

        const data = require('../data.json')

        const productLists = Object.values(data).map(product=>(
        <Link className="link"  to={`/products/${product.id}`}>
            <p>{product.name}</p>
        </Link>
        ))
        
        return(
            <div className="products">
                <p>
                    All Products: <br/>
                
                    {productLists}
                </p>
            </div>
        );
    }
}

export default Products;