import { Outlet } from "react-router-dom";
import { BigCard } from "../../../components/BigCard";
import { CardEntrevistas } from "../../../components/CardEntrevistas";

const Entrevistas = () => {
  const styleText = {
    color: "black",
    height: "100px",
    position: "absolute",
    top: "5%",
    left: "20%",
    fontSize: "24px",
  };

  const styleText2 = {
    color: "#555555",
    height: "100px",
    position: "absolute",
    top: "15%",
    left: "20%",
    fontSize: "14px",
  };
  return (
    <div>
      <h1 className="text-left decoration-black h24 text-3xl px-10">Conta</h1>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Entrevistas e Feedbacks - Nesta área, você pode acompanhar o progresso
        das entrevistas e receber feedbacks sobre suas candidaturas.
      </h2>
      <CardEntrevistas title="Agendado" />
    </div>
  );
};

export default Entrevistas;
