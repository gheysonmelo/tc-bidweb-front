import React, { useEffect, useState } from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { fetchSalesData } from "../services/api";

import { format } from "date-fns";

const SalesLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSalesData()
      .then((response) => {
        const formattedData = response.map((sale) => ({
          date: format(new Date(sale.saleDate), "dd/MM/yyyy"),
          quantity: sale.quantity,
        }));
        setData(formattedData);
      })
      .catch((error) => {
        console.error("Error fetching sales data:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="quantity" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
