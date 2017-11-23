import React, { Component } from 'react';


export default class FormsContainer extends Component {
    state = {
        login: true
    };

    setView = (e, login) => {
        e.preventDefault();
        this.props.setView(login);
        this.setState(() => ({ login }));
    };

    render() {
        return (
            <div>
                <ul className="nav nav-tabs mb-2">
                    <li className="nav-item">
                        <a 
                            href="#"
                            className={`nav-link${this.state.login ? 
                                ' active' : ''}`}
                            onClick={(e) => this.setView(e, true)}
                        >Login</a>
                    </li>
                    <li className="nav-item">
                        <a 
                            href="#"
                            className={`nav-link${!this.state.login ? 
                                ' active' : ''}`}
                            onClick={(e) => this.setView(e, false)}
                        >Register</a>
                    </li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}