import React from 'react';
import styled from 'styled-components';
import Block from '../Block';
import Input from './Input.jsx';
import logo from '../img/avatar.png';

const Wrapper = styled(Block)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid rgb(94, 94, 243);
    object-fit: cover;
    margin: 0 30px 10px 0;
    background: #fff;
    transition: all .3s linear;
    
    &:hover,
    &:focus {
        -webkit-box-shadow: -1px -1px 22px 0px rgb(104, 104, 104, 0,75);
        -moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0,75);
        box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0,75);
        border-color: #E0CA00;
    };

    & input {
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    };

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%;
        background-image: url(${logo});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    };
}
`;

class Avatar extends React.Component {
    render = () => {
        return <Wrapper>
            <Input type='file' name='avatar' />
        </Wrapper>;
    };
};

export default Avatar;