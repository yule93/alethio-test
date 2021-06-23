import React from 'react';
import userLoginApi from "../../api";
import ServicePresenter from './ServicePresenter';

export default class Service extends React.Component {
    state = {
        isLoading: true,
        error: null,
        token: null,
        email: null
    };

    async componentDidMount() {
        try{
            setTimeout(this.setState({ isLoading: false, token: "123456789"}), 2000);
            /*const {
                data: { results: token }
            } = await userLoginApi.userInfo();*/
        } catch {
            this.setState({
                error: "예기치 못한 오류가 발생했습니다."
            });
        } finally {
            this.setState({ isLoading: false });
        }
    }

    render() {
        const { isLoading, error } = this.state;
        const { token, email } = {} //= userLoginApi.userInfo();
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