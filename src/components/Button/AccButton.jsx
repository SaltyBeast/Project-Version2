import styled from 'styled-components';
import Button from './Button.jsx';

const AccButton = styled(Button)`
    color: #fff;
    border: 3px solid rgb(94, 94, 243);
    background-color: rgb(94, 94, 243);
    padding: 8px 5px 8px 15px;
    font-size: 1.4rem;
    margin-bottom: 20px;
    outline: transparent;
    transition: all .3s linear;
    &:hover {
        cursor: pointer;
        background-color: white; 
        color: black ;
        border-color: rgb(94, 94, 243);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19)a
    };
`;

export default AccButton;