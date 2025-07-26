// src/App.jsx
import  Product from './Product'
import { BookList } from './BookList';
import { Cars } from './Cars'
import { Alert } from './Alert'
import { Alert1 } from './Alert1'
import { Alert2 } from './Alert2'
import { Alert3 } from './Alert3'
import { HiUser } from "react-icons/hi";

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

      <Alert variant="info">Please update your email!</Alert>
      <Alert variant="eror">There was an error during transaction!</Alert>
      <Alert variant="success">Payment received, thank you for your purchase!</Alert>
      <Alert variant="warning">Please update your profile contact information </Alert>
      <br />
      <Alert1 variant="info">Please update your email!</Alert1>
      <Alert1 variant="error" outlined>There was an error during transaction!</Alert1>
      <Alert1 variant="success" elevated>Payment received, thank you for your purchase!</Alert1>
      <Alert1 variant="warning" outlined elevated>Please update your profile contact information </Alert1>
      <br />
      <Alert2 variant="info">Please update your email!</Alert2>
      <Alert2 variant="error" outlined>There was an error during transaction!</Alert2>
      <Alert2 variant="success" elevated>Payment received, thank you for your purchase!</Alert2>
      <Alert2 variant="warning" outlined elevated>Please update your profile contact information </Alert2>
      <br />
       <Alert3 variant="info">
        Would you like to browse our recommended products?
      </Alert3>
      <Alert3 variant="error" outlined>
        There was an error during your last transaction
      </Alert3>
      <Alert3 variant="success" elevated>
        Payment received, thank you for your purchase
      </Alert3>
      <Alert3 variant="warning" outlined elevated>
        Please update your profile contact information
      </Alert3>
      <br />
      <div>
        <p><HiUser/></p>
      </div>
    </>
  );
}