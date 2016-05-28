# React Echarts Component

Echarts component for React

For details about how to use echarts. Please refer to [http://echarts.baidu.com/](http://echarts.baidu.com/)

Types of charts supported/examples: [http://echarts.baidu.com/examples.html](http://echarts.baidu.com/examples.html)

## Installation

```bash
npm install --save react-echarts-component
```

## Usage

```js
// es6
import ReactEcharts from 'react-echarts-component'
// es5
var ReactEcharts = require('react-echarts-component')

<ReactEcharts
  height={400}
  option={{...}}
  showLoading={true} />
```

Props Taken:

+ __height__ (required, number)

  height of the chart, unit: `px`

+ __option__ (required, object)

  settings for the chart, for details, refer to [http://echarts.baidu.com/option.html#title](http://echarts.baidu.com/option.html#title)

+ __showLoading__ (optional, bool, default: `false`)

  whether to show a spinning loader

+ __onClick__ (optional, func)

  callback when data clicked

+ __onReady__ (optional, func)

  callback when then chart is initialized, the echart instance is passed in, for detail, refer to [http://echarts.baidu.com/api.html#echartsInstance](http://echarts.baidu.com/api.html#echartsInstance)

## Development

```bash
git clone https://github.com/zillding/react-echarts-component.git
cd react-echarts-component
npm install
npm start
open http://localhost:3000
```

## License

MIT
