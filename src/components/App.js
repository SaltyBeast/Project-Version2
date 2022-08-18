import React from 'react';

const style = {
    textAlign: 'center',
    color: 'red',
};
const innerStyle = {
    width: '50%',
    margin: '0 auto',
};

const listener = (event) => {
    console.log('onRedClick', event);
};
document.addEventListener('onRedClick', listener);

setTimeout(() => {
    document.dispatchEvent(new CustomEvent('onRedClick', {
        'detail': {
            hello: '123',
        }
    }));
}, 3000);

class App extends React.Component {
    constructor (props) {
        super(props);
        
        this.color = 'red';

    };

    func = (e) => {
        alert('Hallelujah!');
    };

    render = () => {
        return <div 
            style={style}
            onClick={this.func}>
                <div style={innerStyle}>
                {this.color}
                </div>
        </div>;
    }; 
};

export default App;
