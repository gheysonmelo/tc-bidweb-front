import React from "react";
import SalesBarChart from "../components/charts/SalesBarChart";
import ProductForm from "../components/forms/ProductForm";
import SaleForm from "../components/forms/SaleForm";

const Dashboard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard de Vendas</h1>
      <div style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
        <div style={{ flex: 1 }}>
          <h2>Cadastrar Produto</h2>
          <ProductForm />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Cadastrar Venda</h2>
          <SaleForm />
        </div>
      </div>
      <h2>Quantidade de Vendas por Produto</h2>
      <SalesBarChart />
    </div>
  );
};

export default Dashboard;
