import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    justify-content: center;
    text-align: center;
    font-size: 20px;
    position: absolute;
    left: 0;
    right: 0;
    top:50%;
    margin:auto;
`;

const Email = styled.input.attrs({
    type: `email`
})`
    border: none;
`;

const SignInPresenter = ({ loading, error, token, email }) => (
    <Container>
        <Email  />
    </Container>
);

export default SignInPresenter;