import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class FileUpload extends React.Component {

  handleChange(files) {
    console.log(files);
  }

  render() {
    return (
      <div>
        FileUpload
        <div className="form-group">
          <input id="file" 
            type="file" 
            onChange={ (e) => this.handleChange(e.target.files) }
            className="form-control"/>
        </div>
      <button 
        type="button" 
        className="btn btn-primary">
        Upload
      </button>
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(FileUpload);

