import React from 'react';
import styled from 'styled-components';
import Form from './form.jsx';
import { Name as InputName,
         Email as InputEmail } from '../Input';
import { Save as ButtonSave } from '../Button';

const Wrapper = styled(Form)`
    flex-direction: column;
    width: 480;
    `;

class User extends React.Component {
    render =() => {
        return <Wrapper>
            <InputName />
            <InputEmail />
            <ButtonSave />
        </Wrapper>
    };
};

export default User;
