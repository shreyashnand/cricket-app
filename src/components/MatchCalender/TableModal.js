import React,{Component} from 'react';
import './TableModal.css';
import {TableData} from '../MatchCalender/TableData';

class TableModal extends Component {
    
    render() {
        return (
            <div className="SummMode">
            <div>
            <div className="team">
            <div className="teamop">Team</div>
            <div className="teamop">Winner</div>
            <div className="teamop">Looser</div>
            <div className="teamop">Run rate</div>
            <div className="teamop">Drawn</div>
            <div className="teamop">Points</div>
            </div>
            {TableData.map(data =>(
                <div key={data.id} className="TableDat">
                <div className="amt">{data.team}</div>
                <div className="amt">{data.won}</div>
                <div className="amt">{data.lost}</div>
                <div className="amt">{data.runrate}</div>
                <div className="amt">{data.drawn}</div>
                <div className="amt">{data.Pts}</div>
                </div>
                
            ))}
            </div>
            
            <button className="btn">Close</button>
                
            </div>
        )
    }
}

export default TableModal

