import React from 'react';
import AxiosRequests from './AxiosRequests';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DisplayInventory from './inventory/DisplayInventory';
import DisplayRecipes from './recipes/DisplayRecipes';

function StartPage() {

    return (
        <Container>
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
        </Container>
    )

}

export default StartPage