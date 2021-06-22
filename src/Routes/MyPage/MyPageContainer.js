import React from 'react';
import { myPageApi } from '../../api';
import MyPagePresenter from './MyPagePresenter';

export default class MyPage extends React.Component {
    state = {
        isLoading: true,
        userInfo: {},
        error: null
    };

    async componentDidMount() {
        try {
            setTimeout(function() {
                console.log("Loaded!");
            }, 2000);
            const {
                data: {results: userInfo}
            } = await myPageApi.userName();
            this.setState({ userInfo });
        } catch {
            this.setState({
                error: "It Doesnt work. :("
            });
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { isLoading, userInfo, error } = this.state;
        return (
            <MyPagePresenter
                isLoading = {isLoading}
                userInfo = {userInfo}
                error = {error}
            />
        );
    }
}
