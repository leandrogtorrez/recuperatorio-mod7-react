// src/screens/Forms/LoginForm.jsx
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { saveFormData, clearFormData } from "../../redux/form/formSlice";
import ModalInfo from "../../components/ModalInfo";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const [values, handleChange, resetForm] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const [showModalInfo, setShowModalInfo] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!values.username || !values.email || !values.password) {
      setModalMessage("Por favor, completa todos los campos.");
      setShowModalInfo(true);
      return;
    }

    if (values.password === formData.password) {
      dispatch(
        saveFormData({
          username: values.username,
          email: values.email,
          module: formData.module,
        })
      );
      setModalMessage(`Bienvenido ${values.username}`);
      resetForm();
    } else {
      setModalMessage("Password incorrecto");
    }

    setShowModalInfo(true);
  };

  const handleLogout = () => {
    dispatch(clearFormData());
    setShowLogoutModal(false);
  };

  const hideModalInfo = () => setShowModalInfo(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const hideLogoutModal = () => setShowLogoutModal(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="p-6"
    >
      <ModalInfo
        visible={showModalInfo}
        message={modalMessage}
        onClose={hideModalInfo}
        isWelcome={modalMessage.startsWith("Bienvenido")}
      />

      {showLogoutModal && (
        <ModalInfo
          visible={showLogoutModal}
          message="¿Desea cerrar sesión?"
          onClose={hideLogoutModal}
        >
          <button onClick={handleLogout}>Presiona para salir</button>
        </ModalInfo>
      )}

      <div className="container mx-auto max-w-md">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mb-6 text-center">
            Welcome to Full stack program
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center">
              <label htmlFor="module" className="text-sm font-medium w-auto">
                Module
              </label>
              <input
                type="text"
                id="module"
                name="module"
                value={formData.module}
                disabled
                className="w-full p-2 border rounded-md bg-gray-100"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium w-auto">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={values.username}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium w-auto">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium w-auto">
                Password
              </label>
              <div className="flex items-center space-x-1">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={handleShowPassword}
                  className="text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-md p-2"
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default LoginForm;
