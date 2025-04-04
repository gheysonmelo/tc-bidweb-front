import React from "react";

const CustomAlert = ({ message, onClose }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          maxWidth: "400px",
          width: "90%",
          textAlign: "center",
        }}
      >
        <p style={{ color: "#0297AB", fontSize: "16px", fontWeight: "bold" }}>
          {message}
        </p>
        <button
          onClick={onClose}
          style={{
            marginTop: "20px",
            backgroundColor: "#F58533",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "4px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default CustomAlert;
