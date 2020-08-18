import React, { Component } from 'react';
import './Modal.css'

class modal extends Component {
    render() {
        return (
            <div className="Modal">
            <div className="Display">
            <b>Team 1</b>
            <b>Team 2</b>
            </div>
            <p> OOPS!! Seems like a problem. Unable to fetch details. Try again later. </p>   
            
            </div>
        )
    }
}

export default modal
