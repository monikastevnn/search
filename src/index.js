import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';

    const products = [
    {
        name: 'Facial Foam',
        active: true,
    }, {
        name: 'Body Wash',
        active: true
    },
    {
        name: 'Toothpaste',
        active: true,
    },
    {
        name: 'Toothbrush',
        active: true,
    },
    {
        name: 'Shampoo',
        active: false,
    },
    {
        name: 'Conditioner',
        active: false,
    },
    ];

    ReactDOM.render(<App products={products} />, document.getElementById('root'));