/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../Button";
import { HelpText } from "../HelpText";
import { Paper } from "../Paper";
import { TextField } from "../TextField";
import "./style.css";

export const DrawerFileManager = ({ icon = false, image = true }) => {
  return (
    <div className="drawer-file-manager">
      <Paper
        bgClassName="design-component-instance-node"
        className="paper-instance"
        cyanBlurClassName="paper-2"
        redBlurClassName="paper-3"
      />
      <img className="image" alt="Image" src="https://c.animaapp.com/RLL3gMW3/img/image-11-1@2x.png" />
      <div className="stack">
        <div className="stack-2">
          <div className="text">Login</div>
        </div>
        <div className="stack-3">
          <TextField
            className="text-field-instance"
            hasValue
            inputClassName="text-field-2"
            size="m"
            state="enabled"
            text="Digite seu email"
            text1="Email"
            valueClassName="text-field-3"
            variant="outlined"
          />
          <TextField
            className="text-field-instance"
            hasValue
            inputClassName="text-field-2"
            maskLabelClassName="text-field-4"
            size="m"
            state="enabled"
            text="Cadastro, empresa"
            text1="Selecione seu tipo de login"
            valueClassName="text-field-3"
            variant="outlined"
          />
          <div className="text-field-5">
            <div className="input-2">
              <div className="email">{""}</div>
              <div className="label-focus-3">
                <div className="mask-label-2" />
                <div className="label-3">Senha</div>
              </div>
            </div>
            <HelpText className="help-text-instance" icon={false} state="active" text="Esqueceu sua senha?" />
          </div>
          <Button
            className="button-instance"
            color="inherit"
            labelClassName="button-2"
            size="m"
            state="enabled"
            text="Entrar"
            variant="contained"
          />
          <div className="label-4">Cadastre-se</div>
        </div>
      </div>
    </div>
  );
};

DrawerFileManager.propTypes = {
  icon: PropTypes.bool,
  image: PropTypes.bool,
};
