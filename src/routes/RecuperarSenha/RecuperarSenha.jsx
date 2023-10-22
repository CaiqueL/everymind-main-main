import React, { useState } from "react";
import Localbase from 'localbase';
import "./styles.css";

const RecuperarSenha = () => {
  const [email, setEmail] = useState("");
  const [senhaAntiga, setSenhaAntiga] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [mensagem, setMensagem] = useState("");

  const handleVerificarSenha = () => {
    // Criar uma instância do banco de dados local
    const db = new Localbase('myDatabase');

    // Realizar a pesquisa no banco de dados local
    db.collection('usuarios')
      .doc({ email })
      .get()
      .then((usuario) => {
        if (usuario && usuario.senha === senhaAntiga) {
          setMostrarFormulario(true);
          setMensagem(""); // Limpe a mensagem de erro, se houver alguma.
        } else {
          setMensagem("Email ou senha antiga incorretos. Por favor, tente novamente.");
        }
      })
      .catch((error) => {
        console.error(error);
        setMensagem("Ocorreu um erro ao verificar as credenciais. Tente novamente.");
      });
  };

  const handleAtualizarSenha = () => {
    if (novaSenha) {
      const db = new Localbase('myDatabase');
      // Atualize a senha no banco de dados local
      db.collection('usuarios')
        .doc({ email })
        .update({ senha: novaSenha })
        .then(() => {
          setMensagem("Senha atualizada com sucesso!");
          setMostrarFormulario(false);
        })
        .catch((error) => {
          console.error(error);
          setMensagem("Ocorreu um erro ao atualizar a senha. Tente novamente.");
        });
    } else {
      setMensagem("Por favor, digite uma nova senha.");
    }
  };

  return (
    <div className="containerStyle">
     
      <h2 className="title">Recuperar a senha</h2>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <label className="text-base my-6">Email</label>
      <input
        type="text"
        placeholder="Digite seu email"
        className="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {mostrarFormulario ? (
        <div>
          <label className="text-base my-6">Nova Senha</label>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            className="input"
            value={novaSenha}
            onChange={(e) => setNovaSenha(e.target.value)}
          />
          <button className="button" onClick={handleAtualizarSenha}>
            Atualizar Senha
          </button>
        </div>
      ) : (
        <div>
          <label className="text-base my-6">Senha Antiga</label>
          <input
            type="password"
            placeholder="Digite sua senha antiga"
            className="input"
            value={senhaAntiga}
            onChange={(e) => setSenhaAntiga(e.target.value)}
          />
          <button className="button" onClick={handleVerificarSenha}>
            Verificar Cadastro
          </button>
        </div>
      )}
    </div>
  );
};

export default RecuperarSenha;
