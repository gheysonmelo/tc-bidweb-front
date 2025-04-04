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
  const response = await api.post("/product", productData);
  return response.data;
};

// Rota para criar uma venda
export const createSale = async (saleData) => {
  const response = await api.post("/sale", saleData);
  return response.data;
};

// Rota para obter os dados de vendas
export const fetchSalesData = async () => {
  // COLOCAR O TOKEN NA REQUISIÇÃO
  //   colocar Access-Control-Allow-Origin no back-end
  const token =
    "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJnaGV5c29uIiwiZXhwIjoxNzQzNzQwMjgyLCJpYXQiOjE3NDM3MzY2ODJ9.TmdUob1KBoTPddKsXi6WXxDifbqi38_OYXOvzAFD4bu-D1N8I7kBLSywZQwJRN8iNTwHRFRNld0Bp27Wcj0jQg";

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const response = await api.get("/sale", { headers });

  return response.data;
};
