import React from 'react';
import propTypes from 'prop-types';
import { Radio } from 'antd';
import { connect } from 'react-redux';

@connect()
class Sort extends React.Component {
  static propTypes = {
    sort: propTypes.string.isRequired,
    handleSortChange: propTypes.func.isRequired,
  };

  render() {
    const { sort, handleSortChange } = this.props;
    return (
      <div className="sort">
        <span>Sort by: </span>
        <Radio.Group value={sort} onChange={e => handleSortChange(e)}>
          <Radio.Button value="latest">Latest</Radio.Button>
          <Radio.Button value="votes">Votes</Radio.Button>
          <Radio.Button value="oldest">Oldest</Radio.Button>
        </Radio.Group>
      </div>
    );
  }
}

export default Sort;
