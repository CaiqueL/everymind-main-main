import "./style.css";
import { Button } from "../Button";

export const InfoPerfil = () => {
  return (
    <div className="modalInfo">
      <div className="container">
        <div className="left-box">
          <img
            src="/src/assets/Avatar.png"
            alt="Imagem à esquerda"
            className="left-box-image"
          />
        </div>
      </div>
      <div className="modal-content">
        <div className="user-profile">
          <div className="user-inputs">
            <div className="input-column">
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Nome"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="email"
                  placeholder="Email"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="CPF"
                  className="outlined-input"
                />
              </div>
            </div>
            <div className="input-column">
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Telefone"
                  className="outlined-input"
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  placeholder="Vulnerabilidade social"
                  className="outlined-input"
                />
              </div>
            </div>
          </div>
          <div className="centered-input">
            <input
              type="text"
              placeholder="Sobre"
              className="outlined-input large-input"
            />
          </div>

          <Button
            className="button-instance"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Salvar Alterações"
            variant="contained"
          />
        </div>
      </div>
    </div>
  );
};
export default InfoPerfil;
