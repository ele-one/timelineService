import React from 'react';
const chart = require('chart.js');

const CompName = (props) => (
  <div>
    <h4> Services </h4>
    Total number of services:  { props.services.length }
    { props.services.map((service, idx) => <ListServiceItems key={idx} service={service}/>)}
  </div>
)





export default CompName;