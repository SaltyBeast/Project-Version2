import React from 'react';
import Image from '../components/Image/Image.jsx';
import Container from '../components/Container/container.jsx';
import Form from '../components/Form/Form.jsx';
import Button from '../components/Button/Button.jsx';

class Main extends React.Component {
render = () => {
    return <>
    <div className='container'>
      <Image />
      <Form />
      <Button />
      </div>
      </>;
    };
 };

 export default Main








