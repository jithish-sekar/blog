import React, { Component } from 'react';
// import styled from "styled-component";
import { Link } from "react-router-dom";
import { ProductConsumer } from '../context';
class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <React.Fragment >
                <div className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                <div className="img-container p-6"
                    onClick={console.log("you clicked the image container")}>
                    <Link to="details">
                        <img src={img} className="productimg" />
                    </Link>
                </div>
                    </div>
            </div >
            </React.Fragment >
        )
    }
}
export default Product;
// const ProductWrapper = styled.div