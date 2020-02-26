import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        return (
                <button onClick={this.props.handleClick} value={this.props.id}>{this.props.name}</button>
        );
    }
}
