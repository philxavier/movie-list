import React, { Component } from 'react'
import Details from './Details.jsx';

export default class Movie extends Component {

  render() {
    let {movie, handleToggle, handleMovieInfo} = this.props

    return (
      <div onClick = {handleMovieInfo} >
        {movie}
        <button name = {movie} onClick = {() =>{handleToggle(movie)}}>watched</button>
        {/* //<Details /> */}
      </div>
    )
  }
}
