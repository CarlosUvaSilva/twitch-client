import React, { Component } from 'react'
import PropTypes from 'prop-types'

import InputField from '../InputField'
import CustomButton from '../CustomButton'

export default class SearchBar extends Component {
  static propTypes = {
    filterStreams: PropTypes.func.isRequired,
    perPageCookie: PropTypes.string
  }

  state = {
    searchValue: null,
    perPage: this.props.perPageCookie || 25
  }

  render() {
    const { perPageCookie } = this.props

    return (
      <div className='search-container'>
        <InputField
          autoFocus
          className='input-field'
          type='text'
          valueContext={this}
          valueName='searchValue'
          placeholder='Search streams'
        />
        <div className="button-container">
          <CustomButton
            text='Search'
            type={"empty"}
            color={"black"}
            onClick={() => this.searchStream()}
          />
        </div>

        <div className="paginate-container">
          <h3>Number of results per page</h3>
          <InputField
            autoFocus
            className='page-input'
            type='number'
            valueContext={this}
            valueName='perPage'
            placeholder={perPageCookie || 25}
          />
        </div>
      </div>
    )
  }

  searchStream = () => {
    const { searchValue, perPage } = this.state
    const { filterStreams } = this.props

    filterStreams(searchValue, perPage)
  }
}
