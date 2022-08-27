import React from 'react';
import Primary from './Primary.jsx';

class Email extends React.Component {
    render = () => {
        return <Primary type='text' placeholder='Your email'/>
    };
};


export default Email;