import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
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
                <div key={i}>
                    <li>{ingredientsArray[i].name}: {ingredientsArray[i].quantity}</li>
                </div>
            )
        }
        return ingredients;
    }

    makeRecipe = async (recipeId) => {
        let recipeToBeMade = await AxiosRequests.make(recipeId);
        if(recipeToBeMade && this.props.renderAgain) {
            this.props.renderAgain();
        }
    }

    editRecipe = async (recipeId) => {

    }

    deleteRecipe = async (recipeId) => {

    }

    render() {

        const renderArray = [];
        let changeColor = "";

        for (let i = 0; i < this.state.recipeArray.length; i++) {
            changeColor = (i % 2 === 0 ? "white" : "lightgrey")
            renderArray.push(

                <Row key={this.state.recipeArray[i].name}>
                    <Dropdown style={{ width: "100%" }}>
                        <Dropdown.Toggle id="dropdown-basic" style={{ backgroundColor: changeColor, width: "100%" }}>

                            <Row style={{ color: "black" }}>
                                <Col >{i + 1}</Col>
                                <Col >{this.state.recipeArray[i].name}</Col>
                                <Col>{this.state.recipeArray[i].ingredients.length}</Col>
                            </Row>


                            <Dropdown.Menu >
                            <Dropdown.Item className="text-center" href="#/action-2" style={{backgroundColor: "lightblue"}}>
                                    <h5>{this.state.recipeArray[i].name}</h5>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">
                                    <strong>Instructions</strong>
                                    <p>{this.state.recipeArray[i].instructions}</p>
                                </Dropdown.Item>

                                <Dropdown.Item href="/inventory">
                                    <strong>Ingredients</strong>
                                    <ul>
                                        {this.getIngredientList(this.state.recipeArray[i].ingredients)}
                                    </ul>
                                </Dropdown.Item>
                                <Row >
                                    <Col><Dropdown.Item style={{backgroundColor: "lightgreen"}} className="text-center rounded" onClick = {() => this.makeRecipe(this.state.recipeArray[i].id)} >Make</Dropdown.Item></Col>
                                    <Col><Dropdown.Item style={{backgroundColor: "lightyellow"}} className="text-center rounded" onClick = {() => this.editRecipe(this.state.recipeArray[i].id)} >Edit</Dropdown.Item></Col>
                                    <Col><Dropdown.Item style={{backgroundColor: "lightpink"}} className="text-center rounded" onClick = {() => this.deleteRecipe(this.state.recipeArray[i].id)} >Delete</Dropdown.Item></Col>
                                </Row>
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