import React, { useState } from "react";
import axios from "axios";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", {
        username,
        password,
        email,
      });
      alert("Usuário criado com sucesso! Agora faça login.");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      alert("Falha no cadastro.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      <div>
        <label>Username:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
        />
      </div>
      <button
        type="submit"
        style={{
          background: "#4CAF50",
          color: "#fff",
          padding: "10px",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Cadastrar
      </button>
    </form>
  );
};

export default RegisterForm;
