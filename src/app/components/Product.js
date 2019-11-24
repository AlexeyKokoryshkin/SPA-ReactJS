import React, { Component } from 'react';
import { Link } from 'react-router';

class Product extends Component {
    render () {
        return (
            <div className="row">
                <div className="card border-secondary md-3">
                <div className="card-header">

                <Link to={`/catalog/${this.props.id}`}>
                    { this.props.title }
                </Link>
                
                </div>
                <div className="card-body text-secondary">

                    <img src={ this.props.thumbnailUrl } alt=""/>
                </div>
            </div>
            </div>
            
        )
    }
}

export default Product