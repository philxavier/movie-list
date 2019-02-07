import React, { Component } from 'react'
import Movie from './Movie.jsx'

export default class MovieList extends Component {

  render() {
    let { movies, handleToggle} = this.props;
    return (
      <div>
        {movies.map((ele, ind) => {
          return <Movie key = {ind} movie = {ele} handleToggle = {handleToggle} />
        })}
      </div>
    )
  }
}
