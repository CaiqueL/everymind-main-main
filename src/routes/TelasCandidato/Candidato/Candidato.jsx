import React, { useState } from "react";
import "./styles.css"; // Import CSS file
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";

const Candidato = () => {
  const [activeItem, setActiveItem] = useState(location.pathname);
  const handleItemClick = (path) => {
    setActiveItem(path);
  };
  return (
    <>
      <div>
        <Outlet />
      </div>
      <div className="menu">
        <div className="flex m-20 items-center ">
          <img
            className="mr-10 rounded-full"
            src="/src/assets/Avatar.png"
            alt="Profile"
          />
          <div className="text-xl text-white">Matheus Costa</div>
        </div>
        <div className="buttonWrapper">
          <button
            className={`buttonFirst ${
              activeItem === "/Candidato/Perfil" ? "active" : ""
            }`}
            onClick={() => handleItemClick("/Candidato/Perfil")}
          >
            <Link to="/Candidato/Perfil">Perfil</Link>
          </button>

          {/* Outros botões aqui, sem margem à esquerda */}
        </div>
        <button
          className={`buttonFirst ${
            activeItem === "/Candidato/VagasUsuario" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Candidato/VagasUsuario")}
        >
          <Link to="/Candidato/VagasUsuario">Minhas Vagas</Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Candidato/VagasDisponiveis" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Candidato/VagasDisponiveis")}
        >
          <Link to="/Candidato/VagasDisponiveis">Vagas Disponíveis</Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Candidato/TestesUsuario" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Candidato/TestesUsuario")}
        >
          <Link to="/Candidato/TestesUsuario">Testes</Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Candidato/Entrevistas" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Candidato/Entrevistas")}
        >
          <Link to="/Candidato/Entrevistas">Entrevistas</Link>
        </button>

        <button
          className={`buttonFirst ${
            activeItem === "/Candidato/Feedbacks" ? "active" : ""
          }`}
          onClick={() => handleItemClick("/Candidato/Feedbacks")}
        >
          <Link to="/Candidato/Feedbacks">Dashboard</Link>
        </button>
      </div>
    </>
  );
};

export default Candidato;
