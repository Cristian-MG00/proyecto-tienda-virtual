import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <img
          className="icon-tv-footer"
          src="./tienda-virtual-icon.jpg"
          alt="Ícono de tienda virtual"
        />

        <p className="footer-routes">
          <Link to={"/privacy-policy"}>Política de privacidad</Link>
          <span> • </span>
          <Link to={"/cookie-policy"}>Política de cookies</Link>
        </p>

        <div className="footer-networks">
          <a href="https://www.instagram.com/" target="blank">
            <img
              src="instagram-icon.png"
              alt="Ícono de instagram"
              className="icon-network"
            />
          </a>
          <a href="https://ar.linkedin.com/" target="blank">
            <img
              src="linkedin-icon.png"
              alt="Ícono de linkedín"
              className="icon-network"
            />
          </a>
          {/* el icono de facebook es mas grande, por eso le doy una clase para darle un tamaño que iguale a los otros iconos */}
          <a href="https://www.facebook.com/?locale=es_LA" target="blank">
            <img
              src="facebook-icon.png"
              alt="Ícono de Facebook"
              className="image-face"
            />
          </a>
          <a href="https://x.com/?lang=es" target="blank">
            <img
              src="https://images.icon-icons.com/4076/PNG/512/twitter_x_logo_icon_258917.png"
              alt="Ícono de X"
              className="icon-network"
            />
          </a>
        </div>
      </div>
      <div className="footer-p">
        <p>
          Sitio desarrollado por Cristian Machaca Gutierrez. © 2025 Tienda
          Virtual. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export { Footer };
