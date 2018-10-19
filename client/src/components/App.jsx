import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CaseActivities from './CaseActivities.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }


  render () {

    return (<div>
      <CaseActivities id="chart1" />
    </div>)
  }
}

export default App