import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
                    <td>{this.state.recipeArray[i].name}</td>
                </tr>

            )
        }

        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th colSpan="2" style={{backgroundColor:"lightblue"}}><h2>Recipes</h2></th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Recipe Name</th>

                        </tr>
                    </thead>
                    <tbody>
                        {renderArray}
                    </tbody>
                </Table>
            </div>
        )

    }
}