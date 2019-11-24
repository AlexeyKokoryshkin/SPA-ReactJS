import React, { Component } from 'react';
import { Link } from 'react-router';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.brand = 'TPS Logo'; 
    }
    
    isActive(href) {
        return window.location.pathname === href;
    }

    render () {
        return (
            <div className="container">
                <header>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={ this.isActive("/") }>Главная</MenuItem>
                    <MenuItem href="/catalog" active={ this.isActive("/catalog") }>Каталог</MenuItem>
                    <MenuItem href="/aboutUs" active={ this.isActive("/aboutUs") }>О нас</MenuItem>
                    <MenuItem href="/posts" active={ this.isActive("/posts") }>Отзывы</MenuItem>
                </Menu>
                </header>
                <main>
                    <div className="row">
                        <div className="col-12">
                            { this.props.children }
                        </div>
                    </div>
                </main>
                <footer className="b-footer">
                    &copy; 2019
                </footer>
            </div>
        )
    }
}

export default Layout