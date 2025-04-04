import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // URL do back-end
});

// Rota para criar um usuário
export const createUser = async (userData) => {
  const response = await api.post("/user", userData);

  return response.data;
};

// Rota para realizar login
export const loginUser = async (credentials) => {
  const response = await api.post("/auth/login", credentials);

  return response.data;
};

// Rota para criar um produto
export const createProduct = async (productData) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await api.post("/product", productData, { headers });

  return response.data;
};

// Rota para criar uma venda
export const createSale = async (saleData) => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await api.post("/sale", saleData, { headers });

  return response.data;
};

// Rota para obter os dados de vendas
export const fetchSalesData = async () => {
  const token = localStorage.getItem("token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await api.get("/sale", { headers });

  return response.data;
};
