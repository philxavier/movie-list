import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    let {movie, handleToggle} = this.props
    return (
      <div>
        <br/>
        {movie}
        <button onClick = {handleToggle}>watched</button>
      </div>
    )
  }
}
