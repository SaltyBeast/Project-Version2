import styled from 'styled-components';
import React from 'react';
import { 
    Email as InputEmail, 
    Name as InputName 
} from '../Input';
import { Save as ButtonSave } from '../Button';
import Form from './Form.jsx';

const Wrapper = styled(Form)`
    flex-direction: column;
    width: 480px;
`;

class User extends React.Component {
    render = () => {
        return <Wrapper>
            <InputName />
            <InputEmail />
            <ButtonSave />
        </Wrapper>;
    };
};

export default User;