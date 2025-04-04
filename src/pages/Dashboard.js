import React, { useState } from "react";
import SalesBarChart from "../components/BarChart";
import SalesLineChart from "../components/LineChart";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard de Vendas</h1>
      <h2>Vendas por Produto</h2>
      <SalesBarChart />
      <h2>Evolução das Vendas</h2>
      <SalesLineChart />
    </div>
  );
};

export default Dashboard;
