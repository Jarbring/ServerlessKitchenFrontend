import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';

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

    render() {

        const renderArray = [];

        for (let i = 0; i < this.state.recipeArray.length; i++) {
            renderArray.push(
                <tr key={this.state.recipeArray[i].name}>
                    <td>{i + 1}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="white" id="dropdown-basic">
                                {this.state.recipeArray[i].name}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    Instructions
                                    <p>{this.state.recipeArray[i].instructions}</p>
                                </Dropdown.Item>

                                <Dropdown.Item>
                                    Ingredients
                                    <ul>
                                        <li>
                                            {this.state.recipeArray[i].ingredients[i].name}: {this.state.recipeArray[i].ingredients[i].quantity}
                                        </li>
                                    </ul>
                                </Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Make</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>



                    </td>
                </tr>

            )
        }

        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th colSpan="2" style={{ backgroundColor: "lightblue" }}><h2>Recipes</h2></th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Recipe Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {renderArray.length ? renderArray : "Loading..."}
                    </tbody>
                </Table>
                <Button >Add Recipe</Button>
            </div>
        )

    }
}