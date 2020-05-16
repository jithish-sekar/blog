import React, { Component } from 'react';
import Product from './product';
// import { storeProducts } from '../data';
import { ProductConsumer } from '../context';


class ProductList extends Component {
    render() {
        return (
            <React.Fragment>

                <h1 className='title'>Our Products</h1>
                <ProductConsumer>
                    {value => {
                        return value.products.map(product => {
                            return <Product key={product.id} product=
                                {product} />;
                        })
                    }}
                </ProductConsumer>


            </React.Fragment>
        )
    }
}
export default ProductList;