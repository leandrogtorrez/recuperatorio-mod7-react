import { useDispatch } from "react-redux";
import useForm from "../../../hooks/useForm";
import ModalInfo from "../../../components/ModalInfo";
import { saveWord } from "../../../redux/dictionary/dictionarySlice";

export const ModalAddWord = ({ isModalAddOpen, setIsModalAddOpen }) => {
  const [values, handleChange, resetForm] = useForm({
    espanol: "",
    english: "",
    portugues: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    if (
      values.espanol === "" ||
      values.english === "" ||
      values.portugues === ""
    ) {
      alert("Por favor, rellene todos los campos");
      return;
    }
    dispatch(saveWord(values));
    alert("Palabra agregada con exito");
    setIsModalAddOpen(false);
    resetForm();
  };

  return (
    <ModalInfo
      visible={isModalAddOpen}
      onClose={() => {
        setIsModalAddOpen(false);
        resetForm();
      }}
    >
      <form
        onSubmit={onSubmit}
        style={{
          color: "black",
        }}
      >
        <h1>Traductor USIP</h1>
        <div>
          <label htmlFor="espanol">Espanol</label>
          <input
            type="text"
            id="espanol"
            name="espanol"
            value={values.espanol}
            onChange={handleChange}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="english">English</label>
          <input
            type="text"
            id="english"
            name="english"
            value={values.english}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="portugues">Portugues</label>
          <input
            type="text"
            id="portugues"
            name="portugues"
            value={values.portugues}
            onChange={handleChange}
          />
        </div>

        <div className="button-container">
          <button className="buttonCustom" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </ModalInfo>
  );
};
