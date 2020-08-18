import React, { Component } from 'react';
import './NewMatches.css';
import {matches} from '../../components/data';
import View from '../NewMatches/View';


class NewMatches extends Component {
    
    
    render() {
         
        return (
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
        )
    }
}

export default NewMatches
