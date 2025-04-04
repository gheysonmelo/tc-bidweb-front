import React, { useState } from "react";
import axios from "axios";
import CustomAlert from "../alert";

const RegisterForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [alert, setAlert] = useState({ show: false, message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/user", {
        username,
        password,
        email,
      });
      setAlert({
        show: true,
        message: "Usuário criado com sucesso! Agora faça login.",
      });
      setUsername("");
      setPassword("");
      setEmail("");
    } catch (error) {
      console.error("Erro no cadastro:", error);
      setAlert({ show: true, message: "Falha no cadastro." });
    }
  };

  const handleCloseAlert = () =>
    setAlert({ show: false, message: "" }, (window.location.href = "/login"));

  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "bold" }}>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "bold" }}>Senha:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "14px",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          <label style={{ fontWeight: "bold" }}>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            padding: "12px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "15px",
            transition: "background 0.3s",
          }}
          onMouseOver={(e) => (e.target.style.background = "#02788B")}
          onMouseOut={(e) => (e.target.style.background = "#0297AB")}
        >
          Cadastrar
        </button>
      </form>
      {alert.show && (
        <CustomAlert message={alert.message} onClose={handleCloseAlert} />
      )}
    </>
  );
};

export default RegisterForm;
