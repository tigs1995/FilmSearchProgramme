import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
                <input onChange={this.props.handleChange} type={this.props.type || 'text'} 
                placeholder={this.props.place || this.props.name || ''} 
                name={this.props.name || ''} />
        );
    }
}
