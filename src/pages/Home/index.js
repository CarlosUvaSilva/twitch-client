import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import InputField from '../../shared/components/InputField'
import CustomButton from '../../shared/components/CustomButton'
import StreamGrid from '../../shared/components/StreamGrid'
import StreamFrame from '../../shared/components/StreamFrame'

import {
  actions as twitchActions, selectors as twitchSelectors
} from '../../shared/store/reducers/twitch'


class Home extends Component {
  state={
    searchValue: null,
    streamSelected: null
  }

  componentDidMount() {
    this.fetchInitialData()
  }

  render () {
    const { streams, streamsLoading } = this.props
    const { streamSelected } = this.state

    return (
      <div className='home-page'>
        <div className='home-container'>
          <div className='search-container'>
            <InputField
              autoFocus
              className='input-field'
              type='text'
              valueContext={this}
              valueName='searchValue'
              placeholder='Search streams'
            />
            <CustomButton
              text='Search'
              type={"empty"}
              color={"black"}
              onClick={() => this.searchStream()}
            />
          </div>
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
    const { getStream } = this.props
    getStream()
  }

  searchStream = () => {
    const { searchValue } = this.state
    const { getStream } = this.props

    let query = ''
    if (searchValue !== null) {
      query = `?game=${searchValue}`
    }
    getStream(query)
  }

  selectStream = (stream) => {
    this.setState({ streamSelected: stream })
  }
}


const mapStateToProps = state => ({
  streams: twitchSelectors.getStreamList(state),
  streamsLoading: twitchSelectors.getStreamLoading(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getStream:  twitchActions.getStreams,
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
