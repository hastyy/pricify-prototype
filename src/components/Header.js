import React from 'react';
import { connect } from "react-redux";


const Header = (props) => {
    if (!props.user)
        return <noscript />;
    
    return (
        <header>
            Header Component
        </header>
    );
};

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(Header);