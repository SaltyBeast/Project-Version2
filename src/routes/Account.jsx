import React from 'react';
import { Primary as BlockPrimary } from '../components/Block/';
import { User as FormUser } from '../components/Form';
import { Email as AccEmail, Name as AccName } from '../components/Input';
import { AccButton } from '../components/Button';
import { AccImg as InputAvatar, LogoContainer } from '../components/img';

// class Avatar extends React.Component {
//     render = () => {
//         return <div className='avatar_wrap'>
//             <img src='account.png' className='avatar_img' />;
//         </div>
//     }; 
// };

// class Form extends React.Component {
//     render = () => {
//         return <div className='form_wrap'>
//             <input className='form_input' type='name' placeholder='Your name' />
//             <input className='form_input' type='nickname' placeholder='Your nickname' />
//             <button className='accountbutton' type='buttion'>Save</button>
//         </div>
//     }; 
// };

class Account extends React.Component {
    render = () => {
        return <>
            <BlockPrimary>
                {/* <Avatar /> */}
                <LogoContainer><InputAvatar src='account.png' /></LogoContainer>
                <FormUser> 
                    <AccEmail placeholder='Your email' />
                    <AccName placeholder='Your name' />
                    <AccButton>Save</AccButton>
                </FormUser> 
            </BlockPrimary>
        </>
    }; 
};

export default Account;