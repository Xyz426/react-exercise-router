import React, { Component } from 'react'

class Product extends Component{

    render(){
        const data = require('../data.json');
        const id = this.props.match.params.id;
        const url = this.props.match.url;
        const productData = Object.values(data).filter(product => product.id === id);

        return(            
            <div className='detail'>
                <strong>Product Detail</strong>
                {/* <p>Name:{productData.name}</p>            
                <p>Id:{productData.id}</p>
                <p>Price:{productData.price}</p>  */}


                {Object.keys(productData).map((msg) => 
                    <p>{msg}:{productData[msg]}</p>
                )}
                <p>url:{url}</p>
            </div>
        )
    }
}

export default Product;