import React from 'react';
import { Primary as BlockPrimary } from '../components/Block/';
import { Form as FormAccount } from '../components/Form';

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
                <FormAccount> 
                    
                </FormAccount> 
            </BlockPrimary>
        </>
    }; 
};

export default Account;