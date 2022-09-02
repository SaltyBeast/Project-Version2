import React from 'react';

class Form extends React.Component {
render = () => {
    return <div className='blockWithInfo '>
    <p><b className='words'>Email:</b></p>
    <input className='enter' type='text' size='40' placeholder='mikecoln@gmail.com'></input>
    <p><b className='words'>Password:</b></p>
    
    <input className='enter' type='text' size='40' placeholder='***********'></input>
    </div>
    };
 };

 export default Form
