import React from 'react';
import AxiosRequests from '../AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


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
        let changeColor = "";

        for (let i = 0; i < this.state.inventoryArray.length; i++) {
            changeColor = (i % 2 === 0 ? "white" : "lightgrey")
            renderArray.push(
                <Row key={this.state.inventoryArray[i].name} style={{ backgroundColor: changeColor }}>
                    <Col>{this.state.inventoryArray[i].name}</Col>
                    <Col>{this.state.inventoryArray[i].quantity}</Col>
                </Row>

            )
        }

        return (
            <div >
                <Container style={{width: "70%"}}>
                <Row>
                    <Col><h2 >Inventory</h2></Col>
                </Row>
                <Row style={{backgroundColor: "lightblue"}}>
                    <Col>Ingredient</Col>
                    <Col>Qty</Col>
                </Row>
                {renderArray}
                </Container>

                <Button >Add Ingredients</Button>
            </div>
        )

    }
}