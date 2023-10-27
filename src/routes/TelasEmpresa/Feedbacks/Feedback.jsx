import { Outlet } from "react-router-dom";
import { CardEntrevistas } from "../../../components/CardEntrevistas";

const FeedbackEmp = () => {
  return (
    <div>
      <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
        Nesta área, como recrutador, você pode gerenciar o processo de
        entrevistas e fornecer feedbacks valiosos aos candidatos.
      </h2>
      <CardEntrevistas></CardEntrevistas>
    </div>
  );
};

export default FeedbackEmp;
