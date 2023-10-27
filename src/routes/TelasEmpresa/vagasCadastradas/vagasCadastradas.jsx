import React, { useState, useEffect } from "react";
import Localbase from "localbase";
import "./styles.css";

const VagasCadastradas = () => {
  const [vagas, setVagas] = useState([]);

  useEffect(() => {
    const db = new Localbase("myDatabase");

    db.collection("vagas")
      .get()
      .then((vagas) => {
        setVagas(vagas);
      })
      .catch((error) => {
        console.error("Erro ao buscar vagas:", error);
      });
  }, []);
  return (
    <div>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Vagas Cadastradas - Nesta área, você pode visualizar as vagas de emprego
        que foram cadastradas e estão disponíveis para os candidatos. Esta seção
        permite à empresa listar e gerenciar todas as oportunidades de emprego
        disponíveis, facilitando o processo de recrutamento e seleção de
        talentos.
      </h2>
      <div className="vagas-list">
        {vagas.map((vaga) => (
          <VagaCard key={vaga.id} vaga={vaga} />
        ))}
      </div>
    </div>
  );
};

const VagaCard = ({ vaga }) => {
  return (
    <div className="vaga-card">
      <h3 className="vaga-title">{vaga.nome}</h3>
      <p className="vaga-info">
        <strong>Localização:</strong> {vaga.localizacao}
      </p>
      <p className="vaga-info">
        <strong>Cargo:</strong> {vaga.cargo}
      </p>
      <p className="vaga-info">
        <strong>Status:</strong> {vaga.status}
      </p>
      <p className="vaga-info">
        <strong>Salário:</strong> {vaga.salario}
      </p>
      <p className="vaga-info">
        <strong>Tipo de Trabalho:</strong> {vaga.tipoTrabalho}
      </p>
    </div>
  );
};

export default VagasCadastradas;
