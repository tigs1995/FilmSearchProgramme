import React, { Component } from 'react';
import FilmDetails from './components/FilmDetails';
import MoviesSearch from './components/MoviesSearch';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render(){
    return (
      <Router>
        <Route exact path='/' component={MoviesSearch} />
        <Route path='/FilmDetails/:id' component={FilmDetails}/>
        <Link to='/'>Home</Link>
      </Router>
  );
}
}

export default App;
