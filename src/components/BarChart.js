import React, { useEffect, useState } from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import { fetchSalesData } from "../services/api";

// Gráfico de Barras: exibindo a quantidade de vendas por produto ou por determinado
// período.

// Assim que o back-end já está rodando e a rota /sale retorna os dados de vendas
// [
//   {
//     id: 1,
//     quantity: 10,
//     saleDate: "2025-04-03T12:00:00",
//     price: 37.5,
//     product: {
//       id: 1,
//       productName: "Coca-Cola Lata",
//       productValue: 3.75,
//     },
//   },
//   {
//     id: 2,
//     quantity: 10,
//     saleDate: "2025-04-03T12:00:00",
//     price: 37.5,
//     product: {
//       id: 1,
//       productName: "Coca-Cola Lata",
//       productValue: 3.75,
//     },
//   },
//   {
//     id: 3,
//     quantity: 10,
//     saleDate: "2025-04-03T12:00:00",
//     price: 37.5,
//     product: {
//       id: 1,
//       productName: "Coca-Cola Lata",
//       productValue: 3.75,
//     },
//   },
//   {
//     id: 4,
//     quantity: 10,
//     saleDate: "2025-04-03T12:00:00",
//     price: 37.5,
//     product: {
//       id: 1,
//       productName: "Coca-Cola Lata",
//       productValue: 3.75,
//     },
//   },
//   {
//     id: 5,
//     quantity: 1,
//     saleDate: "2025-04-03T12:00:00",
//     price: 3.75,
//     product: {
//       id: 1,
//       productName: "Coca-Cola Lata",
//       productValue: 3.75,
//     },
//   },
// ];

const SalesBarChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSalesData()
      .then((response) => {
        const formattedData = response.map((sale) => ({
          productName: sale.product.productName,
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
      <BarChart data={data}>
        <XAxis dataKey="productName" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="quantity" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default SalesBarChart;
