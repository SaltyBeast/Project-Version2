import styled from 'styled-components';
import React from 'react';
import Button from './Button.jsx';

const Wrapper = styled(Button)`
    color: #fff;
    border: 3px solid rgb(94, 94, 243);
    background-color: rgb(94, 94, 243);
    padding: 8px 5px 8px 15px;
    font-size: 1.4rem;
    margin-bottom: 20px;
    outline: transparent;
    transition: all .3s linear;
    
    &:hover {
        background-color: white; 
        color: black ;
        border-color: #E0CA00;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)a
    };
`;

class Save extends React.Component {
    render = () => {
        return <Wrapper>
            Save
        </Wrapper>;
    };
};

export default Save;