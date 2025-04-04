import React, { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import RegisterForm from "../components/forms/RegisterForm";

const LoginPage = () => {
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div style={{ margin: "0 auto", maxWidth: "400px", padding: "20px" }}>
      {showRegister ? (
        <>
          <h2>Criar Novo Usuário</h2>
          <RegisterForm />
          <p>
            Já possui uma conta?{" "}
            <button onClick={() => setShowRegister(false)}>Fazer Login</button>
          </p>
        </>
      ) : (
        <>
          <h2>Login</h2>
          <LoginForm />
          <p>
            Não possui conta?{" "}
            <button onClick={() => setShowRegister(true)}>Cadastrar</button>
          </p>
        </>
      )}
    </div>
  );
};

export default LoginPage;
