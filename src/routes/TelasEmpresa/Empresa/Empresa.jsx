import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./styles.css";

const Menu = () => {
  return (
    <div>
      <div className="menu">
        <img
          className="logo"
          src="https://i.ibb.co/NsVVH5c/everymind-removebg-preview.png"
          alt="Seu Logo"
          style={{ width: "200px", height: "200px" }} // Defina largura e altura aqui
        />
        <div className="menu-items">
          <Link to="/Empresa/VagasCadastradas" className="menu-item">
            Vagas Cadastradas
          </Link>
          <Link to="/Empresa/CadastrarVaga" className="menu-item">
            Cadastrar Vaga
          </Link>
          <Link to="/Empresa/Dashboard" className="menu-item">
            Dashboard
          </Link>
          <Link to="/Empresa/Entrevistas" className="menu-item">
            Entrevistas
          </Link>
          <Link to="/Empresa/Feedbacks" className="menu-item">
            FeedBacks
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Menu;
