const CardPizza = ({ id, nombre, precio, ingredientes, img, onAddToCart }) => {
  const tipoMoneda = (precio) => {
    return precio.toLocaleString('es-CL');
  };

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={img} className="card-img-top" alt={nombre} />
      <div className="card-body">
        <h5 className="card-title">Pizza {nombre}</h5>
        <hr />
        <p className="card-text">
          <strong>Ingredientes:</strong>
        </p>
        <ul className="ingredientes-list">
          {ingredientes.map((ingrediente, index) => (
            <li key={index}>🍕 {ingrediente}</li>
          ))}
        </ul>
        <hr />
        <p className="card-text text-center">
          <strong>Precio: ${tipoMoneda(precio)}</strong>
        </p>
        <div className="d-flex justify-content-between">
          <button className="btn btn-outline-dark">Ver Más 👀</button>
          <button
            className="btn btn-dark"
            onClick={() => onAddToCart({ id, name: nombre, precio, img, ingredientes })}
          >
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>

  );
};

export default CardPizza;
