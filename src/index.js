// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <App />
// );

class Parent {
    render = () => {
        console.log('render');
    };
};

class Child extends Parent {
    test = () => {};
};

const a = new Child();
a.render();