import { BigCard } from "../../../components/BigCard";

const MinhasVagas = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "20px",
    marginTop: "3em",
  };

  const cardsData = [
    {
      buttonText: "Em andamento",
      name: "Cielo",
      role: "Junior",
      buttonStyles: "bg-green-500 text-white border-blue-500",
    },
    {
      buttonText: "Realizar teste",
      name: "IBM",
      role: "Desenvolvedor",
      buttonStyles: "bg-indigo-800 text-white border-gray-700",
    },
    {
      buttonText: "Aguardando",
      name: "Google",
      role: "Designer",
      buttonStyles: "bg-red-500 text-white border-yellow-500",
    },
  ];
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Minhas Vagas - Nesta seção, você pode acompanhar todas as vagas em que
        se candidatou. Este resumo oferece uma visão geral das oportunidades que
        despertaram o seu interesse e o status atual de suas candidaturas.
      </h2>
      <div style={containerStyle}>
        {cardsData.map((data, index) => (
          <div key={index} style={{ cardsData }}>
            <BigCard
              buttonText={data.buttonText}
              buttonStyles={data.buttonStyles}
              name={data.name}
              role={data.role}
              showButton={true}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MinhasVagas;
