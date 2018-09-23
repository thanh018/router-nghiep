import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Product from './components/Product';
import Login from './components/Login';
import NotFound from './components/NotFound';

const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/about',
        exact: false,
        main: () => <About />
    },
    {
        path: '/form',
        exact: false,
        main: () => <Form />
    },
    {
        path: '/product',
        exact: false,
        main: ({match, location}) => <Product match={match} location={location}/>
    },
    {
        path: '/login',
        exact: false,
        main: ({location}) => <Login location={location} />
    },
    {
        path: '',
        exact: false,
        main: () => <NotFound />
    }
];

export default routes;