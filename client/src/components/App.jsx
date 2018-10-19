import React from 'react';
import ReactDOM from 'react-dom';

import CaseTimeline from './CaseTimeline.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }


  render () {
    return (<div>
      <CaseTimeline />
    </div>)
  }
}

export default App