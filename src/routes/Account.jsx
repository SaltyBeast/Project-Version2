import React from 'react';
import { Primary as BlockPrimary } from '../components/Block/';
import { User as FormUser } from '../components/Form';
import { Avatar as InputAvatar } from '../components/Input';

// class Avatar extends React.Component {
//     render = () => {
//         return <div className='avatar_wrap'>
//             <img src='account.png' className='avatar_img' />;
//         </div>
//     }; 
// };

class Account extends React.Component {
    render = () => {
        return <>
            <BlockPrimary>
                <InputAvatar />
                <FormUser /> 
            </BlockPrimary>
        </>
    }; 
};

export default Account;