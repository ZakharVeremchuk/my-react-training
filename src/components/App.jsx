// src/App.jsx
import  Product from './Product'
import { BookList } from './BookList';
import { Cars } from './Cars'
import { Alert } from './Alert'
import { Alert1 } from './Alert1'
import { Alert2 } from './Alert2'
import { Alert3 } from './Alert3'
import { HiUser } from "react-icons/hi";
import  ClickSaveHook  from './ClickSaveHook' 
import { useState } from 'react';
import LoginForm from './LoginForm';
import SearchBar from './SearchBar';
import LangSwitcher from './LangSwitcher';
import LoginForm2 from './LoginForm2';

const favBooks = [
    {id: "id-1", name: "JS for beginners"},
    {id: "id-2", name: "React basics" },
    {id: "id-3", name: "React Router overview"}
]

export default function App() {
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [coffeeSize, setCoffeeSize] = useState("sm");


  const [values, setValues] = useState({
      x:0,
      y:0,
  });

  const updateX = () => {
    setValues({
      ...values,
      x: values.x + 1
    });
  };
  const updateY = () => {
    setValues({
      ...values,
      y: values.y + 1
    });
  };

  // example that you can add as much as you want
  // сonst [a, setA] = useState();
  // const [b, setB] = useState();
  // const [c, setC] = useState();
  const handleClick = () => {
    alert("Im a button!");
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const doSmth = (evt) => {
    console.log(evt);
  };

  const countClicks = () => {
    setClicks(clicks + 1);
  };

  const CustomButton = ({message, children}) => {
    return (
        <button onClick={() => alert(message)}>{children}</button>
    )
  }

  const handleLogin = (userData) => {
    console.log(userData)
  }

  const [lang, setLang] = useState("uk");

  const handleSizeChange = (evt) => {
    setCoffeeSize(evt.target.value);
  }


  const [hasAccepted, setHasAccepted] = useState(false);

  const handleChange = (evt) => {
    setHasAccepted(evt.target.checked);
  }


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

      <button onClick={handleClick}> Click me!</button>
      <button onClick={() => alert("Im a button!")}>Click me too</button>
      <button onClick={doSmth}>Obj of event of browser(SyntheticBaseEvent)</button>
      <CustomButton message="Playing music">Play some music!</CustomButton>
      <CustomButton message="Uploading your data!">Upload data</CustomButton>
      <button onClick={countClicks}>Current: {clicks}</button>
      <button onClick={handleToggle}>{isOpen ? "Hide": "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}

      <div>
        <p>
          x: {values.x} , y: {values.y}
        </p>
        <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button>
      </div>

      <div>
        <ClickSaveHook/>
      </div>

      <div>
        <h1>Please login to your account!</h1>
        <LoginForm onLogin={handleLogin}/>
      </div>

      <SearchBar/>

      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang}/>

      <br/>

      <h1>Select coffee size</h1>
      <label>
        <input 
          type="radio" 
          name="coffeeSize" 
          value="sm"
          checked={coffeeSize === "sm"}
          onChange={handleSizeChange}
          />
        Small
      </label>
      <label>
        <input 
          type="radio" 
          name="coffeeSize" 
          value="md"
          checked={coffeeSize === "md"}
          onChange={handleSizeChange}
          />
        Medium
      </label>
      <label>
        <input 
          type="radio" 
          name="coffeeSize" 
          value="lg"
          checked={coffeeSize === "lg"}
          onChange={handleSizeChange}
          />
        Large
      </label>

      <br/>

      <div>
        <label>
          <input 
            type="checkbox" 
            name="terms"
            checked={hasAccepted}
            onChange={handleChange}
            />
          I accept terms and conditions
        </label>
        <button type="button" disabled={!hasAccepted}>Proceed</button>
      </div>

      <br/>

      <LoginForm2/>
    </>
  );
}