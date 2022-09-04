import Primary from './primary.jsx';
import React from 'react';

class Name extends React.Component {
    render = () => {
        return <Primary type='text' placeholder='Enter username' />
    };
};



export default Name;