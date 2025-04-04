import React, { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";
import Header from "../components/Header";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div
      style={{
        background: "#f4f6f8",
        minHeight: "100vh",
        fontFamily: "'Lexend', sans-serif",
        color: "#F58533",
      }}
    >
      <Header />
      <div
        style={{
          maxWidth: "400px",
          margin: "50px auto",
          padding: "30px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
          borderRadius: "8px",
          background: "#fff",
        }}
      >
        {showRegister ? (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
              Criar Novo Usuário
            </h2>
            <RegisterForm />
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Já possui uma conta?{" "}
              <button
                onClick={() => setShowRegister(false)}
                style={{
                  background: "#0297AB",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#02788B")}
                onMouseOut={(e) => (e.target.style.background = "#0297AB")}
              >
                Fazer Login
              </button>
            </p>
          </>
        ) : (
          <>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
            <LoginForm />
            <p style={{ textAlign: "center", marginTop: "20px" }}>
              Não possui conta? {"   "}
              <button
                onClick={() => setShowRegister(true)}
                style={{
                  background: "#0297AB",
                  color: "#fff",
                  border: "none",
                  padding: "10px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) => (e.target.style.background = "#02788B")}
                onMouseOut={(e) => (e.target.style.background = "#0297AB")}
              >
                Cadastrar
              </button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
