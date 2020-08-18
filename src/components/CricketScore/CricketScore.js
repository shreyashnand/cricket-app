import React, { Component } from 'react';
import './CricketScore.css';
import {details} from '../../components/score';

class CricketScore extends Component {
    
    render() {
        return (
            <div className="cricketscore">
            <div>
            {details.map(detail =>(
                <div key={detail.id} className="Score">
                <div> <b>{detail.team_1}</b> VS <b>{detail.team_2}</b></div>
                <div>
                <div className="bat">Batting: {detail.team_1}</div>
                <b>{detail.score}</b>
                (<b>{detail.overs}</b>)
                <div>{detail.player_1}:{detail.player_1Score}({detail.balls1})*</div>
                <div>{detail.player_2}:{detail.player_2Score}({detail.balls2})*</div>
                </div>
                </div>
            ))}
            </div>
                
            </div>
        )
    }
}

export default CricketScore
