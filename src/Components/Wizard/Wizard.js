import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            name: '',
            address: '',
            city: '', 
            state: '',
            zipcode: 0
        }
    }

    handlePropertyChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    handleAddressChange = (e) => {
        this.setState({
            address: e.target.value
        })
    }

    handleCityChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    handleStateChange = (e) => {
        this.setState({
            state: e.target.value
        })
    }

    handleZipChange = (e) => {
        this.setState({
            zipcode: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Wizard</h1>
                <form>
                    <p>Property Name:</p>
                    <input
                    type='text'
                    name='Property Name'
                    value={this.state.name}
                    onChange={this.handlePropertyChange} />
                    <p>Address</p>
                    <input
                    type='text'
                    name='Address'
                    value={this.state.address}
                    onChange={this.handleAddressChange} />
                    <p>City</p>
                    <input
                    type='text'
                    name='City'
                    value={this.state.city}
                    onChange={this.handleCityChange} />
                    <p>State</p>
                    <input
                    type='text'
                    name='State'
                    value={this.state.state}
                    onChange={this.handleStateChange} />
                    <p>Zip</p>
                    <input
                    type='text'
                    name='Zip'
                    value={this.state.zipcode}
                    onChange={this.handleZipChange} />
                    <button>
                        <Link to='/' className='cancel-button'>
                            Cancel
                        </Link>
                    </button>
                    <button>
                        <Link to='/' className='complete-button'>
                            Complete
                        </Link>
                    </button>
                </form>
            </div>
        )
    }
}

export default Wizard
