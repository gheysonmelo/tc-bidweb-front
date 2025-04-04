import React, { useState, useEffect } from "react";
import axios from "axios";
import { createSale } from "../../services/api";

const SaleForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      alert("Você não está autenticado. Faça login para continuar.");
      return;
    }

    axios
      .get("http://localhost:8080/product", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
        alert("Falha ao buscar produtos.");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        quantity: parseInt(quantity, 10),
        saleDate: new Date().toISOString(),
        price: products.find((product) => product.id === selectedProductId)
          .value,
        product: { id: selectedProductId },
      };

      await createSale(payload);
      alert("Venda cadastrada com sucesso!");
      setQuantity("");
      setSelectedProductId("");

      // Dá refresh na página ou atualizar a lista de vendas
      window.location.reload();
    } catch (error) {
      console.error("Erro ao cadastrar venda:", error);
      alert("Falha ao cadastrar venda.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Produto:</label>
        <select
          value={selectedProductId}
          onChange={(e) => setSelectedProductId(e.target.value)}
          required
        >
          <option value="">Selecione um produto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.productName}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
      </div>
      <button type="submit">Cadastrar Venda</button>
    </form>
  );
};

export default SaleForm;
