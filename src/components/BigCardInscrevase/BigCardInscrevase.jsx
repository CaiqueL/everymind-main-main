import React, { useState } from "react";
import { Button } from "../Button";
import "./style.css";

export const BigCardInscrevase = ({ name, role, location }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  return (
    <>
      {modalVisible && (
        <div className="modal-dialog">
          <div>Você se registrou na vaga!</div>
          <button
            onClick={() => setModalVisible(false)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Fechar
          </button>
        </div>
      )}
      <div className="modal">
        <div className="modal-content">
          <div className="user">
            <div className="stack2">
              <div className="name-rand">{name}</div>
              <div className="role-rand">{role}</div>
              <div className="location-rand">{location}</div>
            </div>
            <Button
              className="button-instance3"
              color="inherit"
              labelClassName="button-2"
              size="m"
              state="enabled"
              text="Inscreva-se"
              variant="contained"
              background="none"
              onClick={handleButtonClick}
            />
            <div className="icon-button-wrapper"></div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
