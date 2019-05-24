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
            <div className="house">
                <p>{this.props.name}</p>
                <p>{this.props.address}</p>
                <p>{this.props.city}</p>
                <p>{this.props.state}</p>
                <p>{this.props.zipcode}</p>
                <button className="delete" onClick={this.props.delete}>X</button>
            </div>
        )
    }
}

export default House
