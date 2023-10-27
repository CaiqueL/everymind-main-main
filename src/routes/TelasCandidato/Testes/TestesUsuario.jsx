import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";
import { CardTestes } from "../../../components/CardTestes";

const TestesUsuario = () => {
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridGap: "20px",
    marginTop: "5em",
  };

  const cardStyles = {
    padding: "10px",
  };

  const cardData = [
    { name: "Cielo", role: "Junior" },
    { name: "IBM", role: "Desenvolvedor" },
  ];

  const cards = cardData.map((data, index) => (
    <div key={index} style={cardStyles}>
      <CardTestes name={data.name} role={data.role} />
    </div>
  ));
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Testes - Nesta área, você iniciará os testes relacionados à vaga que
        você está buscando. Estes testes podem abranger desde avaliações lógicas
        até a escrita de uma redação. Certifique-se de estar bem preparado,
        porque assim que você clicar no botão correspondente, o teste será
        imediatamente iniciado. Este é um passo crucial no processo de seleção,
        onde suas habilidades e competências serão avaliadas de forma objetiva.
        Portanto, esteja pronto para demonstrar o seu melhor desempenho e
        mostrar por que você é o candidato ideal para a vaga. Boa sorte!
      </h2>
      <div style={containerStyle}>{cards}</div>
    </div>
  );
};
//Metodos testados que ocasionaram falhas
//inserir text box após o click do botao no cardTeste
//realizar if para que quando o botao fosse clicado a caixa de texto aparecesse
// inserir ao lado de cards para exbicao de teste
//ao realizar import o PostInput o programa desconfigura
export default TestesUsuario;
