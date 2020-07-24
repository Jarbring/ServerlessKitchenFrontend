import React from 'react';
import AxiosRequests from './AxiosRequests';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import DisplayInventory from './inventory/DisplayInventory';
import DisplayRecipes from './recipes/DisplayRecipes';

export default class StartPage extends React.Component {
    constructor(props){
        super(props)
        this.state={
            refreshElement: false
        }
    }

    renderAgain = () => {
        this.setState({
          refreshElement: true
        })
    }

    dontRenderAgain = () => {
        this.setState({
          refreshElement: false
        })
    }

render() {

    return (
        <Container >
            <Row>
                <Col>
                    <Button variant="danger" onClick={() => AxiosRequests.clearDatabase()}>Clear Database</Button>
                </Col>
                <br></br>
                <br></br>
            </Row>
            <Row>
                
                <Col md="7">
                    <DisplayRecipes renderAgain={this.renderAgain}/>
                </Col>
                <Col md="4">
                    <DisplayInventory updateProps={this.state.refreshElement} dontRenderAgain={this.dontRenderAgain}/>
                </Col>
            </Row>
        </Container>
    )

}
}