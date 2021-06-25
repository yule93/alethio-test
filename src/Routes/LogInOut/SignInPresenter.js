import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 90%;
    margin: auto;
    padding: 20px;
    margin-top: 100px;
    background-image: url(${props => props.bgUrl});
    background-size: cover;
    background-position: center center;
`;

const LogInContainer = styled.div`
    margin: 10px 0;
    position: relative;
`;

const Email = styled.input.attrs({
    type: `email`
})`
    width: 240px;
    font-size: 16px;
    border: 2px solid #ff9b80;
    display: block;
    margin: 0 auto;
    margin-bottom: 5px;
`;

const Password = styled.input.attrs({
    type:`password`
})`
    width: 240px;
    font-size: 16px;
    border: 2px solid #ff9b80;
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
`;

const LogInButton = styled.div`
    width: 150px;
    height: 30px;
    line-height: 25px;
    margin: 0 auto;
    margin-top: 20px;
    display: block;
    background-color: #ff9b80;
    font-size: 20px;
    text-align: center;

    &:hover {
        opacity: 0.7;
    }
`;

const Logo = styled.div`
    color: black;
    mix-blend-mode: difference;
    padding: 20px;
    font-size: 24px;
    display: block;
    postion: relative;
    margin: 0 auto;
    text-align: center;
`;

const SignInPresenter = ({ loading, error, token, email }) => (
    <Container>
        <LogInContainer>
            <Logo>ALETHIO</Logo>
            <Email placeholder = "email" />
            <Password />
            <LogInButton>Log in</LogInButton>
        </LogInContainer>
    </Container>
);

export default SignInPresenter;