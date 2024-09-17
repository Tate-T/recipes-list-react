import styled from 'styled-components';

export const Button = styled.button`
    background: ${props => props.bg ? "green" : "red"};
`