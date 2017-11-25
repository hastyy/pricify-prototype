import React from 'react';
import { connect } from "react-redux";


const Footer = (props) => {
    if (!props.user) return <noscript />;

    return (
        <footer>
            <div className="container">
                <div className="row justify-content-between align-items-end">
                    <p>
                        <a href="https://pricify.wixsite.com/pricify">
                            A Equipa
                        </a>
                    </p>
                    <p>© Cadeira IPM FCT UNL 2017</p>
                </div>
            </div>
        </footer>
    );
}

const mapStateToProps = store => ({
    user: store.user
});


export default connect(mapStateToProps)(Footer);