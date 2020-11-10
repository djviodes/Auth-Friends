import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='username'
                        value={this.state.credentials.username}
                    />
                    <input 
                        type='password'
                        name='password'
                        value={this.state.credentials.password}
                    />
                    <button>Log In</button>
                </form>
            </div>
        );
    }
}

export default Login;