import React, { Component } from 'react';
import axios from 'axios';
import Product from './Product';

class CatalogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: []
        }
    }
    
    render () {
        if(!this.state.catalog.length) {
            return null;
        }

        const catalog = this.state.catalog.map((product,index) => {
            return <Product key={index} { ...product }/>
        });

        return (
            <div>
                <h1>Каталог товаров</h1>
                { catalog }
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(response => {
            this.setState({ catalog: response.data })
        })
    }
}

export default CatalogList