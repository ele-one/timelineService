import React from 'react';
import $ from 'jquery';
var Chart = require('react-google-charts').Chart;


class CaseTimeline extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/getAllCasesWithTimeStamps',
      method: 'GET',
      success: (data) => {
        debugger
        this.setState({
          data: JSON.parse(data)
        })
      },

      error: (err) => {
        debugger
      }
      });
    }


  render() {

     var chartData = [];
     var formatedData = []



     if (this.state.data && this.state.data.length > 0) {

        this.state.data.forEach((elem) => {
          // change dates to date format
          formatedData.push([elem[0], new Date(elem[1]), new Date(elem[2])])
        })

        chartData.push (
          [
            { type: 'string', id: 'casenames' },
            { type: 'date', id: 'Start' },
            { type: 'date', id: 'End' },
          ]
        )


        formatedData.forEach((subArr) => {
          chartData.push(subArr)
        })

      debugger
      return  (
        <Chart
          width={'500px'}
          height={'300px'}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          data={chartData}
          options={{
            showRowNumber: true,
          }}
          rootProps={{ 'data-testid': '1' }}
        />
      )

     } else {
      return <h3> No data found to load this chart</h3>
     }

  }

}

export default CaseTimeline ;

