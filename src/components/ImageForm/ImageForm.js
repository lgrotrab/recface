import React from "react";
import "./ImageForm.css";

const ImageForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <>
      <p className="f3">
        {
          "Este cerébro mágico irá detectar rostos nas suas imagens, teste a vontade"
        }
      </p>
      <div className="form center pa4 br3 shadow-5 w-70">
        <input
          className="f4 p2 w-70 center"
          type="text"
          onChange={onInputChange}
        />
        <button
          className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
          onClick={onButtonSubmit}
        >
          Detectar
        </button>
      </div>
    </>
  );
};

export default ImageForm;
