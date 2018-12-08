import React, { Component } from 'react'
import PropTypes from "prop-types"

class Home extends Component {
  state={
    hasSubscribed: false,
  }

  render () {

    return (
      <div className="home-page">
        <div className="home-container">
          <h2>HOME</h2>
        </div>
      </div>
    )
  }

}

Home.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.object,
  location: PropTypes.object,
  match: PropTypes.object,
}

export default Home
