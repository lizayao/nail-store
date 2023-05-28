import React from "react";

const InputComponent = (props) => {
  const { manejadorDeEventoDeTecla,value,manejadorCambio,titulo } = props;
  return (
    <div className="form-control">
      <label htmlFor="" className="form-label">
        {titulo}:
      </label>
      <input
        type="text"
        value={value}
        onKeyDown={manejadorDeEventoDeTecla}
        onChange={manejadorCambio}
        className="form-control"
      />
    </div>
  );
};

export default InputComponent;
