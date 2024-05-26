import { useState } from "react";

function App() {

  const [pepperoni, setPepperoni] = useState(false);

  function togglePepperoni(e) {
    setPepperoni(e.target.checked);
  }
  return (
    <div>
      <h1>Select pizza Toppings</h1>
      <input 
      type="checkbox"  
      id="pepperoni" 
      checked={pepperoni}
      aria-checked={pepperoni}
      onChange={togglePepperoni}
      />
      <label htmlFor="pepperoni">Add Pepperoni</label>
      <h2>Your Toppings:</h2>
      <ul>
        <li>Cheese</li>
        {pepperoni? <li>Pepperoni</li> : null}
      </ul>

    </div>
  )
}

export default App;