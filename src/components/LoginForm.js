import React, { Component } from 'react';
import { connect } from "react-redux";

import { login } from '../actions/user';


class LoginForm extends Component {
    state = {
        username: '',
        password: '',
        validating: false,
        usernameError: false,
        passwordError: false
    };

    setValidating = () => {
        this.setState(prevState => ({
            validating: !prevState.validating
        }));
    };

    setUsernameError = () => {
        this.setState(() => ({ usernameError: true }));
    };

    setPasswordError = () => {
        this.setState(() => ({ passwordError: true }));
    };

    clearErrors = () => {
        this.setState(() => ({
            usernameError: false,
            passwordError: false
        }));
    };

    onUsernameChange = (e) => {
        const username = e.target.value;
        this.setState(() => ({ username }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        this.clearErrors();
        this.props.login(
            this.state.username,
            this.state.password,
            this.setValidating,
            this.setUsernameError,
            this.setPasswordError
        );
    };

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text"
                        id="username"
                        className="form-control"
                        placeholder="Username"
                        value={this.state.username}
                        onChange={this.onUsernameChange}
                    />
                    {this.state.usernameError &&
                    <small className="text-danger">
                        That username does not exist!
                    </small>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                    />
                    {this.state.passwordError &&
                    <small className="text-danger">
                        Password is incorrect!
                    </small>}
                </div>
                <button 
                    type="submit"
                    className="btn btn-secondary"
                    disabled={this.state.validating}
                >
                    Login
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (username, password, ...funcs) => {
        dispatch(login(username, password, ...funcs));
    }
});


export default connect(null, mapDispatchToProps)(LoginForm);