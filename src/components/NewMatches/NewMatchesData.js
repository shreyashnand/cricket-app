import React, { Component } from 'react';
import './NewMatchesData.css';

class NewMatchesData extends Component {
    state = {
    matches: [
    {
      unique_id: 1214574,
      date: "2020-08-16T00:00:00.000Z",
      dateTimeGMT: "2020-08-16T04:30:00.000Z",
      team_1: "Lankan Cricket Club",
      team_2: "Sinhalese Sports Club",
      type: "ODI",
      toss_winner_team: "Lankan Cricket Club",
      squad: false,
      winner_team: "Lankan Cricket Club",
      matchStarted: true
    },
    {
      unique_id: 1214575,
      date: "2020-08-16T00:00:00.000Z",
      dateTimeGMT: "2020-08-16T04:30:00.000Z",
      team_1: "Tamil Union Cricket and Athletic Club",
      team_2: "Moors Sports Club",
      type: "ODI",
      toss_winner_team: "Moors Sports Club",
      winner_team: "Moors Sports Club",
      squad: false,
      matchStarted: true
    },
    {
      unique_id: 1228927,
      date: "2020-08-16T00:00:00.000Z",
      dateTimeGMT: "2020-08-16T10:00:00.000Z",
      team_1: "Scorchers Women",
      team_2: "Typhoons Women",
      toss_winner_team: "Typhoons Women",
      winner_team: "Scorchers Women",
      squad: false,
      matchStarted: true,
      type: ""
    },
    {
      unique_id: 1229054,
      date: "2020-08-16T00:00:00.000Z",
      dateTimeGMT: "2020-08-16T04:30:00.000Z",
      team_1: "Nangarhar Province",
      team_2: "Faryab Province",
      squad: true,
      toss_winner_team: "Nangarhar Province",
      winner_team: "Faryab Province",
      matchStarted: true,
      type: ""
    },
    {
      unique_id: 1229053,
      date: "2020-08-16T00:00:00.000Z",
      dateTimeGMT: "2020-08-16T04:30:00.000Z",
      team_1: "Kandahar Province",
      team_2: "Maidan Wardak Province",
      squad: true,
      toss_winner_team: "Kandahar Province",
      winner_team: "Maidan Wardak Province",
      matchStarted: true,
      type: ""
    }
    ]
    }
    render() {
        return (
            <div className="Match">
            {this.state.matches.map(match => (
                <div key={match.unique_id} className="NewMatch">
                {match.date}
                <div>{match.team_1} VS {match.team_2}</div>
                <div>{match.toss_winner_team}</div>
                <div>{match.winner_team}</div>
                </div>
            ))}
                
            </div>
        )
    }
}

export default NewMatchesData
