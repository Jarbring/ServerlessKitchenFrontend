import React from 'react';
import './App.css';
import AxiosRequests from './Modules/AxiosRequests';

function App() {


  
  // AxiosRequests.testBackendConnection();
  // AxiosRequests.getRecipes();

  //--------------CREATE RECIPE TEST------------------
  // let recipe = {name: "Cotton Candy2000",
  // instructions: "Spinn it well!",
  // ingredients: [
  //         { name: "Sugar", quantity: 5 },
  //         { name: "Pink color", quantity: 10 }
  //     ]};
  // AxiosRequests.createRecipe(recipe);
  //--------------------------------------------------
  //--------------MODIFY RECIPE TEST------------------
  // let recipe = {name: null,
  // instructions: null,
  // ingredients: [
  //         { name: "Sugar", quantity: 5 },
  //         { name: "Pink color", quantity: 10 }
  //     ]};
  // AxiosRequests.modifyRecipe(recipe, 133);
  //--------------------------------------------------
  //AxiosRequests.getSpecificRecipe(130);
  //AxiosRequests.deleteRecipe(132);
  //AxiosRequests.make(134);
  //AxiosRequests.getInventory();
  // ------------FILL INVENTORY-----------------
  // AxiosRequests.fillInventory(
  //     [
  //       { name: "Sugar", quantity: 5 },
  //       { name: "Pink color", quantity: 10 }
  //     ]);
  // --------------------------------------------

  return (
    <div className="App">
      All is well
      <br/>
        <button onClick={() => AxiosRequests.clearDatabase()}>Clear Database</button>
    </div>
  );
}

export default App;
