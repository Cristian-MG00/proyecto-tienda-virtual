import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          {user && (
            <>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Panel</Link>
              </li>
              <li>
                <Link to="/about-us">Sobre Nosotros</Link>
              </li>
              <button>Cerrar sesión</button>
            </>
          )}

          {!user && (
            <>
              <li>
                <Link to="login">Ingresar</Link>
              </li>
              <li>
                <Link to="/register">Registrarse</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export { Header };
