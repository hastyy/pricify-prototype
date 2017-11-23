import axios from 'axios';

import BASE_URL from '../config';


export const SET_USER = 'SET_USER';

const setUser = (user) => ({
    type: SET_USER,
    user
});

/*export const login = (username, password, ...funcs) => (dispatch) => {
    axios.get(`${BASE_URL}/users?username=${username}`)
        .then(response => )
};*/

export const login = (username, password, ...funcs) => {
    const [
        setValidating,
        setUsernameError,
        setPasswordError
    ] = funcs;

    // Starts fetch and validation
    setValidating();

    return (dispatch) => {
        axios.get(`${BASE_URL}/users?username=${username}`)
            .then(res => {
                if (res.data.length === 0) {
                    // Stops fetch and validation
                    setValidating();

                    const err = new Error();
                    err.type = 'username';
                    throw err;
                }

                const user = res.data[0];
                return user;
            })
            .then(user => {
                if (user.password !== password) {
                    // Stops fetch and validation
                    setValidating();

                    const err = new Error();
                    err.type = 'password';
                    throw err;
                }

                // User found and password correct,
                // dispatch action with user as payload to start a session.
                dispatch(setUser(user));
            })
            .catch(err => {
                switch (err.type) {
                    case 'username':
                        setUsernameError();
                        break;
                    case 'password':
                        setPasswordError();
                        break;
                    default:
                        // Ignore
                }
            });
    };
};

export const register = (username, password, passwordConfirmation, ...funcs) => {
    const [
        setValidating,
        setUsernameError,
        setPasswordError
    ] = funcs;

    // Starts fetch and validation
    setValidating();

    return (dispatch) => {
        axios.get(`${BASE_URL}/users?username=${username}`)
            .then(res => {
                if (res.data.length !== 0) {
                    // Stops fetch and validation
                    setValidating();

                    const err = new Error();
                    err.type = 'username';
                    throw err;
                } else if (password !== passwordConfirmation) {
                    // Stops fetch and validation
                    setValidating();
                    
                    const err = new Error();
                    err.type = 'password';
                    throw err;
                } else {
                    // All good, register user
                    return axios.post(`${BASE_URL}/users`, {
                        username,
                        password
                    });
                }
            })
            .then(res => {
                const user = res.data;

                // User registered successfully,
                // dispatch action with user as payload to start a session.
                dispatch(setUser(user));
            })
            .catch(err => {
                switch (err.type) {
                    case 'username':
                        setUsernameError();
                        break;
                    case 'password':
                        setPasswordError();
                        break;
                    default:
                        // Ignore
                }
            });
    };
};
