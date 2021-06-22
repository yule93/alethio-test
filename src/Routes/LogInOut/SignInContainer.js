import React from 'react';
import ReactDOM from 'react-dom';
import { userLoginApi } from '../../api';
import ServicePresenter from './ServicePresenter';

export default class Service extends React.Component {
    state = {
        isLoading: true,
        userInfo: {},
        error: null
    };
    render() {
        const { isLoading, userInfo, error } = this.state;
        return (
            <ServicePresenter
                isLoading = {isLoading}
                userInfo = {userInfo}
                error = {error}
            />
        );
    }
}