import React, { Component } from 'react';
import './NewMatches.css';
import {matches} from '../../components/data';
import View from '../NewMatches/View';
import Player from '../NewMatches/Player'


class NewMatches extends Component {
    
    
    render() {
         
        return (
            <div>
            <div className="Match">
            {matches.map(match => (
                <div key={match.unique_id} className="NewMatch">
                <div className="Date"><b>Date & Time: </b>{match.date}</div>
                <div className="Teams"><b>Teams: </b>{match.team_1} VS {match.team_2}
                </div>
                <div className="Toss"><b>Venue: </b> {match.venue}</div>
                <div className="detail"><View /> </div>
                </div>
            ))}   
           
            </div>
            <div className="Players">
            <h1 className="hplay"><Player /> </h1>
            <h1 className="hplay"><Player /> </h1>
            <h1 className="hplay"><Player /> </h1>
            <h1 className="hplay"><Player /> </h1>
            
            </div>
            </div>
        )
    }
}

export default NewMatches
