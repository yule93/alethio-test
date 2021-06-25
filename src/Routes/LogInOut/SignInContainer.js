import React from 'react';
import ReactDOM from 'react-dom';
import { userLoginApi } from '../../api';
import SignInPresenter from './SignInPresenter';

export default class Service extends React.Component {
    state = {
        isLoading: true,
        error: null
    };
    render() {
        const { isLoading, error } = this.state;
        const { token, email } = {}; //userLoginApi.userInfo();
        return (
            <SignInPresenter
                isLoading = {isLoading}
                error = {error}
                token = {token}
                email = {email}
            />
        );
    }
}