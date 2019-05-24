import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'
import Axios from 'axios';

export class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            propertyList: [],
            name: '',
            address: '',
            city: '', 
            state: '',
            zipcode: 0
        }
    }

    componentDidMount() {
        Axios.get('api/properties')
        .then((properties) => {
            this.setState({
                propertyList: properties.data
            })
        })
    }

    handleDeleteProperty = () => {
        Axios.delete(`/api/deleteProperty/${this.state.id}`)
        .then(data => {
            this.setState({
                name: data,
                address: data,
                city: data, 
                state: data,
                zipcode: data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <button>
                    <Link to='/wizard' className='add-button'>
                        Add New Property
                    </Link>
                </button>
                {this.state.propertyList.map(property => {
                    console.log(property)
                    return (
                        <House
                        key={property.user_id}
                        name={property.property_name}
                        address={property.address}
                        city={property.city}
                        state={property.state}
                        zipcode={property.zipcode}
                        delete={this.handleDeleteProperty} />
                    ) 
                })}
            </div>
        )
    }
}

export default Dashboard
