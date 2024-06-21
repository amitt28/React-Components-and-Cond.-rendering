import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Card from './components/card.jsx'
const foodItems = [
  {
    title: "Pizza",
    imageUrl: "https://source.unsplash.com/1600x1000/?Pizza",
    price: 300,
    description: "Delicious pizza with a variety of toppings",
    type: "veg",
    ratings: 4.5,
    votes: 200
  },
  {
    title: "Burger",
    imageUrl: "https://source.unsplash.com/1600x1000/?Burger",
    price: 200,
    description: "Juicy burger with cheese and veggies",
    type: "veg",
    ratings: 4.2,
    votes: 150
  },
  {
    title: "Chicken Wings",
    imageUrl: "https://source.unsplash.com/1600x1000/?Chicken-Wings",
    price: 350,
    description: "Spicy chicken wings served with dipping sauce",
    type: "non-veg",
    ratings: 4.8,
    votes: 180
  },
  {
    title: "Salad",
    imageUrl: "https://source.unsplash.com/1600x1000/?Salad",
    price: 150,
    description: "Fresh and healthy salad with mixed greens",
    type: "veg",
    ratings: 4.0,
    votes: 100
  },
  {
    title: "Pasta",
    imageUrl: "https://source.unsplash.com/1600x1000/?Pasta",
    price: 250,
    description: "Creamy pasta with a rich tomato sauce",
    type: "veg",
    ratings: 4.3,
    votes: 120
  },
  {
    title: "Sushi",
    imageUrl: "https://source.unsplash.com/1600x1000/?Sushi",
    price: 400,
    description: "Fresh sushi rolls with assorted seafood",
    type: "non-veg",
    ratings: 4.7,
    votes: 220
  },
  {
    title: "Tacos",
    imageUrl: "https://source.unsplash.com/1600x1000/?Tacos",
    price: 180,
    description: "Crunchy tacos filled with meat and veggies",
    type: "non-veg",
    ratings: 4.1,
    votes: 130
  },
  {
    title: "Ice Cream",
    imageUrl: "https://source.unsplash.com/1600x1000/?Ice-Cream",
    price: 100,
    description: "Creamy and refreshing ice cream in various flavors",
    type: "veg",
    ratings: 4.6,
    votes: 190
  }
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
     <div className="container">
         {
          foodItems.map((items)=>{
                 return <Card title= {items.title} price={items.price} desc={items.description} img={items.imageUrl} ratings={items.ratings} />
          })
         } 
     </div>
  </>

)
