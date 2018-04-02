import React, { PropTypes }   from 'react';

import * as Actions from '../actions/index';

import ResultList from './ResultList';

class App extends React.Component {  
  render() {
    return (
      <div className="App">
        <ResultList></ResultList>
      </div>
    );
  }
}

export default App;


