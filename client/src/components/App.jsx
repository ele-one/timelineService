import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: []
    }
  }

  componentDidMount() {
    $.ajax({
      });
  }

  render () {

    return (<div>

    </div>)
  }
}

export default App