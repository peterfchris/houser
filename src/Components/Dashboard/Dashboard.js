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
            <div className="dashboard">
                <div className="dash-header">
                    <p className="dash-title">Dashboard</p>
                    <button className="add-property-button">
                        <Link to='/wizard' className='add-button'>
                            Add New Property
                        </Link>
                    </button>
                </div>
                <div className="listings"><h3>Home Listings</h3></div>
                <div >
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
            </div>
        )
    }
}

export default Dashboard
