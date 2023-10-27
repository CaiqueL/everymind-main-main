import { InfoPerfil } from "../../../components/InfoPerfil";

const Perfil = () => {
  return (
    <div>
      <h1 className="text-left decoration-black text-3xl px-10">Conta</h1>
      <div className="flex space-x-4 px-10 mt-1">
        <h2 className="flex space-x-4 px-10 mt-1 italic text-lg text-[#555555]">
          Perfil - Nesta seção, você pode gerenciar e atualizar suas informações
          de perfil de usuário
        </h2>
      </div>

      <InfoPerfil />
    </div>
  );
};

export default Perfil;
