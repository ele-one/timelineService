import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Chart1 from './Chart1.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     });
  // }

  render () {

    return (<div>
      <Chart1 />
    </div>)
  }
}

export default App