import Primary from './primary.jsx';
import React from 'react';

class Email extends React.Component {
    render = () => {
        return <Primary type='email' placeholder='Enter email' />
    };
};

export default Email;