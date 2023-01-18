import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import CardDulces from "./components/CardDulces";
import panditas from "./imgs/panditas.jpeg"
import picas from "./imgs/picas.jpeg"
import maguitos from "./imgs/maguitos.jpeg"
import "./components/CardDulces.css"

function App() {
  const dulcesCards = [
    {
      name: "Panditas",
      price: 35,
      desc: "Ositos de goma enchilados ricos en alegria",
      img: panditas,
    },
    {
      name: "Pica Fresas",
      price: 30,
      desc: "Riquisimas picagomas enchiladas",
      img: picas,
    },
    {
      name: "Manguitos",
      price: 35,
      desc: "Mangomas Picositos riquisimos",
      img: maguitos
    },
  ];

  const displayCards = dulcesCards.map((dulces) => {
    return (
      <CardDulces
        name={dulces.name}
        price={dulces.price}
        desc={dulces.desc}
        img={dulces.img}
      />
    );
  });

  return (
    <div>
      <NavBar />
      <h1>Catalogo</h1>
      <div className="container">
        {displayCards}
      </div>
    </div>
  );
}

export default App;
