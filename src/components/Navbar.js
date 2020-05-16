import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../logo.svg'

class Navbar extends Component {

    product() {
        this.props.history.push('/')
    }
    render() {
        return (
            <div className='navbar'>

                <img src='amozon.png' alt='str' className='logo' />
                    <h1 onClick={()=>this.product()}>Product</h1>
                <h1>About</h1>
                <Link to='/cart'>
                    <button className='cart'>
                        <span ><i className='fa fa-cart-plus' /></span>
                    My Cart
                </button>
                </Link>
            </div>
        )
    }
}
export default Navbar;