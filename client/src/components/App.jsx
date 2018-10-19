import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import CaseActivities from './CaseActivities.jsx'
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
      <p> Case Activities</p>
      <CaseActivities id="chart1" />
      <p> Case Timeline </p>
      <CaseTimeline />
    </div>)
  }
}

export default App