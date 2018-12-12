import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import StreamGrid from '../../shared/components/StreamGrid'
import StreamFrame from '../../shared/components/StreamFrame'
import SearchBar from '../../shared/components/SearchBar'

import {
  actions as twitchActions, selectors as twitchSelectors
} from '../../shared/store/reducers/twitch'

import {
  actions as settingsActions, selectors as settingsSelectors
} from '../../shared/store/reducers/settings'

class Home extends Component {
  static propTypes = {
    getStream: PropTypes.func.isRequired,
    setPerPage: PropTypes.func.isRequired,
    getPerPage: PropTypes.func.isRequired
  }

  state={
    streamSelected: null,
    perPage: 25
  }

  componentDidMount() {
    this.fetchInitialData()
  }

  render () {
    const { streams, streamsLoading, perPageCookie } = this.props
    const { streamSelected } = this.state
    return (
      <div className='home-page'>
        <div className='home-container'>
          <SearchBar
            filterStreams={this.searchStream}
            perPageCookie={perPageCookie}
          />
          { streamSelected &&
            <StreamFrame stream={streamSelected} />
          }
          { streams &&
            <StreamGrid
              streams={streams}
              streamsLoading={streamsLoading}
              selectStream={this.selectStream}
            />
          }
        </div>
      </div>
    )
  }

  fetchInitialData = () => {
    this.props.getPerPage()
    this.props.getStream()
  }

  searchStream = (searchValue, perPage) => {
    const { getStream, setPerPage } = this.props

    setPerPage(perPage)

    let query = ''
    if (searchValue !== null) {
      query = `game=${searchValue}`
    }
    getStream(query)
  }

  selectStream = (stream) => {
    this.setState({ streamSelected: stream })
  }
}


const mapStateToProps = state => ({
  perPageCookie: settingsSelectors.getPerPageSelector(state),
  streams: twitchSelectors.getStreamList(state),
  streamsLoading: twitchSelectors.getStreamLoading(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getStream:  twitchActions.getStreams,
  setPerPage: settingsActions.setPerPageCookie,
  getPerPage: settingsActions.getPerPageCookie
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
