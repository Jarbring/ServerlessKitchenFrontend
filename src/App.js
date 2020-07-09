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
  //AxiosRequests.getSpecificRecipe(130);


  return (
    <div className="App">
      All is well
      <br/>
        <button onClick={() => this.AxiosRequests.clearDatabase()}>Clear Database</button>
    </div>
  );
}

export default App;
