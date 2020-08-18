import React, { Component } from 'react';
import './OldMatches.css';
import {matches} from '../../components/olddata';

class OldMatches extends Component {
    
    render() {
        return (
            <div className="Match">
            {matches.map(match => (
                <div key={match.unique_id} className="NewMatch">
                <div className="Date"><b>Date & Time: </b>{match.date}</div>
                <div className="Teams"><b>Teams: </b>{match.team_1} VS {match.team_2}
                </div>
                <div className="Toss"><b>Toss Winner: </b> {match.toss_winner_team}</div>
                <div className="Winner"><b>Match Winner: </b>{match.winner_team}</div>
                </div>
            ))}
                
            </div>
        )
    }
}

export default OldMatches
