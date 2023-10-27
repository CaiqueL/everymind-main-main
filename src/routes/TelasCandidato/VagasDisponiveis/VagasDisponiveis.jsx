import React from "react";
import { BigCardInscrevase } from "../../../components/BigCardInscrevase";

const VagasDisponiveis = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "10px",
    marginTop: "1rem",
  };

  const cardStyles = {
    padding: "10px",
  };

  const cardData = [
    { name: "Cielo", role: "Junior", location: "São Paulo" },
    { name: "IBM", role: "Desenvolvedor", location: "Rio de Janeiro" },
    { name: "Google", role: "Designer", location: "Curitiba" },
    { name: "Fiap", role: "Gerente de TI", location: "Paraná" },
    { name: "Huawei", role: "Analista de dados", location: "São Paulo" },
    {
      name: "Microsoft",
      role: "Cientista de Dados",
      location: "Estados Unidos",
    },
  ];

  const cards = cardData.map((data, index) => (
    <div key={index} style={cardStyles}>
      <BigCardInscrevase
        name={data.name}
        role={data.role}
        location={data.location}
      />
    </div>
  ));

  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Vagas Disponíveis - Nesta seção, você encontrará uma lista de vagas de
        emprego atualmente disponíveis. Explore uma variedade de oportunidades
        de carreira em diferentes setores e locais.
      </h2>
      <div style={containerStyle}>{cards}</div>
    </div>
  );
};

export default VagasDisponiveis;
