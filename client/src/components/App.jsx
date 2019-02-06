// This is where most of your work will be done

import React, { Component } from 'react'
import MovieList from './MovieList.jsx';

export default class App extends Component {

  constructor(props) {
    super(props)

    //references
    this.addMovieRef = React.createRef();

    //properties
    this.moviesToBeWatched = [];
    this.moviesWatched = [];

    //state
    this.state = {
      moviesToBeWatched: [],
      watchedMovies:[],
      toggledButton: true,
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
    this.moviesToBeWatched.push(value);
    this.setState({
      moviesToBeWatched: this.moviesToBeWatched,
    })    
    this.addMovieRef.current.value = '';
  }

  handleSearch() {
    alert('handlewatch working')
  }

  handleChangeColor() {
    this.setState({
      toggledButton:!this.state.toggledButton
    })
  }

  handleChange(event) {
    this.setState({fieldValue: event.target.value});
  }

  handleToggle() {

  }

  render() {
    let { toggledButton, moviesToBeWatched, watchedMovies, handleToggle} = this.state;
    console.log(moviesToBeWatched)
    return (
      <div>
        <h1>Movie List</h1>
         <form>
           <label>Add Movie here</label>
           <input  ref={this.addMovieRef} placeholder="Add Movie"></input>
           <button onClick={(e) => {this.handleAddMovies(e)}}>Add Movie</button>
           <br/>
           <br/>
           <label>Search Movie</label>
           <input ref={this.searchMovieRef} placeholder="Search movie here"></input>
           <button>Search Movie</button>
         </form>
         <br/>
         <button style={!this.state.toggledButton ? {background:'green', color:'white'} : null} onClick={this.handleChangeColor}>Watched Movies</button>
         <button style={this.state.toggledButton ? {background:'green', color:'white'} : null} onClick={this.handleChangeColor}>To Watch</button>
         <MovieList handleToggle={handleToggle} movies = {toggledButton ? moviesToBeWatched : watchedMovies } /> 
      </div>
    )
  }
}

