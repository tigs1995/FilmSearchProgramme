import React, { Component } from 'react';
import Search from './Search';
import axios from "axios";
import DisplayData from './DisplayData';
import Button from './Button';
import Image from './Image';



export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };
    }

    componentDidMount(props) {
        axios.get(`http://www.omdbapi.com/?apikey=745060ae&i=${this.props.match.params.id}`)
        .then(response => {
            console.log(response.data);
            this.setState({
                data: response.data
            })
        })
    }

    render() {
        const stateDeclaration = this.state.data;
        return (
            <div class='movie'>
                <DisplayData class='title' name='Title' data={stateDeclaration.Title} ></DisplayData>
                <DisplayData name='Year' data={stateDeclaration.Year} ></DisplayData>
                <DisplayData name='Rated' data={stateDeclaration.Rated} ></DisplayData>
                <DisplayData name='Genre' data={stateDeclaration.Genre} ></DisplayData>
                <DisplayData name='Plot' data={stateDeclaration.Plot} ></DisplayData>
                <Image data={stateDeclaration.Poster}/>
            </div>

        );
    }
}
