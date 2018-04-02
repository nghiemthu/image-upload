import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class FileUpload extends React.Component {
  
  state = {
    file: ''
  }

  handleChange(files) {
    this.file = files[0];
    
  }
  
  uploadFile() {
    console.log(this.file);
    this.props.actions.fileUpload(this.files);
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
        onClick={this.uploadFile}
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

