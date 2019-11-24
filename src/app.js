import React from 'react';
import ReactDom from 'react-dom';
import './app/styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/Main';
import Catalog from './app/pages/Catalog';
import AboutUs from './app/pages/AboutUs';
import PageNotFound from './app/pages/PageNotFound';
import ProductIn from './app/pages/ProductIn';
import Posts from './app/pages/Posts';

ReactDom.render(<Router history={browserHistory}>
    <Route path="/" component={Layout}>
        <IndexRoute component={MainPage}/>
        <Route path="catalog" component={Catalog}>
            <Route path=":productId" component={ProductIn}/> 
        </Route>
        <Route path="aboutUs" component={AboutUs}/>
        <Route path="posts" component={Posts}/>
        <Route path="*" component={PageNotFound}/>
    </Route>
</Router>, document.querySelector('#root'));