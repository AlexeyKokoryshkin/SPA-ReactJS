import React, { Component } from 'react';
import axios from 'axios';
import ProductProfile from '../components/Product';

class ProductIn extends Component {
    constructor(props) {
        super(props);
        this.state={
            productIn: null
        }
    }
    render () {
        return (
            <div>
               { this.state.productIn && <ProductProfile { ...this.state.productIn } /> }
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${this.props.params.productId}`)
        .then(response => {
            this.setState({ productIn: response.data })
        })
    }

}

export default ProductIn