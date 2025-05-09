import React from "react";
import "./work.css";
import {
  BarChart,
  Bar,
  Rectangle,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { FaBoxArchive } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";
import { BsFillPeopleFill } from "react-icons/bs";

const WorkSpace = () => {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="work-container">
        <div className="work-title">
          <h1>DASHBOARD</h1>
        </div>
        <div className="work-card">
          <div className="card">
            <div className="work-inner">
              <h1>PRODUCTS</h1>
              <FaBoxArchive className="card-icon" />
            </div>
            <h1>100</h1>
          </div>
          <div className="card">
            <div className="work-inner">
              <h1>CATEGORIES</h1>
              <CgMenuGridR className="card-icon" />
            </div>
            <h1>33</h1>
          </div>
          <div className="card">
            <div className="work-inner">
              <h1>CUSTOMERS</h1>
              <BsFillPeopleFill className="card-icon" />
            </div>
            <h1>50</h1>
          </div>
          <div className="card">
            <div className="work-inner">
              <h1>ALERTS</h1>
              <FaBell className="card-icon" />
            </div>
            <h1>42</h1>
          </div>
        </div>
        <div className="work-charts">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="pv"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="uv"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default WorkSpace;
