import React from 'react';
import { dataService } from '../services/dataService';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

class Dashboard extends React.Component {
  state = {
    latestData: null
  };

  componentDidMount() {
    this.fetchLatestData();
  }

  fetchLatestData = async () => {
    // 模拟随机数据
    const generateRandomData = () => {
      const data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          time: i,
          temperature: Math.random() * 30, // 生成0到30之间的随机数
          salinity: Math.random() * 50, // 生成0到50之间的随机数
        });
      }
      return data;
    };

    const data = generateRandomData();
    this.setState({ latestData: data });
  };

  render() {
    const { latestData } = this.state;
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Latest Marine Data</h1>
        <div style={{ display: 'inline-block' }}>
          {latestData ? (
            <LineChart width={800} height={400} data={latestData} margin={{ top: 50, right: 50, bottom: 50, left: 50 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
              <Line type="monotone" dataKey="salinity" stroke="#82ca9d" />
            </LineChart>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
      </div>
    );
  }
}

export default Dashboard;
