import { useDispatch, useSelector } from "react-redux";
import useForm from "../../../hooks/useForm";
import ModalInfo from "../../../components/ModalInfo";
import { deleteWord } from "../../../redux/dictionary/dictionarySlice";

export const ModalDeleteWord = ({
  isModalDeleteOpen,
  setIsModalDeleteOpen,
}) => {
  const [values, handleChange, resetFormDelete] = useForm({
    wordToDelete: "",
  });

  const dictionary = useSelector((state) => state.dictionary.words);

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (values.wordToDelete === "") {
      alert("Escriba una palabra");
      return;
    }

    if (!dictionary.find((word) => word.espanol === values.wordToDelete)) {
      alert("No se encontró la palabra");
      return;
    }

    dispatch(deleteWord(values.wordToDelete));

    alert("Palabra eliminada con exito");
    setIsModalDeleteOpen(false);
    resetFormDelete();
  };

  return (
    <ModalInfo
      visible={isModalDeleteOpen}
      onClose={() => {
        setIsModalDeleteOpen(false);
        resetFormDelete();
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          color: "black",
        }}
      >
        <h1>Traductor USIP</h1>
        <h5>Que palabra desea eliminar del diccionario</h5>
        <h5>Puede escribir su palabra en ESPANHOL, INGLES O PORTUGUES</h5>
        <div>
          <label htmlFor="wordToDelete">Palabra</label>
          <input
            type="text"
            id="wordToDelete"
            name="wordToDelete"
            value={values.wordToDelete}
            onChange={handleChange}
            autoFocus
          />
        </div>

        <div className="button-container">
          <button className="buttonCustom" type="submit">
            Eliminar
          </button>
        </div>
      </form>
    </ModalInfo>
  );
};
