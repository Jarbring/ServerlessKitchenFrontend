import React from 'react';
import AxiosRequests from '../AxiosRequests';

export default class DisplayInventory extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            inventoryArray:[]
        }
    }

    async componentDidMount(){
        const inventoryImport = await AxiosRequests.getInventory();
        this.setState({
            inventoryArray:inventoryImport
        })
    }

     render() {

        return (

            <div>
                <h1>
                    Displaying inventory!
                </h1>
                <h2>
                    {this.state.inventoryArray.length ? this.state.inventoryArray[0].name : "Loading..."}
                </h2>
            </div>
        )

    }
}