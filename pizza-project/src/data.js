import capricciosa from "./assets/capricciosa.jpg";
import Diavola from "./assets/Diavola.jpg";
import fruttiDiMare from "./assets/FruttidiMare.jpg";
import margherita from "./assets/margherita.jpg";
import prosciutto from "./assets/ProsciuttoeRucola.jpg";
import quattro from "./assets/QuattroFormaggi.jpg";
const pizzaData = [
  {
    name: "Margherita",
    ingredients: "Tomato, Mozzarella, Basil",
    price: 12,
    photoName: margherita,
    soldOut: false,
  },
  {
    name: "Capricciosa",
    ingredients: "Tomato, Mozzarella, Ham, Mushrooms, Artichoke",
    price: 13,
    photoName: capricciosa,
    soldOut: true,
  },
  {
    name: "Prosciutto e Rucola",
    ingredients: "Tomato, Mozzarella, Prosciutto, Arugula",
    price: 16,
    photoName: prosciutto,
    soldOut: false,
  },
  {
    name: "Quattro Formaggi",
    ingredients: "Mozzarella, Gorgonzola, Parmesan, Fontina",
    price: 17,
    photoName: quattro,
    soldOut: false,
  },
  {
    name: "Diavola",
    ingredients: "Tomato, Mozzarella, Spicy Salami",
    price: 14,
    photoName: Diavola,
    soldOut: false,
  },

  {
    name: "Frutti di Mare",
    ingredients: "Tomato, Mozzarella, Mixed Seafood",
    price: 18,
    photoName: fruttiDiMare,
    soldOut: true,
  },
];

export default pizzaData;
