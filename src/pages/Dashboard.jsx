import { useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [succes, setSucces] = useState("");
  const [addedNewProduct, setAddedNewProduct] = useState(null);

  const hundleSubmit = async (e) => {
    e.preventDefault();
    const newProduct = {
      id: crypto.randomUUID(),
      title: name,
      price: price,
      description: description,
      category: category,
      image: image,
    };

    const addProduct = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });
    const addedProduct = await addProduct.json();
    setAddedNewProduct(addedProduct);

    setSucces("Producto agregado!");
  };

  return (
    <>
      <h1>Panel de usuario</h1>
      <h2>Agregá un nuevo producto</h2>
      <h3>Ingresa los datos del nuevo producto</h3>
      <form onSubmit={hundleSubmit}>
        <label>
          Nombre:
          <input type="text" onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          URL de imagen:
          <input type="text" onChange={(e) => setImage(e.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </label>
        <label>
          Precio:
          <input type="number" onChange={(e) => setPrice(e.target.value)} />
        </label>
        <label>
          Category:
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </label>
        <button>Añadir producto</button>
      </form>
      {succes && <p>{succes}</p>}
      {addedNewProduct && (
        <div>
          <p>
            <strong>Producto: </strong>
            {addedNewProduct.title}
          </p>
          <img
            style={{ width: "80px" }}
            src={addedNewProduct.image}
            alt="Imagen del producto"
          />
          <p>
            <strong>Descripción: </strong>
            {addedNewProduct.description}
          </p>
          <p>
            <strong>Precio: </strong>
            {addedNewProduct.price}
          </p>
          <p>{addedNewProduct.category}</p>
        </div>
      )}
    </>
  );
};

export { Dashboard };
