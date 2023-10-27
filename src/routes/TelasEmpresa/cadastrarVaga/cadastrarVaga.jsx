import React, { useState } from "react";
import Localbase from "localbase";
import "./styles.css";

const VagasCadastradas = () => {
  const [nome, setNome] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const [cargo, setCargo] = useState("");
  const [status, setStatus] = useState("Ativa");
  const [salario, setSalario] = useState("");
  const [tipoTrabalho, setTipoTrabalho] = useState("Home Office"); // Adicione o estado para o tipo de trabalho
  const [mensagem, setMensagem] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleCadastroVaga = () => {
    setIsLoading(true);
    setMensagem(null);

    const db = new Localbase("myDatabase");

    const vagaData = {
      nome,
      localizacao,
      cargo,
      status,
      salario: parseFloat(salario.replace(",", "")), // Remova a formatação de moeda e converta para número
      tipoTrabalho, // Adicione o tipo de trabalho
    };

    db.collection("vagas")
      .add(vagaData)
      .then(() => {
        setIsLoading(false);
        setNome("");
        setLocalizacao("");
        setCargo("");
        setStatus("Ativa");
        setSalario("");
        setTipoTrabalho("Home Office"); // Defina o tipo de trabalho de volta para o padrão
        setMensagem("Vaga cadastrada com sucesso!");
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Erro ao cadastrar a vaga:", error);
        setMensagem("Erro ao cadastrar a vaga. Tente novamente.");
      });
  };

  return (
    <div>
      <div className="flex space-x-4 px-10 mt-1">
        <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
          Nesta área, você pode cadastrar novas vagas de emprego, facilitando o
          processo de divulgação de oportunidades profissionais.
        </h2>
      </div>
      <div className="vagas-cadastradas-container">
        <h2>Cadastrar Vaga</h2>
        <form>
          <div className="form-group">
            <label htmlFor="nome">Título</label>
            <input
              type="text"
              id="nome"
              placeholder="Digite o título da vaga"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="localizacao">Localização</label>
            <input
              type="text"
              id="localizacao"
              placeholder="Digite a localização da vaga"
              value={localizacao}
              onChange={(e) => setLocalizacao(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="cargo">Cargo</label>
            <input
              type="text"
              id="cargo"
              placeholder="Digite o cargo da vaga"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Status</label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="Ativa">Ativa</option>
              <option value="Pausada">Pausada</option>
              <option value="Encerrada">Encerrada</option>
              <option value="Em Andamento">Em Andamento</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="salario">Salário</label>
            <input
              type="text"
              id="salario"
              placeholder="Digite o salário da vaga (formato: 1000,00)"
              value={salario}
              onChange={(e) => setSalario(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="tipoTrabalho">Tipo de Trabalho</label>
            <select
              id="tipoTrabalho"
              value={tipoTrabalho}
              onChange={(e) => setTipoTrabalho(e.target.value)}
            >
              <option value="Home Office">Home Office</option>
              <option value="Híbrido">Híbrido</option>
              <option value="Presencial">Presencial</option>
            </select>
          </div>
          <button className="cadastrar-button" onClick={handleCadastroVaga}>
            {isLoading ? (
              <i className="fa fa-spinner fa-spin"></i>
            ) : (
              "Cadastrar Vaga"
            )}
          </button>
          {mensagem && <div className="mensagem">{mensagem}</div>}
        </form>
      </div>{" "}
    </div>
  );
};

export default VagasCadastradas;
