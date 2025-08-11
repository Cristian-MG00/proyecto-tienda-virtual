import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [succes, setSucces] = useState("");

  const { register } = useAuth();
  const navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
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
      setError("Hay datos incorrectos, revisa e intenta de nuevo");
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
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Correo electrónico:
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
