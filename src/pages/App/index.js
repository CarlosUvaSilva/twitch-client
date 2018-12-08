import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Routes from 'shared/routes'

import './styles.scss'

class App extends Component {
  state = {
    appLoaded: false,
  }

  componentWillMount() {
    setTimeout(() => this.loadBasicData(), 0)
  }

  render () {
    const { appLoaded } = this.state

    return (
      <BrowserRouter>
        <div className="app-page">
          { appLoaded ?
            <Routes />
            :
            <div className="app-page-loading-container">
              <h1>Loading</h1>
            </div>
          }
        </div>
      </BrowserRouter>
    )
  }

  loadBasicData = () => {
    Promise.all([
      this.minimumLoadingTime(),
    ]).then(() => this.setState({ appLoaded: true }))
  }

  minimumLoadingTime = () => (
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })
  )
}

const mapStateToProps = (state, props) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
