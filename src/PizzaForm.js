import React, { useState } from "react";
import "./App.css";
import ReactDom from "react-dom";
import axios from "axios";

const PizzaForm = () => {
  // name
  const [fnameInput, setFnameInput] = useState("");

  console.log(fnameInput);
  // size
  const [size, setSize] = useState("");
  console.log(size);
  // sause
  const [originalRedSauce, setOriginalRedSauce] = useState(false);
  const [garlicRanchSauce, setGarlicRanch] = useState(false);
  const [bbqSuace, setBbqSauce] = useState(false);
  const [spinachAlfredoSauace, setSpinachAlfredoSauce] = useState(false);

  // toppings
  const [toppingPepperoni, setToppingPepperoni] = useState(false);
  const [toppingOnions, setToppingOnions] = useState(false);
  const [toppingBacon, setToppingBacon] = useState(false);
  const [toppingSausage, setToppingSausage] = useState(false);
  console.log(toppingPepperoni);
  console.log(toppingOnions);
  console.log(toppingBacon);
  console.log(toppingSausage);

  // intructions
  const [instructions, setInstructions] = useState("");
  // //Submit button
  // const [addToOrder, setAddToOrder] = useState("");

  return (
    <div>
      <h2>Build Your Own Pizza</h2>

      <form
        onSubmit={event => {
          event.preventDefault();
          axios.post("/", { fnameInput, size, instructions });
        }}
      >
        {/* Text Box */}
        {/* customer name */}
        <label htmlFor='fnameInput'>Customer Name</label>
        <input
          onChange={event => {
            setFnameInput(event.target.value);
          }}
          maxLength='30'
          placeholder='Full Name'
          id='fnameInput'
          type='text'
          name='fname'
        />
        {/* <h3>The name is {fnameInput || "unknown"} </h3>
        <h3>Size is {setSize || "unknown"}</h3> */}
        <span className='required'>Required</span>
        <br />
        <br />
        <label>
          Select Size:
          <select
            onChange={event => {
              setSize(event.target.value);
            }}
            id='size'
          >
            <option />
            <option value='1'>Large</option>
            <option value='2'>Medium</option>
            <option value='3'>Small</option>
          </select>
        </label>
        <span className='required'>Required</span>
        <br />
        <br />
        {/* Choose Sauce */}
        {/* Radio Button */}
        <label>Choice of Sauce</label>
        <br />
        <input type='radio' name='originalRedSauce' />
        <span>Original Red</span>
        <br />
        <input type='radio' name='garlicRanchSauce' />
        <span>Garlic Ranch</span>
        <br />
        <input type='radio' name='bbqSauce' />
        <span>BBQ Sauce</span>
        <br />
        <input type='radio' name='spinachAlfredoSauce' />
        <span>Spinach Alfredo</span>
        <br />
        <span className='required'>Required</span>
        <br />
        <br />
        {/*Check Box  */}
        {/* Add toppings */}
        <label>Add Toppings</label>
        <br />
        <input
          type='checkbox'
          name='toppingPepperoni'
          onChange={event => {
            setToppingPepperoni(event.target.checked);
          }}
        />
        <span>Pepperoni</span>
        <br />
        <input
          type='checkbox'
          name='toppingOnions'
          onChange={event => {
            setToppingOnions(event.target.checked);
          }}
        />
        <span>Onions</span>
        <br />
        <input
          type='checkbox'
          name='toppingBacon'
          onChange={event => {
            setToppingBacon(event.target.checked);
          }}
        />
        <span>Canadian Bacon</span>
        <br />
        <input
          type='checkbox'
          name='toppingSausage'
          onChange={event => {
            setToppingSausage(event.target.checked);
          }}
        />
        <span>Spicy Italian Sausage</span>
        <br />

        <br />
        <br />
        {/* Special Instructions */}
        <label htmlFor='instructInput'>Special Instructions</label>
        <input
          maxLength='30'
          placeholder="Anything else you'd like to add?"
          id='instructions'
          type='text'
          name='specialInstruction'
          onChange={event => {
            setInstructions(event.target.value);
          }}
        />
        <span className='required'>Optional</span>
        {/* Add to order button */}
        <br />
        <button>Add to Order</button>
        {/* <input type='submit' value='Add to Order' name='buttonSubmit' /> */}
      </form>
    </div>
  );
};

export default PizzaForm;
