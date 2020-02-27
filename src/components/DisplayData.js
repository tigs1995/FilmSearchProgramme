import React, { Component } from 'react';

export default class DisplayData extends Component {
    render() {
        return (
            <div id='displaydata'>
                <p id='name'>{this.props.name}: </p>
                <p id='data'>{this.props.data}</p>
            </div>

        );
    }
}
