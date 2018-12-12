import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const GridList = ({ loading, data, columns, renderItem, noDataMessage, strings }) => (
  <div className="grid-list-component">
    { loading ?
      <div className="grid-list-loading">
        <h2>Loading</h2>
      </div>
      :
      data.length > 0 ?
        <div className="grid-list-content">
          <div className={`${columnClass(columns)} collapser`}>
            { data.map((item, index) => (
              renderItem(item, index)
            ))}
          </div>
        </div>
        :
        <div className="no-data">
          <p>{noDataMessage}</p>
        </div>
    }
  </div>
);

const columnClass = (columns) => {
  switch(columns) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    default:
      return 'two';
  }
};

GridList.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.array,
  columns: PropTypes.number,
  renderItem: PropTypes.func,
  hasMore: PropTypes.bool,
  fetchMore: PropTypes.func,
  loadingMore: PropTypes.bool,
  renderNoData: PropTypes.func,
};

const mapStateToProps = (state, props) => ({
})

export default connect(
  mapStateToProps,
)(GridList);
