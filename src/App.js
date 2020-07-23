import React from 'react';
import './App.css';
import AxiosRequests from './modules/AxiosRequests';
import DisplayInventory from './modules/inventory/DisplayInventory';
import DisplayRecipes from './modules/recipes/DisplayRecipes';
import StartPage from './modules/StartPage';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {Route, Switch, Link, Redirect} from 'react-router-dom';

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
    <div className="App" >

<Navbar
  className="justify-content-center"
  bg="dark" variant="dark"
  activeKey="/"
  // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/">Start</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/recipes" eventKey="/recipes">Recipes</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/inventory" eventKey="/inventory">Inventory</Nav.Link>
  </Nav.Item>
</Navbar>

      <Switch>
        <Route exact path="/" component={StartPage}/>
        <Route exact path="/recipes" component={DisplayRecipes}/>
        <Route exact path="/inventory" component={DisplayInventory}/>

      </Switch>
    </div>
  );
}

export default App;

 
        