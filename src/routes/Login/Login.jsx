import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Localbase from 'localbase';
import Alert from "../../components/AlertaCustom/AlertaCustom";
import "./style.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tipoAcesso, setTipoAcesso] = useState("candidato");
  const [showAlert, setShowAlert] = useState(false);

  const handleLogin = () => {
    const db = new Localbase('myDatabase');

    db.collection('usuarios')
      .doc({ email, senha: password })
      .get()
      .then(user => {
        if (user) {
          // Verifique se o email termina com "@everymind.com.br"
          if (email.endsWith("@everymind.com.br")) {
            window.location.href = "/Empresa";
          } else {
            window.location.href = "/Candidato";
          }
        } else {
          setShowAlert(true);
        }
      });
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <div className="logo-container">
          <img
            src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png"
            alt="Logo"
          />
        </div>
        <h2 style={{ marginBottom: "10px" }} className="form-title">
          Login
        </h2>
        <input
          type="text"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="password-input">
          <input
            type="password"
            placeholder="Digite sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="form-actions">
          <button onClick={handleLogin} className="login-button">
            Login
          </button>
          <NavLink to="/RecuperarSenha" className="forgot-password-link">
            Esqueci Minha Senha
          </NavLink>
          <br></br>
          <NavLink to="/CadastroUsuario" className="signup-link">
            Cadastre-se
          </NavLink>
        </div>
      </div>
      {showAlert && (
        <Alert message="Credenciais Inválidas" onClose={handleAlertClose} />
      )}
    </div>
  );
};

export default Login;
