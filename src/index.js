// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <App />
// );

class Parent {
    constructor () {
        console.log('constructor Parent');
    };

    render = () => {
        console.log('render');
    };
};

class Child extends Parent {
    color = null;

    constructor (color) {
        super(color);

        this.color = color;
        this.render();
    };

    render = () => {
        console.log('Child.render', this.color);
    };
};

const a = new Child('red');

