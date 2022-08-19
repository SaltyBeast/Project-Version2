import React from 'react';




class Account extends React.Component {
    render = () => {
        return <div>
            {/* картинка, 2 поля, кнопка сохранить */}
            <img src='account.png' id='accountimg' /><br/>
            <div id='accountdiv'>
                <input type='text' name='name' placeholder='Your name' id='accountinput' />
                <input type='text' name='nickname' placeholder='Your nickname' id='accountinput' />
            </div><br />
           <div id='accountspan'><button id='accountbutton'>Save</button></div>
        </div>;
    }; 
};

export default Account;