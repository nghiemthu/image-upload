import React, { PropTypes }   from 'react';

import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';
import { connect }            from 'react-redux';

import FileUpload from './FileUpload';
import Collection from './Collection';

import Modal from 'react-modal';

class App extends React.Component {  
  render() {
    return (
      <div className="app">
        <div className="img-holder selected-img">
          <img src={this.props.files.selectedFile.imagePath} />
        </div>

        <div className="button-holder">
          <button 
            className="open-modal-button"
            onClick={this.props.actions.showModal}>Choose File</button>
        </div>  
        
        <Modal
          isOpen={this.props.files.showModal}
          ariaHideApp={false}
        >
          <FileUpload></FileUpload>
          <Collection></Collection>
        </Modal>
      </div>
    );
  }
}

export default connect(
  // map state to props
  (state) => ({ ...state }),
  // map dispatch to props,
  (dispatch) => ({ actions: bindActionCreators(Actions, dispatch) })
)(App);

