import React from 'react';

class Avatar extends React.Component {
    render = () => {
        return <img src='account.png' className='accountimg' />;
    }; 
};

class Input1 extends React.Component {
    render = () => {
        return <input type='text' name='name' placeholder='Your name' className='accountinput' />;
    }; 
};

class Input2 extends React.Component {
    render = () => {
        return <input type='text' name='nickname' placeholder='Your nickname' className='accountinput' />;
    }; 
};

class SaveButton extends React.Component {
    render = () => {
        return <button className='accountbutton'>Save</button>;
    }; 
};

class Account extends React.Component {
    render = () => {
        return <>
            {/* картинка, 2 поля, кнопка сохранить */}
            <Avatar /><br />
            <div className='accountdiv'>
                <Input1 />
                <Input2 />
            </div><br />
           <div className='accountsave'><SaveButton /></div>
        </>;
    }; 
};

export default Account;