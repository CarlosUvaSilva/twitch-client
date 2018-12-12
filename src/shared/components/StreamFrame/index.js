import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class StreamFrame extends Component {
  static propTypes = {
    stream: PropTypes.object.isRequired
  }

  render() {
    const { stream } = this.props

    const streamUrl = this.streamUrl(stream.name)

    return (
      <div className="streams-section">
        <iframe
          title={stream.status}
          src={streamUrl}
          scrolling="no"
          allowFullScreen="true">
        </iframe>
      </div>
    )
  }

  streamUrl = (caster) => {
    return `https://player.twitch.tv/?autoplay=true&channel=${caster}`
  }
}
