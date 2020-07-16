import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

export default class DisplayInventory extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            inventoryArray: []
        }
    }

    async componentDidMount() {
        const inventoryImport = await AxiosRequests.getInventory();
        this.setState({
            inventoryArray: inventoryImport
        })
    }

    render() {

        const renderArray = [];

        for (let i = 0; i < this.state.inventoryArray.length; i++) {
            renderArray.push(
                <tr key={this.state.inventoryArray[i].name}>
                    <td>{this.state.inventoryArray[i].name}</td>
                    <td>{this.state.inventoryArray[i].quantity}</td>
                </tr>

            )
        }

        return (
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th colSpan="2" style={{backgroundColor:"lightgreen"}}><h2 >Inventory</h2></th>
                        </tr>
                        <tr>
                            <th>Ingredient</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderArray}
                    </tbody>
                </Table>
                <Button >Add Ingredients</Button>
            </div>    
        )

    }
}