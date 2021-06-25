import React from 'react';
import {userLoginApi, myPageApi} from "../../api";
import ServicePresenter from './ServicePresenter';

export default class Service extends React.Component {
    state = {
        isLoading: true,
        error: null,
        token: null,
        email: null
    };

    async componentDidMount() {
        setTimeout(() => {
            try{
                const {
                    data: { results: token }
                } = userLoginApi.userInfo();
            } catch {
                this.setState({
                    error: "예기치 못한 오류가 발생했습니다."
                });
            } finally {
                this.setState({ isLoading: false });
            }
        }, 2000);
    }

    render() {
        const { isLoading, error, email } = this.state;
        const { token } = this.state;
        return (
            <ServicePresenter
                isLoading = {isLoading}
                token = {token}
                email = {email}
                error = {error}
            />
        );
    }
}