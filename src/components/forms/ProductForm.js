import React, { useState } from "react";
import { createProduct } from "../../services/api";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createProduct({
        productName,
        productValue: parseFloat(productValue),
      });
      alert("Produto cadastrado com sucesso!");
      setProductName("");
      setProductValue("");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Falha ao cadastrar produto.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: "bold" }}>Nome do Produto:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: "12px" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Valor:</label>
          <input
            type="number"
            step="0.01"
            value={productValue}
            onChange={(e) => setProductValue(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "flex-end" }}>
          <button
            type="submit"
            style={{
              background: "#F58533",
              color: "#fff",
              padding: "12px 20px",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "15px",
              height: "42px",
              whiteSpace: "nowrap",
            }}
            onMouseOver={(e) => (e.target.style.background = "#02788B")}
            onMouseOut={(e) => (e.target.style.background = "#0297AB")}
          >
            Cadastrar
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
