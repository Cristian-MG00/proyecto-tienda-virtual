import "../styles/pages/Register.css";
import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSucces("");

    if (!username || !email || !password) {
      setError("Debes completar todos los campos");
      return;
    }
    if (username.length < 6 && password.length < 6) {
      setError(
        "El nombre de usuario y la contraseña deben tener al menos 6 caracteres"
      );
      return;
    }
    if (username.length < 6 && password.length >= 6) {
      setError("El nombre de usuario debe tener al menos 6 caracteres");
      return;
    }
    if (username.length >= 6 && password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres");
      return;
    }

    const newUser = {
      id: crypto.randomUUID(),
      username: username,
      email: email,
      password: password,
    };

    const registered = register(newUser);

    if (registered) {
      setSucces("Registro realizado con exito!");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } else {
      setError("Ha ocurrido un error, vuelve a intentarlo mas tarde");
    }
  };

  return (
    <Layout>
      <div className="cont-register">
        <section className="cart-register">
          <div className="text-register">
            <h2>Tienda virtual</h2>
            <h3>Bienvenido!</h3>
            <h3>Aquí podes crear tu cuenta de forma facil y rápida</h3>
            <p>Ingresá los siguientes datos</p>
          </div>
          <div className="cont-form-register">
            <form onSubmit={hundleSubmit}>
              <div className="form-register">
                <div className="inputs-register">
                  <label>Nombre de usuario: </label>
                  <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <div className="inputs-register">
                  <label>Correo electrónico: </label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresá un correo"
                  />
                </div>

                <div className="inputs-register">
                  <label>Contraseña: </label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Mínimo 6 caracteres"
                  />
                </div>

                <button>Crear cuenta</button>
              </div>
              {error && (
                <div className="error-register">
                  <p>{error}</p>
                </div>
              )}
              {succes && (
                <div className="succes-register">
                  <p>{succes}</p>
                </div>
              )}
            </form>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export { Register };
