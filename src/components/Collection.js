import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class Collection extends React.Component {

  componentWillMount = () => {
    this.props.actions.getFiles();
  }

  renderListPhotos = () => {
    return this.props.files.files.map((file) =>
      <div key={file._id} className="image-holder"
        onClick={e => {
            e.preventDefault();
            this.selectFile(file);
          }
        }>
        <img src={file.imagePath} />
      </div>
    );
  }

  selectFile(file, event) {
    this.props.actions.selectFile({ file });
  }
  
  render() {
    return (
      <div className="collection row">
        {this.renderListPhotos()}
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(Collection);

