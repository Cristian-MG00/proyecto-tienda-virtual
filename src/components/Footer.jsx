import "../styles/components/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="cont">
        <img
          className="image"
          src="./tienda-virtual-icon.jpg"
          alt="Ícono de tienda virtual"
        />

        <h4>
          <a href="#">Política de privacidad</a>•
          <a href="#">Política de cookies</a>
        </h4>

        <div>
          <a href="https://www.instagram.com/">
            <img src="instagram-icon.png" alt="Ícono de instagram" />
          </a>
          <a href="https://ar.linkedin.com/">
            <img src="linkedin-icon.png" alt="Ícono de linkedín" />
          </a>
          <a href="https://www.facebook.com/?locale=es_LA">
            <img
              className="image-face"
              src="facebook-icon.png"
              alt="Ícono de Facebook"
            />
          </a>
          <a href="https://x.com/?lang=es">
            <img
              src="https://images.icon-icons.com/4076/PNG/512/twitter_x_logo_icon_258917.png"
              alt="Ícono de X"
            />
          </a>
        </div>
      </div>
      <p>
        Sitio desarrollado por Cristian Machaca Gutierrez. © 2025 Tienda
        Virtual. Todos los derechos reservados.
      </p>
    </footer>
  );
};

export { Footer };
