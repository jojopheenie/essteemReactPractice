import React from 'react'
import {Link} from 'react-router-dom'

export class welcome extends React.Component {
  render() {
    return (
      <div className="welcome">
        <h1 id="welcome-text">
          Welcome!
          </h1>
          <Link to ="/Contact">Contact Sign Up</Link>
          <Link to ="/Story">Submit Story</Link>
      </div>
    )
  }
}

export default welcome
