import { useState } from "react";
import { Layout } from "../components/Layout";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const logged = await login(username, password);
    if (logged) {
      console.log(logged);
      navigate("/");
    } else {
      setError("El usuario no existe");
    }
  };

  return (
    <Layout>
      <section>
        <h2>Ingresa a tu cuenta</h2>
        <div>
          <h4>Datos de prueba</h4>
          <p>Nombre de usuario: hopkins</p>
          <p>Contraseña: William56$hj</p>
        </div>
        <form onSubmit={hundleSubmit}>
          <label>
            Nombre de usuario:
            <input type="text" onChange={(e) => setUsername(e.target.value)} />
          </label>
          <label>
            Contraseña:
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button>Ingresar</button>
          {error && <p>{error}</p>}
        </form>
      </section>
    </Layout>
  );
};

export { Login };
