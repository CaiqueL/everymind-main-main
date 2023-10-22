import React from "react";
import { IconsIcEvaCheckmarkFill } from "../../icons/IconsIcEvaCheckmarkFill";
import "./style.css";

const Vaga = ({ vaga }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="user">
          <div className="stack">
            <div className="name-rand">{vaga.nome}</div>
            <div className="role-rand">{vaga.cargo}</div>
          </div>
          <div className="icon-button-wrapper">
            <IconsIcEvaCheckmarkFill
              className="icons-ic-eva-more"
              color="#637381"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vaga;
