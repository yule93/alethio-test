import React from 'react';
import {userLoginApi, myPageApi} from "../../api";
import SignUpPresenter from './SignUpPresenter';

export default class SignUpContainer extends React.Component {
    render() {
        return (
            <SignUpPresenter/>
        );
    }
}