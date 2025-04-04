import React, { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import Header from "../components/Header";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        borderRadius: "8px",
        background: "#fff",
      }}
    >
      <Header />
      {showRegister ? (
        <>
          <h2 style={{ textAlign: "center" }}>Criar Novo Usuário</h2>
          <RegisterForm />
          <p style={{ textAlign: "center" }}>
            Já possui uma conta?{" "}
            <button
              onClick={() => setShowRegister(false)}
              style={{
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Fazer Login
            </button>
          </p>
        </>
      ) : (
        <>
          <h2 style={{ textAlign: "center" }}>Login</h2>
          <LoginForm />
          <p style={{ textAlign: "center" }}>
            Não possui conta?{" "}
            <button
              onClick={() => setShowRegister(true)}
              style={{
                background: "#4CAF50",
                color: "#fff",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Cadastrar
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
