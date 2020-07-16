import React from 'react';
import './App.css';
import AxiosRequests from './modules/AxiosRequests';
import DisplayInventory from './modules/inventory/DisplayInventory';
import DisplayRecipes from './modules/recipes/DisplayRecipes';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
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
    <div className="App">

      <Switch>
        <Route exact path="/" component={DisplayRecipes}/>
        <Route exact path="/inventory" component={DisplayInventory}/>

      </Switch>

      <Row>
        <Col>
          <Button variant="danger" onClick={() => AxiosRequests.clearDatabase()}>Clear Database</Button>
        </Col>
        <br></br>
        <br></br>
      </Row>
      <Row>
        <Col sm="8" className="ml-3">
          <DisplayRecipes />
        </Col>
        <Col xs="1">
          <DisplayInventory />
        </Col>
      </Row>
        
        
    </div>
  );
}

export default App;
