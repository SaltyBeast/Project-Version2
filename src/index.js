// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './components/App.js';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//  <App />
// );

class Car {
    color = 'red';
    speed = 220;

    go = () => {
        console.log("GO");
    };
};

const car1 = new Car();
const car2 = new Car();

console.log('Car', car1, car2);
