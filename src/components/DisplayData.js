import React, { Component } from 'react';

export default class DisplayData extends Component {
    render() {
        return (
                <h3>{this.props.name}: {this.props.data}</h3>
        );
    }
}
