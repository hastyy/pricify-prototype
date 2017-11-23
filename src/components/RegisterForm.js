import React, { Component } from 'react';
import { connect } from "react-redux";

import { register } from '../actions/user';


class RegisterForm extends Component {
    state = {
        username: '',
        password: '',
        passwordConfirm: '',
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
        this.setState(() => ({ username }));
    };

    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }));
    };

    onPasswordConfirmChange = (e) => {
        const passwordConfirm = e.target.value;
        this.setState(() => ({ passwordConfirm }));
    };

    onSubmit = (e) => {
        e.preventDefault();

        // TODO
        console.log('Registering...', this.state);
        this.clearErrors();
        this.props.register(
            this.state.username,
            this.state.password,
            this.state.passwordConfirm,
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
                        Username already in use!
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
                        Passwords do nott match!
                    </small>}
                </div>
                <div className="form-group">
                    <label htmlFor="password-confirm">Password Confirmation:</label>
                    <input 
                        type="password"
                        id="password-confirm"
                        className="form-control"
                        placeholder="Password Confirmation"
                        value={this.state.passwordConfirm}
                        onChange={this.onPasswordConfirmChange}
                    />
                    {this.state.passwordError &&
                    <small className="text-danger">
                        Passwords do not match!
                    </small>}
                </div>
                <button 
                    type="submit"
                    className="btn btn-secondary"
                    disabled={this.state.validating}
                >
                    Register
                </button>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    register: (username, password, passwordConfirm, ...funcs) => {
        dispatch(register(username, password, passwordConfirm, ...funcs));
    }
});


export default connect(null, mapDispatchToProps)(RegisterForm);