import styled from 'styled-components';
import Input from './Input.jsx';

const Name = styled(Input)`
    border: 3px solid rgb(94, 94, 243);
    padding: 8px 5px 8px 15px;
    font-size: 1.4rem;
    margin-bottom: 20px;
    outline: transparent;
    transition: all .1s linear;
    &:hover {
        -webkit-box-shadow: -1px -1px 22px 0px rgb(104, 104, 104,);
        -moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0);
        box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0,75);
        border-color: yellow;
        };
    &:focus {
        -webkit-box-shadow: -1px -1px 22px 0px rgb(104, 104, 104,);
        -moz-box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0);
        box-shadow: -1px -1px 22px 0px rgba(104, 104, 104, 0,75);
        border-color: yellow;
        };
`;

export default Name;