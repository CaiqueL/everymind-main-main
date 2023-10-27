import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  const [activeItem, setActiveItem] = useState(location.pathname);

  const handleItemClick = (path) => {
    setActiveItem(path);
  };
  return (
    <div>
      <div className="menu">
        <img
          className="logo"
          src="https://i.ibb.co/NsVVH5c/everymind-removebg-preview.png"
          alt="Seu Logo"
          style={{ width: "200px", height: "200px" }}
        />
        <div className="buttonWrapper">
          <button
            className={`buttonFirst ${
              activeItem === "/Empresa/VagasCadastradas" ? "active" : ""
            }`}
            onClick={() => handleItemClick("/Empresa/VagasCadastradas")}
          >
            <Link to="/Empresa/VagasCadastradas" style={{ color: "#ffffff " }}>
              Vagas Cadastradas
            </Link>
          </button>
        </div>

        <button
          className={`buttonFirst ${
            activeItem === "/Empresa/CadastrarVaga" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Empresa/CadastrarVaga")}
        >
          <Link to="/Empresa/CadastrarVaga" style={{ color: "#ffffff " }}>
            Cadastrar Vaga
          </Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Empresa/Dashboard" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Empresa/Dashboard")}
        >
          <Link to="/Empresa/Dashboard" style={{ color: "#ffffff " }}>
            Dashboard
          </Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Empresa/Entrevistas" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Empresa/Entrevistas")}
        >
          <Link to="/Empresa/Entrevistas" style={{ color: "#ffffff " }}>
            Entrevistas
          </Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Empresa/Feedbacks" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Empresa/Feedbacks")}
        >
          <Link to="/Empresa/Feedbacks" style={{ color: "#ffffff " }}>
            FeedBacks
          </Link>
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
