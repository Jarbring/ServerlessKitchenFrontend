import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


export default class DisplayRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            recipeArray: []
        }
    }

    async componentDidMount() {
        const recipesImport = await AxiosRequests.getRecipes();
        this.setState({
            recipeArray: recipesImport
        })
    }

    getIngredientList = (ingredientsArray) => {
        let ingredients = [];
        for (let i = 0; i < ingredientsArray.length; i++) {
            ingredients.push(
                <div>
                    <li>{ingredientsArray[i].name}: {ingredientsArray[i].quantity}</li>
                </div>
            )
        }
        return ingredients;
    }

    render() {

        const renderArray = [];
        let changeColor = "";

        for (let i = 0; i < this.state.recipeArray.length; i++) {
            changeColor = (i % 2 === 0 ? "white" : "lightgrey")
            renderArray.push(

                <Row >
                    <Dropdown style={{ width: "100%" }}>
                        <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: changeColor, width: "100%" }}>

                            <Row style={{ color: "black" }}>
                                <Col >{i + 1}</Col>
                                <Col >{this.state.recipeArray[i].name}</Col>
                                <Col>{this.state.recipeArray[i].ingredients.length}</Col>
                            </Row>


                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-2">
                                    Instructions
                                    <p>{this.state.recipeArray[i].instructions}</p>
                                </Dropdown.Item>

                                <Dropdown.Item href="/inventory">
                                    Ingredients
                                    <ul>
                                        {this.getIngredientList(this.state.recipeArray[i].ingredients)}
                                    </ul>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Make</Dropdown.Item>
                            </Dropdown.Menu>


                        </Dropdown.Toggle>
                    </Dropdown>
                </Row>


            )
        }

        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <h2 className="text-center">Recipes</h2>
                        </Col>
                    </Row>
                    <Row colSpan="2" style={{ backgroundColor: "lightblue" }}>
                        <Col>
                            #
                    </Col>
                        <Col>
                            Recipe Name
                    </Col>
                        <Col>
                            Number of ingredients
                    </Col>
                    </Row>
                
                {renderArray.length ? renderArray : "Loading..."}
                </Container>
                <Button >Add Recipe</Button>
            </div>
        )

    }
}