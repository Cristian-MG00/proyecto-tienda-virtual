import "../styles/pages/Dashboard.css";
import { useState } from "react";
import { Layout } from "../components/Layout";

const Dashboard = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [addedNewProduct, setAddedNewProduct] = useState(null);
  const [succes, setSucces] = useState("");
  const [error, setError] = useState("");

  const hundleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSucces("");
    setAddedNewProduct(null);

    if (!name || !price || !description || !category || !image) {
      setError("Debes completar todos los campos y elegir una categoría");
      return;
    }

    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: Number(price),
      description: description,
      category: category,
      image: image,
    };

    console.log(newProduct);

    const addProduct = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    if (!addProduct.ok) {
      setError("Ha ocurrido un error, vuelve a intentarlo mas tarde");
      return;
    }
    const addedProduct = await addProduct.json();
    setAddedNewProduct(addedProduct);

    setSucces("Producto agregado!");

    setName("");
    setImage("");
    setDescription("");
    setPrice("");
    setCategory("");
  };

  return (
    <Layout>
      <div className="cont-dashboard">
        <section className="cart-dashboard">
          <div className="cont-text-dashboard">
            <div className="text-dashboard">
              <h1>Panel de usuario</h1>
              <h2>Aquí podes agregar un nuevo producto</h2>
              <h3>Ingresá los datos del nuevo producto</h3>
            </div>
          </div>

          <div className="form-dashboard">
            <form onSubmit={hundleSubmit}>
              <div className="input-dashboard">
                <label>Nombre: </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>

              <div className="input-dashboard">
                <label>URL de imagen: </label>
                <input
                  type="text"
                  onChange={(e) => setImage(e.target.value)}
                  value={image}
                />
              </div>

              <div className="input-dashboard">
                <label>Description: </label>
                <textarea
                  rows={4}
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                ></textarea>
              </div>

              <div className="input-dashboard">
                <label>Precio: </label>
                <input
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>

              <div className="input-dashboard">
                <label>Categoría: </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  value={category}
                >
                  <option selected>Elegir categoría</option>
                  <option value="men's clothing">men's clothing</option>
                  <option value="jewelery">jewelery</option>
                  <option value="electronics">electronics</option>
                  <option value="women's clothing">women's clothing</option>
                </select>
              </div>

              <div className="button-dashboard">
                <button>Agregar producto</button>
              </div>

              <div className="error-dashboard">{error && <p>{error}</p>}</div>
              <div className="succes-dashboard">
                {succes && <p>{succes}</p>}
              </div>
            </form>
          </div>
        </section>

        {addedNewProduct && (
          <section className="new-product-dashboard">
            <div className="image-product-dashboard">
              <img
                style={{ width: "80px" }}
                src={addedNewProduct.image}
                alt="Imagen del producto"
              />
            </div>
            <p className="info-product-dashboard">
              <strong>Producto: </strong>
              {addedNewProduct.title}
            </p>
            <p className="info-product-dashboard">
              <strong>Descripción: </strong>
              {addedNewProduct.description}
            </p>
            <p className="info-product-dashboard">{addedNewProduct.category}</p>
            <p className="price-product-dashboard">
              <strong>Precio: $</strong>
              {addedNewProduct.price}
            </p>
          </section>
        )}
      </div>
    </Layout>
  );
};

export { Dashboard };
