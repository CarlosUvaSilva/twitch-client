import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import InputField from '../InputField'
import CustomButton from '../CustomButton'
import GridList from '../GridList'

class StreamGrid extends Component {
  static propTypes = {
    streams: PropTypes.array.isRequired
  }

  render() {
    const { streams, streamsloading } = this.props;

console.log("StreamGrid", {streams, streamsloading})
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
    <div key ={index} className="stream-card" onClick={() => this.props.selectStream(stream.channel)}>
      <div
        className="stream-image"
        style={stream.preview.medium ? { backgroundImage: `url('${stream.preview.medium}')` } : null }
      />
      <div className="stream-info">
        { stream.channel.display_name &&
          <h3 className="name">{stream.channel.display_name}</h3>
        }
      </div>
    </div>
  )
}


const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(StreamGrid)
