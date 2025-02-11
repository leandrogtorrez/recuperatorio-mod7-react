import "./Dictionary.css";
import { useState } from "react";

import { ModalAddWord } from "./components/ModalAddWord";
import { ModalDeleteWord } from "./components/ModalDeleteWord";
import { ModalTranslateWord } from "./components/ModalTranslateWord";

const Dictionary = () => {
  const [isModalAddOpen, setIsModalAddOpen] = useState(false);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const [isModalTranslateOpen, setIsModalTranslateOpen] = useState(false);

  return (
    <div className="dictionary">
      <h1 className="title">Dictionary USIP</h1>
      <div className="content">
        <p>
          Este modulo (Diccionnario) corresponde al recuperatorio del modulo 7
          ReactJS URL:
          <a
            href="https://github.com/leandrogtorrez/recuperatorio-mod7-react"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer"
          >
            https://github.com/leandrogtorrez/recuperatorio-mod7-react
          </a>
        </p>
        <div className="buttons">
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalAddOpen(true);
            }}
          >
            Agregar palabra
          </button>
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalDeleteOpen(true);
            }}
          >
            Eliminar palabra
          </button>
        </div>
        <div>
          <button
            className="buttonCustom"
            onClick={() => {
              setIsModalTranslateOpen(true);
            }}
          >
            Traducir
          </button>
        </div>
      </div>

      <ModalAddWord
        isModalAddOpen={isModalAddOpen}
        setIsModalAddOpen={setIsModalAddOpen}
      />
      <ModalDeleteWord
        isModalDeleteOpen={isModalDeleteOpen}
        setIsModalDeleteOpen={setIsModalDeleteOpen}
      />
      <ModalTranslateWord
        isModalTranslateOpen={isModalTranslateOpen}
        setIsModalTranslateOpen={setIsModalTranslateOpen}
      />
    </div>
  );
};

export default Dictionary;
