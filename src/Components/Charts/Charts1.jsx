import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default class Chart2 extends PureComponent {
  // static demoUrl = 'https://codesandbox.io/s/bar-chart-with-double-yaxis-zr232';
  render() {
    return ( 
      <ResponsiveContainer width="100%" aspect={2}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          >
            {/* {window.location.reload(false)} */}
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" stroke="#01d293" />
          <YAxis yAxisId="right" orientation="right" stroke="#01d293" />
          <Tooltip />
          <Legend />
          <Bar yAxisId="left" dataKey="pv" fill="#01d293" />
          <Bar yAxisId="right" dataKey="uv" fill="#01d293" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
