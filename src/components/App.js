import React, { PropTypes }   from 'react';

import * as Actions from '../actions/index';

import FileUpload from './FileUpload';

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <FileUpload></FileUpload>
      </div>
    );
  }
}

export default App;


