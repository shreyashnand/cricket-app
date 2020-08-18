import React, { Component } from 'react';
import './MatchCalender.css';
import {calender} from '../../components/match';

class MatchCalender extends Component {
    render() {
        return (
            <div className="calender">
            {calender.map(cal =>(
                <div key={cal.id} className="cal">
                <b>Time</b><b>Venue</b><b>Teams</b> <div>{cal.dateTimeGMT}</div>
                <div>{cal.team_1} VS {cal.team_2}</div>
                <div>{cal.venue}</div>
                 
                </div>
               

            ))}
            </div>
        )
    }
}

export default MatchCalender
