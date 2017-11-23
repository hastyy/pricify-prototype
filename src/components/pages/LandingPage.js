import React, { Component } from 'react';
import { connect } from "react-redux";

import LoginForm from '../LoginForm';
import RegisterForm from '../RegisterForm';
import FormsContainer from '../FormsContainer';


class LandingPage extends Component {
    state = {
        showLogin: true
    };

    setView = (showLogin) => {
        this.setState(() => ({ showLogin }));
    };

    render() {
        return (
            <div className="page d-flex justify-content-center align-items-center">
                <div className="col-sm-4">
                    <img 
                        src="img/logo.png"
                        className="page__logo rounded mx-auto mb-3 d-block"
                    />
                    <FormsContainer setView={this.setView}>
                        {this.state.showLogin ?
                        <LoginForm /> : <RegisterForm />}
                    </FormsContainer>
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(LandingPage);