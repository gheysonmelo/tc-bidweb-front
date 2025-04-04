import React from "react";

const Header = () => {
  return (
    <header
      style={{
        background: "#0297AB",
        color: "white",
        padding: "10px 20px",
        marginBottom: "20px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "80px",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: "5px",
          top: "0",
          bottom: "0",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 10px",
          borderWidth: "5px",
          borderRadius: "12%",
          borderStyle: "solid",
          borderColor: "#0297AB",
        }}
      >
        <img
          src="/bidweb.png"
          alt="Logo Bidweb"
          style={{
            height: "70px",
            objectFit: "contain",
          }}
        />
      </div>

      <h1 style={{ margin: 0, textAlign: "center" }}>Dashboard - Vendas</h1>
    </header>
  );
};

export default Header;
