import React from "react";
import "./styles.css"; // Import CSS file
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";


const Candidato = () => {
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
          <button className="buttonFirst">
            <Link to="/Candidato/Perfil" style={{ color: "#ffffff " }}>
              Perfil
            </Link>
          </button>

          {/* Outros botões aqui, sem margem à esquerda */}
        </div>

        <button className="menu-item">
          <Link to="/Candidato/VagasUsuario"  style={{ color: "#ffffff " }}>
            Minhas Vagas
          </Link>
        </button>

        <button className="menu-item">
          <Link to="/Candidato/VagasDisponiveis" style={{ color: "#ffffff " }}>
            Vagas Disponíveis
          </Link>
        </button>

        <button className="menu-item">
          <Link to="/Candidato/TestesUsuario" style={{ color: "#ffffff " }}>
            Testes
          </Link>
        </button>

        <button className="menu-item">
          <Link to="/Candidato/Entrevistas" style={{ color: "#ffffff " }}>
            Entrevistas
          </Link>
        </button>

        <button className="menu-item">
          <Link to="/Candidato/Feedbacks" style={{ color: "#ffffff " }}>
            Dashboard
          </Link>
        </button>
      </div>
    </>
  );
};

export default Candidato;