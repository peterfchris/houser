import React, { Component } from 'react'
import House from '../House/House'
import {Link} from 'react-router-dom'

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <House />
                <button>
                    <Link to='/wizard' className='add-button'>
                        Add New Property
                    </Link>
                </button>
            </div>
        )
    }
}

export default Dashboard
