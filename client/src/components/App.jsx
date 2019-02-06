// This is where most of your work will be done

import React, { Component } from 'react'
import MovieList from './MovieList.jsx';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      moviesToBeWatched: [],
      watchedMovies:[],
      toggledButton: 'To Watch'
      
    }
    this.handleAddMovies = this.handleAddMovies.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddMovies() {
    alert('hello')
  }

  handleSearch() {
    alert('handlewatch working')
  }

  render() {
    return (
      <div>
        <h1>Movie List</h1>
         <form>
           <label>Add Movie here</label>
           <input placeholder="Add Movie"></input>
           <button>Add Movie</button>
           <br/>
           <br/>
           <label>Search Movie</label>
           <input placeholder="Search movie here"></input>
           <button>Search Movie</button>
         </form>
         <br/>
         <MovieList />
         <button style={this.toggledButton = 'Watched Movies' ? {background:'green', color:'white'} : null} onClick={this.handleAddMovies}>Watched Movies</button>
         <button style={this.toggledButton = 'To Watch' ? {background:'green', color:'white'} : null} onClick={this.handleSearch}>To Watch</button>
      </div>
    )
  }
}

