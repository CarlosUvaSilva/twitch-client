import React, { Component } from 'react'
import PropTypes from 'prop-types'

import GridList from '../GridList'

export default class StreamGrid extends Component {
  static propTypes = {
    streams: PropTypes.array.isRequired
  }

  render() {
    const { streams, streamsloading } = this.props;

    return (
      <div className="stream-grid-component">
        <GridList
          loading={streamsloading}
          data={streams}
          columns={3}
          renderItem={this.renderStream}
          noDataMessage='No streams avaialble'
        />
      </div>
    );
  }

  renderStream = (stream, index) => (
    <div key ={index} className="stream-card" onClick={() => this.props.selectStream(stream)}>
      <div
        className="stream-image"
        style={stream.preview.medium ? { backgroundImage: `url('${stream.preview.medium}')` } : null }
      />
      <div className="stream-info">
        { stream.channel.display_name &&
          <h3 className="name caster">{stream.channel.display_name}</h3>
        }
        { stream.viewers &&
          <h3 className="name">Viewers: {stream.viewers}</h3>
        }
      </div>
    </div>
  )
}
