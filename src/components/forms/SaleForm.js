import React, { useState, useEffect } from "react";
import { createSale } from "../../services/api";
import axios from "axios";
import CustomAlert from "../alert";

const SaleForm = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [saleDate, setSaleDate] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setAlert({
        show: true,
        message: "Você não está autenticado. Faça login para continuar.",
      });
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
          products.find(
            (product) => Number(product.id) === Number(selectedProductId)
          ).productValue * parseInt(quantity, 10),
        product: { id: selectedProductId },
      });

      setAlert({ show: true, message: "Venda cadastrada com sucesso!" });
      setQuantity("");
      setSelectedProductId("");
      setSaleDate("");
    } catch (error) {
      console.error("Erro ao cadastrar venda:", error);
      setAlert({ show: true, message: "Falha ao cadastrar venda." });
    }
  };

  const handleCloseAlert = () =>
    setAlert({ show: false, message: "" }, window.location.reload());

  return (
    <>
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
          color: "#F58533",
        }}
      >
        {/* Linha 1: Select do produto e Quantidade */}
        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
          >
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
        </div>

        {/* Linha 2: Data da Venda e Botão */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
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

      {alert.show && (
        <CustomAlert message={alert.message} onClose={handleCloseAlert} />
      )}
    </>
  );
};

export default SaleForm;
