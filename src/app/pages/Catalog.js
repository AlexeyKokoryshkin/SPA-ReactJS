import React, { Component } from 'react';
import CatalogList from '../components/CatalogList';

class Catalog extends Component {
    render () {
        return (
            <div>
                {
                    (!this.props.children) ?
                    (<CatalogList/>)
                    :
                    (this.props.children)
                }
            </div>
        )
    }
}

export default Catalog