import React from 'react';

export function Action() {
    function clickHandle(e) {
        e.preventDefault();
        console.log('you just click');
    }
    return (
        <a href="#" onClick={clickHandle}>Click me to try</a>
    );
}   

export default class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        })
        );
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'On' : 'Off'}
            </button>
        );
    }
}
