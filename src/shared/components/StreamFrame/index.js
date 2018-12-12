import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StreamFrame extends Component {
  static propTypes = {
    stream: PropTypes.object.isRequired
  }

  render() {
    const { stream } = this.props
    const streamUrl = this.streamUrl(stream.channel.name)

    return (
      <div className="streams-section">
        <iframe
          title={stream.channel.status}
          src={streamUrl}
          scrolling="no"
          allowFullScreen="true">
        </iframe>
        <div className="stream-info">
          <h2>{stream.channel.description}</h2>

          <div className="general-info">
            <h3>{stream.channel.display_name}</h3>
            <div
              className="stream-image"
              style={stream.channel.logo ? { backgroundImage: `url('${stream.channel.logo}')` } : null }
            />
            <h3 className="viewers">Viewers: {stream.viewers}</h3>
          </div>

          <h2>{stream.channel.status}</h2>
        </div>
      </div>
    )
  }

  streamUrl = (caster) => {
    return `https://player.twitch.tv/?autoplay=true&channel=${caster}`
  }
}
