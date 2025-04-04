import React from "react";
import SalesBarChart from "../components/charts/SalesBarChart";
import SalesLineChart from "../components/charts/SalesLineChart";
import ProductForm from "../components/forms/ProductForm";
import SaleForm from "../components/forms/SaleForm";
import Header from "../components/Header";

const Dashboard = () => {
  const formWidth = 500;
  const formGap = 30;

  return (
    <div style={{ background: "#f4f6f8", minHeight: "100vh" }}>
      <Header />
      <div
        style={{
          padding: "40px 60px",
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
          alignItems: "center",
          color: "#F58533",
        }}
      >
        {/* Seção de formulários */}
        <div
          style={{
            display: "flex",
            gap: `${formGap}px`,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: `${formWidth}px`,
              background: "#fff",
              padding: "24px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Cadastrar Produto
            </h2>
            <ProductForm />
          </div>
          <div
            style={{
              width: `${formWidth}px`,
              background: "#fff",
              padding: "24px",
              borderRadius: "10px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
            }}
          >
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Cadastrar Venda
            </h2>
            <SaleForm />
          </div>
        </div>

        {/* Gráfico de Vendas por Produto */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            width: "1066px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Quantidade de Vendas por Produto
          </h2>
          <SalesBarChart />
        </div>

        {/* Gráfico de Evolução das Vendas ao Longo do Tempo */}
        <div
          style={{
            background: "#fff",
            padding: "30px",
            borderRadius: "10px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            width: "1066px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Evolução das Vendas ao Longo do Tempo
          </h2>
          <SalesLineChart />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
