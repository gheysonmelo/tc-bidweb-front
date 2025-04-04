import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";

const SalesBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
      return;
    }

    axios
      .get("http://localhost:8080/sale", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const sales = response.data;
        const salesByProduct = sales.reduce((acc, sale) => {
          const productName = sale.product.productName;
          acc[productName] = (acc[productName] || 0) + sale.quantity;
          return acc;
        }, {});

        const formattedData = Object.entries(salesByProduct).map(
          ([name, quantity]) => ({
            name,
            quantity,
          })
        );

        setData(formattedData);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados de vendas:", error);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#0297AB" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;
