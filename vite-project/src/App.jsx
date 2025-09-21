import Menu from "./MenuComponent/Menu";

function App() {
  const menu = [
    {
      id: 1,
      title: "Spaghetti bolognese",
      price: "159 kr",
      ingredients: "Spaghetti, meat sauce, parmesan",
      category: "Main course",
    },
    {
      id: 2,
      title: "Creamy chicken soup",
      price: "129 kr",
      ingredients: "Chicken, cream, carrots, celery",
      category: "Appetizer",
    },
    {
      id: 3,
      title: "Margarita pizza",
      price: "169 kr",
      ingredients: "Tomato sauce, mozzarella, basil",
      category: "Main course",
    },
    {
      id: 4,
      title: "Sushi mix",
      price: "229 kr",
      ingredients: "Salmon, tuna, shrimp, rice",
      category: "Main course",
    },
    {
      id: 5,
      title: "Caesar salad",
      price: "139 kr",
      ingredients: "Romano salad, chicken, parmesan, dressing",
      category: "Appetizer",
    },
    {
      id: 6,
      title: "Brownie with ice cream",
      price: "89 kr",
      ingredients: "Brownie, vanilla ice cream, chocolate sauce",
      category: "Dessert",
    },
    {
      id: 7,
      title: "Taco plate",
      price: "199 kr",
      ingredients: "Meat dough, corn, cheese, guacamole",
      category: "Main course",
    },
    {
      id: 8,
      title: "Pancakes with jam",
      price: "99 kr",
      ingredients: "Pancakes, strawberry jam, sugar",
      category: "Dessert",
    },
    {
      id: 9,
      title: "Shrimp with lemon",
      price: "149 kr",
      ingredients: "Shrimp, lemon, dill, bread",
      category: "Appetizer",
    },
    {
      id: 10,
      title: "Entrecôte with vegetables",
      price: "289 kr",
      ingredients: "Entrecôte, asparagus, potatoes, pepper sauce",
      category: "Main course",
    },
  ];
  return <Menu items={menu} />;
}

export default App;
