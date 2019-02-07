// This is where most of your work will be done

import React, { Component } from 'react'
import MovieList from './MovieList.jsx';
import DecideFound from '../../../helpers/Decide Found.js'
import helpers from '../../../helpers/helpers.js'

export default class App extends Component {

  constructor(props) {
    super(props)

    //references
    this.addMovieRef = React.createRef();
    this.searchMovieRef = React.createRef();

    //properties
    this.moviesToBeWatched = [];
    this.watchedMovies = [];

    //state
    this.state = {
      moviesToBeWatched: [],
      watchedMovies:[],
      toggledButton: true,
      found: null
    }

    //functions
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAddMovies(e) {
    e.preventDefault();
    let { value } = this.addMovieRef.current;
    this.addMovieRef.current.value = '';
    if (value) {
      debugger;
      this.moviesToBeWatched.push(value);
      this.setState({
        moviesToBeWatched: this.moviesToBeWatched,
        found: null
      })
    }         
  }

  handleSearch(e) {

    e.preventDefault();
    var searchArray = this.moviesToBeWatched.concat(this.watchedMovies);
    let { value } = this.searchMovieRef.current;
    this.searchMovieRef.current.value = '';
    var foundMovies = helpers.searchHelper(searchArray, value)
    this.setState({
      found:foundMovies
    })   
  }

  handleChangeColor() {
    this.setState({
      toggledButton:!this.state.toggledButton
    })
  }

  handleChange(event) {
    this.setState({fieldValue: event.target.value});
  }

  handleToggle(movie) {
    helpers.transferMovieFromArrays(this.moviesToBeWatched, this.watchedMovies, movie); 
    this.setState({
      moviesToBeWatched: this.moviesToBeWatched,
      watchedMovies: this.watchedMovies,
    })
  }

  handleMovieInfo() {
    helpers.getInfoOnline()
  }

  render() {
  
    let { toggledButton, moviesToBeWatched, watchedMovies, found} = this.state;

    return (
      <div>
        <h1>Movie List</h1>
         <form>
           <label>Add Movie here</label>
           <input  ref={this.addMovieRef} placeholder="Add Movie"></input>
           <button onClick={(e) => { this.handleAddMovies(e) }}>Add Movie</button>
           <br/>
           <br/>
           <label>Search Movie</label>
           <input ref={this.searchMovieRef} placeholder="Search movie here"></input>
           <button onClick = {(e) => { this.handleSearch(e) }}>Search Movie</button>
         </form>
         <br/>
         <button style={!toggledButton ? {background:'green', color:'white'} : null} onClick={this.handleChangeColor}>Watched Movies</button>
         <button style={toggledButton ? {background:'green', color:'white'} : null} onClick={this.handleChangeColor}>To Watch</button>
         <MovieList handleToggle={this.handleToggle} movies = {toggledButton ? moviesToBeWatched : watchedMovies } handleMovieInfo = {this.handleMovieInfo}/> 
         {DecideFound(found)}        
      </div>
    )
  }
}

