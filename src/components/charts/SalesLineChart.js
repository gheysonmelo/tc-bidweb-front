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
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

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
        // Agrupa as vendas por mês, contando cada venda como 1
        const salesByMonth = response.data.reduce((acc, sale) => {
          const saleDateObj = new Date(sale.saleDate);
          const key = format(saleDateObj, "yyyy-MM");
          acc[key] = (acc[key] || 0) + 1;
          return acc;
        }, {});

        // Converte os dados agrupados para o formato desejado, formatando as labels
        const formattedData = Object.entries(salesByMonth)
          .map(([key, count]) => {
            const [yearStr, monthStr] = key.split("-");
            const year = parseInt(yearStr, 10);
            const month = parseInt(monthStr, 10);
            const date = new Date(year, month - 1, 1);
            const formattedLabel = format(date, "MMM - yy", { locale: ptBR })
              .replace(".", "")
              .toUpperCase();
            return { month: formattedLabel, vendas: count, sortDate: date };
          })
          .sort((a, b) => a.sortDate - b.sortDate)
          .map(({ month, vendas }) => ({ month, vendas }));

        setData(formattedData);
      })
      .catch((error) => console.error("Erro ao buscar vendas:", error));
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="vendas"
          stroke="#F58533"
          strokeWidth={2}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SalesLineChart;
