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
        background-image: url(${(props) => props.src});
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
    state = {
            src: img
        };

    onChange = (e) => {
        const filereader = new FileReader();
        filereader.readAsDataURL(e.currentTarget.files[0]);
        filereader.onload = () => {
            let newFile = filereader.result;
            this.setState({src: newFile});
        };
    };

    render = () => {
        return <Wrapper src={this.state.src}>
            <Input type='file' name='avatar' onChange={this.onChange} />
            </Wrapper>
    };
};

export default Avatar;
