import React from "react";
import Chart from "react-apexcharts";

//Chart to show poke stats

class RadarChart extends React.Component {

  render() {
    const state = {
      series: [{
        name: 'Points',
        data: [50, 50, 50, 50, 50, 50]
      }],
      options: {

        plotOptions: {
          radar: {
            polygons: {
              strokeColors: '#ffffff',
            }
          }
        },
        tooltip:{
          enabled: true,
          style:{
            fontSize: '16px',
            fontFamily:'droid'
          },
          x:{show:false},
          marker:{show:false},

        },
        markers: {
          size: 3,
          colors:'#ffffff',
          showNullDataPoints: true,
          hover: {
            size: 5
          }
        },
        chart: {
          toolbar: {
            show: false,
          },
          id: "basic-bar"
        },
        yaxis: {
          show: false,
          tickAmount: 4,
          min: 0,
          max: 200,
          labels:{
            show:false,
            style:{
              colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'],
              fontSize: "14px",
              fontFamily: 'Droid'}},
        },
        xaxis: {
          categories: ['HP', 'Attack', 'Defense', 'Sp. Atk', 'Sp. Def.', 'Speed'],
          labels:{
            show:true,
            style:{
              colors:['#ffffff','#ffffff','#ffffff','#ffffff','#ffffff','#ffffff'],
              fontSize: "16px",
              fontFamily: 'Droid'}},

        },
        stroke: {
          show: true,
          width: 2,
          colors: '#ffffff',
          dashArray: 0
        },
        fill:{
          opacity: 1,
          type:'solid',
          colors: '#ffffff'
        },
        responsive: [{
          breakpoint: undefined,
          options: {},
      }]
      },
    };
    state.series[0].data = this.props.pokemoneStats
    return (
      <Chart options = {
        state.options
      }
      series = {
        state.series
      }
      type = "radar"
      width = "100%"
      height = "100%"
      /
      >
    );
  }
}

export default RadarChart;