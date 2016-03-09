import React, { Component } from 'react'

import ReactEcharts from '../src/index'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      height: 400
    }
    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick() {
    this.setState({
      height: 500
    });
  }

  render() {
    const option = {
      title: { text: 'ECharts example' },
      tooltip: {},
      xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }

    return (
      <div>
        <button onClick={this._handleClick}>Change height</button>
        <ReactEcharts
          height={this.state.height}
          option={option}
          onReady={o => console.log(o)} />
      </div>
    )
  }
}
