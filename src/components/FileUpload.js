import React, { PropTypes }   from 'react';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import * as Actions       from '../actions/index';

class FileUpload extends React.Component {
  
  state = {
    files: []
  }

  handleChange = (files) => {
    this.setState({ files }); 
  }
  
  uploadFile = () => {

    if (this.state.files.length <= 0) return;

    this.props.actions.fileUpload(this.state.files);
  }

  activeClass = () => {
    return this.state.files.length <= 0 ? 'non-active' : 'active';
  }

  loading = () => {
    return this.props.files.loading ? 'loading' : null;
  }

  render() {
    return (
      <div className={`file-upload ${ this.loading() }`}>
        <label className="upload-lable">
          <input type="file" 
            onChange={ (e) => this.handleChange(e.target.files) }
            className="file-input"/>
          <i className="fas fa-cloud-upload-alt"></i>
          <div className="text">
            {
              (this.state.files[0]) ? 
                this.state.files[0].name 
                  : 'Choose a file to upload'
            }
          </div>
        </label>
        <button 
          type="button" 
          onClick={this.uploadFile}
          className={`upload-button ${ this.activeClass() }`}>
          Upload
        </button>
        <div className="loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
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

