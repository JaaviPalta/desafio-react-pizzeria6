import { useState, useEffect, useContext } from 'react';
import Header from '../components/Header';
import CardPizza from '../components/CardPizza';
import { CartContext } from '../context/CartContext';

const Home = () => {
  const [pizzas, setPizzas] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
    const url = "http://localhost:5001/api/pizzas";
    const response = await fetch(url);
    const data = await response.json();
    setPizzas(data);
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row justify-content-center g-4">
          {pizzas.map((pizza) => (
            <div key={pizza.id} className="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
              <CardPizza
                id={pizza.id}
                nombre={pizza.name}
                precio={pizza.precio}
                ingredientes={pizza.ingredientes}
                img={pizza.img}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
