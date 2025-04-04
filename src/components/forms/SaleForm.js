import React, { useState, useEffect } from "react";
import { createSale } from "../../services/api";
import axios from "axios";

const SaleForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [saleDate, setSaleDate] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
      return;
    }

    axios
      .get("http://localhost:8080/product", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Erro ao buscar produtos:", error));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDate = saleDate
        ? new Date(saleDate).toISOString()
        : new Date().toISOString();

      await createSale({
        quantity: parseInt(quantity, 10),
        saleDate: formattedDate,
        price:
          products.find((product) => product.id === selectedProductId).value *
          parseInt(quantity, 10),
        product: { id: selectedProductId },
      });
      alert("Venda cadastrada com sucesso!");
      setQuantity("");
      setSelectedProductId("");
      setSaleDate("");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cadastrar venda:", error);
      alert("Falha ao cadastrar venda.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <label style={{ fontWeight: "bold" }}>Produto:</label>
        <select
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
          required
          style={{
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px",
          }}
        >
          <option value="">Selecione um produto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.productName}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Quantidade:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          }}
        >
          <label style={{ fontWeight: "bold" }}>Data da Venda:</label>
          <input
            type="date"
            value={saleDate}
            onChange={(e) => setSaleDate(e.target.value)}
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <button
          type="submit"
          style={{
            background: "#0297AB",
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
    </form>
  );
};

export default SaleForm;
