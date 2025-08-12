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
      navigate("/");
    } else {
      setError(
        "Ha habido un error en el sistema, por favor intentalo de nuevo mas tarde"
      );
    }
  };

  return (
    <Layout>
      <section>
        <h2>Creá tu cuenta</h2>
        <p>Ingresá tus datos</p>
        <form onSubmit={hundleSubmit}>
          <label>
            Nombre de usuario:
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Mínimo 6 caracteres"
            />
          </label>
          <label>
            Correo electrónico:
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresá un correo"
            />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mínimo 6 caracteres"
            />
          </label>
          <button>Crear cuenta</button>
          {error && (
            <div>
              <p>{error}</p>
            </div>
          )}
          {succes && (
            <div>
              <p>{succes}</p>
            </div>
          )}
        </form>
      </section>
    </Layout>
  );
};

export { Register };
