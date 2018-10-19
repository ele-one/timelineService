import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2';
import $ from 'jquery';
import _ from 'underscore';

export default class BarChartComponent extends Component {
   constructor(props) {
      super(props);
      this.caseActivitiesDataParser = this.caseActivitiesDataParser.bind(this)

      this.state ={
        createdIOCCountsForCases: {},
        updatedIOCCountsForCases: {},
        deletedIOCCountsForCases: {}
      }
  }


  caseActivitiesDataParser(data) {

    data = JSON.parse(data);
    var groupedData = _.groupBy(data, "caseName")

    var createdIOCCountsForCases = {};
    var updatedIOCCountsForCases = {};
    var deletedIOCCountsForCases = {};
    var onlyDiff;


    for (var caseName in groupedData) {

      var caseDiffs = groupedData[caseName]

      for (var i = 0; i < caseDiffs.length; i++) {

        onlyDiff = JSON.parse(caseDiffs[i]["diff"]);
        var diffOperationKey = Object.keys(onlyDiff)[0]

        if (diffOperationKey === "createdIOC") {
         if (createdIOCCountsForCases[caseName]) {
              createdIOCCountsForCases[caseName] += 1
          } else {
            createdIOCCountsForCases[caseName] = 1
          }
        }

        if (diffOperationKey === "modifiedIOC") {
         if (updatedIOCCountsForCases[caseName]) {
              updatedIOCCountsForCases[caseName] += 1
          } else {
            updatedIOCCountsForCases[caseName] = 1
          }
        }


        if (diffOperationKey === "deletedIOC") {
         if (deletedIOCCountsForCases[caseName]) {
              deletedIOCCountsForCases[caseName] += 1
          } else {
            deletedIOCCountsForCases[caseName] = 1
          }
        }
      }
    }

    this.setState({
      createdIOCCountsForCases: createdIOCCountsForCases,
      updatedIOCCountsForCases: updatedIOCCountsForCases,
      deletedIOCCountsForCases: updatedIOCCountsForCases
    })

  }


  componentDidMount() {

    $.ajax({
      url: '/getCaseActivities',
      method: 'GET',
      success: (data) => {
        // debugger;
        this.caseActivitiesDataParser(data);
      },

      error: (err) => {
        // debugger
        console.log(err);
      }
    });
  }


  render() {

    const options={
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }

     const data = {
      labels: Object.keys(this.state.createdIOCCountsForCases),
      datasets: [
        {
          label: 'Create',
          backgroundColor: 'rgba(13,255,178,0.2)',
          borderColor: 'rgba(13,255,178,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(13,255,178,0.4)',
          hoverBorderColor: 'rgba(13,255,178,1)',
          data: Object.values(this.state.createdIOCCountsForCases)
        },
        {
          label: 'Delete',
          backgroundColor: 'rgba(255,99,132,0.2)',
          borderColor: 'rgba(255,99,132,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(255,99,132,0.4)',
          hoverBorderColor: 'rgba(255,99,132,1)',
          data:  Object.values(this.state.deletedIOCCountsForCases)
        },

        {
          label: 'Update',
          backgroundColor: 'rgba(67,60,224,0.2)',
          borderColor: 'rgba(67,60,224,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(67,60,224,0.4)',
          hoverBorderColor: 'rgba(67,60,224,1)',
          data: Object.values(this.state.updatedIOCCountsForCases)
        },

      ]
    };

      return(
         <div>
            <Bar
              data={data}
              options={options}
              width={100}
              height={50} />
         </div>
      )
   }
}


