import React from 'react';

function GreetAdmin() {
    return (
        <p>Welcome back!</p>
    )
}

function GreetGuest() {
    return (
        <p>Please Login.</p>
    )
}

function Greet(props) {
    if (props.isLoggedIn) {
        return <GreetAdmin />
    } else {
        return <GreetGuest />
    }
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // console.log('sss')
        this.setState(state => ({
            isLoggedIn: !state.isLoggedIn
        }))
    }
    loginBtn() {
        return (
            <button onClick={this.handleClick}>Log In</button>
        )
    }
    logoutBtn() {
        return (
            <button onClick={this.handleClick}>Log Out</button>
        )
    }
    render() {
        return (
            <React.Fragment>
                <Greet isLoggedIn={this.state.isLoggedIn} />
                {/* <button onClick={this.handleClick}>{this.state.isLoggedIn ? 'Log Out' : 'Log In'}</button> */}
                {this.state.isLoggedIn
                    ? this.logoutBtn()
                    : this.loginBtn()}
            </React.Fragment>
        )
    }
}

export default Login;