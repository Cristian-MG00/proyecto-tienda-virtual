import { useState, useEffect } from "react";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [popup, setPopup] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [productToEdit, setProductToEdit] = useState();

  // Obtener la lista de productos con fetch (GET)
  const fetchingProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
    });
    const data = await response.json();
    setProducts(data);
  };
  // Ejecutar la obtencion de los productos despues despues de renderizar todo lo demas, usando useEffect()
  useEffect(() => {
    fetchingProducts();
  }, []);

  // Al hacer click en "Actualizar" llamo a esta funcion mandandole como parámetro el producto.
  // Muestro el popup cambiando el valor del estado "popup" de null a true.
  // Le doy a los estados que simulan a las propiedades el valor de las propiedades actuales del producto iterado (traído como parametro)
  // Cambio el valor del estado setProductToEdit por el producto iterado.
  const showPopup = (product) => {
    setPopup(true);
    setName(product.title);
    setPrice(product.price);
    setDescription(product.description);
    setCategory(product.category);
    setImage(product.image);
    setProductToEdit(product);
  };

  // Cuando se envia el producto con los datos actualizados creo un objeto con los mismos.
  const hundleSubmitPopup = (e) => {
    e.preventDefault();
    const productEdited = {
      id: productToEdit.id,
      title: name,
      price: price,
      description: description,
      category: category,
      image: image,
    };
    console.log(productEdited.price);
    setProductToEdit(productEdited);
    console.log(productToEdit.price);

    // const response = await fetch(
    //   `https://fakestoreapi.com/products/${product.id}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(productToEdit),
    //   }
    // );

    // const data = await response.json();
    // console.log(data.title);
  };

  const hundleUpdate = async (product) => {};

  // borrar esto despues
  const num = 1;

  return (
    <>
      <h1>Tienda Virtual</h1>
      <h2>Nuestros productos</h2>

      {popup && (
        <div>
          <button>Cerrar</button>
          <h2>Actualizar datos</h2>
          <form onSubmit={(e) => hundleSubmitPopup(e)}>
            <label>
              Nombre:{" "}
              <input
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <label>
              Precio:{" "}
              <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <label>
              Descripción:{" "}
              <textarea
                type="text"
                placeholder="Descripción"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>
            <label>
              Categoría:
              <input
                type="text"
                placeholder="Categoría"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
            </label>
            <label>
              image:
              <input
                type="text"
                placeholder="URL de la imagen"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </label>
            <button>Actualizar</button>
          </form>
        </div>
      )}

      {products.map((product) => {
        return (
          <div>
            <p>
              <strong>Producto: </strong>
              {product.title}
            </p>
            <img style={{ width: "80px" }} src={product.image} alt="" />
            <p>
              <strong>Descripción: </strong>
              {product.description}
            </p>
            <p>
              <strong>Precio: </strong>
              {product.price}
            </p>
            <p>{product.category}</p>
            {/* aca va user en vez de num */}
            {num && (
              <div>
                <button onClick={() => showPopup(product)}>Actualizar</button>
                <button onClick={() => hundleDelete()}>Eliminar</button>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export { Home };
