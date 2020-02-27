import React, { Component } from 'react';
import Search from './Search';
import axios from "axios";
import Button from './Button';
import { Card } from 'react-bootstrap';


export default class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            ID: "",
            data: []
        };
    }

    handleClick = () => {
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=745060ae&s=${this.state.title}`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    data: response.data.Search
                })
            })
    }

    handleMovieClick = (e) => {
        e.preventDefault();
        this.props.history.push(`/FilmDetails/${e.target.value}`)
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value })
    }

    render() {
        return (
            <div>
                <Search handleChange={this.handleChange} />
                <Button class='searchButton' name='Search' handleClick={this.handleClick}></Button>
                <div id='movies'>
                    {this.state.data.map(film =>
                        <Card border="dark" class='movie'>
                            <Card.Img src={film.Poster} />
                            <Card.Body>
                                <Card.Title>{film.Title}</Card.Title>
                                <Button class='detailsButton' id={film.imdbID} name='Details' handleClick={this.handleMovieClick}></Button>
                            </Card.Body>
                        </Card>
                    )}</div>
            </div>
        );
    }
}
