import styled from 'styled-components';
import Input from './input.jsx';
import React from 'react';
import Block from '../Block';
import img from './male.png';

const Wrapper = styled(Block)`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid rgb(94, 94, 243);
    object-fit: cover;
    margin: 0 30px 10px 0;
    background: #fff;

    &:before {
        content: '';
        display: block;
        width: 100%;
        height: 100%; 
        background-image: url(${img});
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;

    }

    & input {
        display: block;
        width: 100%;
        height: 100%;
        cursor: pointer;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
    }
`;

class Avatar extends React.Component {
    render = () => {
        return <Wrapper>
            <Input type='file' name='avatar'/>
            </Wrapper>
    };
};

export default Avatar;