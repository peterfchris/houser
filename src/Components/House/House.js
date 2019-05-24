import React, { Component } from 'react'

export class House extends Component {
    constructor() {
        super()

        this.state = {
            propertyList: [],
        }
    }
    render() {
        return (
            <div>
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipcode}</p>
                <button>Delete</button>
            </div>
        )
    }
}

export default House
