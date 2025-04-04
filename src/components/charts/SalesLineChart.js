import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import axios from "axios";

const SalesLineChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    axios
      .get("http://localhost:8080/sale", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Agrupa as vendas por data (considerando apenas a parte da data, sem o horário)
        const salesByDate = response.data.reduce((acc, sale) => {
          const date = sale.saleDate.split("T")[0]; // extrai a data (yyyy-mm-dd)
          acc[date] = (acc[date] || 0) + sale.quantity;
          return acc;
        }, {});

        // Formata os dados para o gráfico
        const formattedData = Object.entries(salesByDate)
          .map(([date, quantity]) => ({ date, quantity }))
          .sort((a, b) => new Date(a.date) - new Date(b.date)); // Ordena por data

        setData(formattedData);
      })
      .catch((error) => console.error("Erro ao buscar vendas:", error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="quantity"
          stroke="#0297AB"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
