import React, { useState } from 'react';
import Localbase from 'localbase';
import './style.css';
import 'font-awesome/css/font-awesome.min.css'; // Importe o CSS do FontAwesome

const CadastroUsuario = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [tipoAcesso, setTipoAcesso] = useState('candidato');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [carregando, setCarregando] = useState(false);

  const handleCadastro = () => {
    // Validação dos campos
    if (!nome || !telefone || !email || !senha) {
      setMensagem('Todos os campos são obrigatórios.');
      return;
    }

    // Validação do CPF
    if (!cpf.match(/^\d{11}$/)) {
      setMensagem('CPF inválido. Deve conter 11 dígitos numéricos.');
      return;
    }

    if (tipoAcesso === 'empresa' && !email.endsWith('@everymind.com.br')) {
      setMensagem('O email da empresa deve terminar com @everymind.com.br');
      return;
    }

    setCarregando(true);

    // Simule o carregamento por 5 segundos (você pode substituir isso pelo salvamento real no banco de dados)
    setTimeout(() => {
      // Salve os dados no banco de dados local
      const db = new Localbase('myDatabase');
      db.collection('usuarios').add({
        nome,
        cpf,
        telefone,
        email,
        tipoAcesso,
        senha,
      });

      // Limpe os campos após o cadastro
      setNome('');
      setCpf('');
      setTelefone('');
      setEmail('');
      setTipoAcesso('candidato');
      setSenha('');
      setMensagem('Usuário cadastrado com sucesso!');
      setCarregando(false);
    }, 5000); // Simula um carregamento por 5 segundos
  };

  return (
    <div className="containerStyle">
      <h2 className="my-6 text-lg">Cadastro de Usuário</h2>
      {mensagem && (
        <div className={mensagem.includes('sucesso') ? 'success-message' : 'error-message'}>
          {mensagem}
        </div>
      )}
      <div className="form-group">
        <label htmlFor="nome" className="text-sm">
          Nome
        </label>
        <input
          type="text"
          id="nome"
          placeholder="Digite seu nome"
          className="form-control"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cpf" className="text-sm">
          CPF
        </label>
        <input
          type="number"
          pattern="[0-9]*"
          id="cpf"
          placeholder="Digite seu CPF"
          className="form-control"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="telefone" className="text-sm">
          Telefone
        </label>
        <input
          type="text"
          id="telefone"
          placeholder="Digite seu telefone"
          className="form-control"
          value={telefone}
          onChange={(e) => {
            const formattedTelefone = e.target.value.replace(/\D/g, '');
            setTelefone(formattedTelefone);
          }}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email" className="text-sm">
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Digite seu email"
          className="form-control"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="tipoAcesso" className="text-sm">
          Tipo de Acesso
        </label>
        <select
          id="tipoAcesso"
          className="form-control"
          value={tipoAcesso}
          onChange={(e) => setTipoAcesso(e.target.value)}
        >
          <option value="candidato">Candidato</option>
          <option value="empresa">Empresa</option>
        </select>
      </div>
      {tipoAcesso === 'empresa' && (
        <div className="form-group">
          <label htmlFor="senha" className="text-sm">
            Senha da Empresa
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Digite a senha da empresa"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      )}
      {tipoAcesso === 'candidato' && (
        <div className="form-group">
          <label htmlFor="senha" className="text-sm">
            Senha do Candidato
          </label>
          <input
            type="password"
            id="senha"
            placeholder="Digite a senha do candidato"
            className="form-control"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
      )}
      <button onClick={handleCadastro} className="btn btn-primary">
        {carregando ? <i className="fa fa-spinner fa-spin"></i> : 'Cadastrar'}
      </button>
    </div>
  );
};

export default CadastroUsuario;
