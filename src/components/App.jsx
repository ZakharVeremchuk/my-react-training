// src/App.jsx
import  Product from './Product'
import { BookList } from './BookList';
import { Cars } from './Cars'

const favBooks = [
    {id: "id-1", name: "JS for beginners"},
    {id: "id-2", name: "React basics" },
    {id: "id-3", name: "React Router overview"}
]

export default function App() {
  return (
    <>
      <h1>Best selling</h1>

      <Product 
        name="Tacos with Lime"
        price={10.99}
      />
      <Product 
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />

      <BookList books={favBooks}/>

      <Cars>
        <h1>Hello from Cars</h1>
        <p>Text between opening and closing tag</p>
      </Cars>
    </>
  );
}