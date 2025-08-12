import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div>
        <div>404</div>
        <h3>Pagina no econtrada</h3>
        <p>Verificá la URL o dirigite a Inicio</p>
        <Link to="/">Inicio</Link>
      </div>
    </Layout>
  );
};

export { NotFound };
