import Menu from "./MenuComponent/Menu";
import imageBolognese from "./assets/bolognese.JPG";
import imageBronwie from "./assets/brownie.JPG";
import imageEntrecote from "./assets/entrecote.JPG";
import imagePancake from "./assets/pancake.JPG";
import imagePizza from "./assets/pizza.JPG";
import imageSalad from "./assets/salad.JPG";
import imageShrimp from "./assets/shrimp.JPG";
import imageSoup from "./assets/soup.JPG";
import imageSushi from "./assets/sushi.JPG";
import imageTaco from "./assets/taco.JPG";

function App() {
  const menu = [
    {
      id: 1,
      title: "Spaghetti bolognese",
      price: "159 kr",
      ingredients: "Spaghetti, meat sauce, parmesan",
      category: "Main course",
      image: imageBolognese,
    },
    {
      id: 2,
      title: "Creamy chicken soup",
      price: "129 kr",
      ingredients: "Chicken, cream, carrots, celery",
      category: "Appetizer",
      image: imageSoup,
    },
    {
      id: 3,
      title: "Margarita pizza",
      price: "169 kr",
      ingredients: "Tomato sauce, mozzarella, basil",
      category: "Main course",
      image: imagePizza,
    },
    {
      id: 4,
      title: "Sushi mix",
      price: "229 kr",
      ingredients: "Salmon, tuna, shrimp, rice",
      category: "Main course",
      image: imageSushi,
    },
    {
      id: 5,
      title: "Caesar salad",
      price: "139 kr",
      ingredients: "Romano salad, chicken, parmesan, dressing",
      category: "Appetizer",
      image: imageSalad,
    },
    {
      id: 6,
      title: "Brownie with ice cream",
      price: "89 kr",
      ingredients: "Brownie, vanilla ice cream, chocolate sauce",
      category: "Dessert",
      image: imageBronwie,
    },
    {
      id: 7,
      title: "Taco plate",
      price: "199 kr",
      ingredients: "Meat dough, corn, cheese, guacamole",
      category: "Main course",
      image: imageTaco,
    },
    {
      id: 8,
      title: "Pancakes with jam",
      price: "99 kr",
      ingredients: "Pancakes, strawberry jam, sugar",
      category: "Dessert",
      image: imagePancake,
    },
    {
      id: 9,
      title: "Shrimp with lemon",
      price: "149 kr",
      ingredients: "Shrimp, lemon, dill, bread",
      category: "Appetizer",
      image: imageShrimp,
    },
    {
      id: 10,
      title: "Entrecôte with vegetables",
      price: "289 kr",
      ingredients: "Entrecôte, asparagus, potatoes, pepper sauce",
      category: "Main course",
      image: imageEntrecote,
    },
  ];

  return <Menu items={menu} />;
}

export default App;
