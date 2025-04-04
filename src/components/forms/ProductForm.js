import React, { useState } from "react";
import axios from "axios";

const ProductForm = () => {
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Você não está autenticado. Faça login para continuar.");
        return;
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.post(
        "http://localhost:8080/product",
        {
          productName,
          value: parseFloat(productValue),
        },
        { headers }
      );

      alert("Produto cadastrado com sucesso!");
      setProductName("");
      setProductValue("");

      // Dá refresh na página ou atualizar a lista de produtos
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
      alert("Falha ao cadastrar produto.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome do Produto:</label>
        <input
          type="text"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Valor:</label>
        <input
          type="number"
          step="0.01"
          value={productValue}
          onChange={(e) => setProductValue(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Produto</button>
    </form>
  );
};

export default ProductForm;
