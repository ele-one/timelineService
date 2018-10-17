import React from 'react';
const chart = require('chart.js');

class Chart1 extends React.Component {
  super(props)
  this.state {
    data: null
  }
}

componentDidMount() {
  $.ajax({
    url: '/getAllCases',
    method: 'GET',
    success: (data) => {
      debugger;
    },

    error: (err) => {
      debugger
    }
    });
  }


render () {
  return (<div> timeline render</div>)
}



export default Chart1;