import React from 'react';
import { connect } from "react-redux";


const Footer = (props) => {
    //if (!props.user) return <noscript />;

    return (
        <footer>
            Footer Component - Some static stuff in here
        </footer>
    );
}

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(Footer);